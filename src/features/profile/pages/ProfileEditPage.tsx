import { Image } from "@/components/Image";
import { Reload } from "@/components/Reload";
import { Spinner } from "@/components/Spinner";
import { TopBarWithProps } from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import {
  useGetMyProfileQuery,
  useUpdateProfileAvatarMutation,
  useUpdateProfileBannerMutation,
  useUpdateProfileMutation,
} from "@/features/profile/api/profile";
import { ImageCropperDialog } from "@/features/profile/components/ImageCropperDialog";
import { Profile } from "@/features/profile/models/profile";
import { useUpdateMyUsernameMutation } from "@/features/user/api/user";
import { findSpecifiedImageOrFirst } from "@/utils/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { At, PencilSimple } from "@phosphor-icons/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Resizer from "react-image-file-resizer";
import { useFilePicker } from "use-file-picker";
import { z } from "zod";

const formSchema = z.object({
  username: z
    .string({
      required_error: "Tên tài khoản không được để trống",
    })
    .min(6, {
      message: "Tên tài khoản phải có ít nhất 6 ký tự",
    })
    .max(20, {
      message: "Tên tài khoản không được quá 20 ký tự",
    }),
  name: z
    .string({
      required_error: "Tên tài khoản không được để trống",
    })
    .max(50, {
      message: "Tên hiển thị không được quá 50 ký tự",
    })
    .optional(),
  bio: z
    .string()
    .max(200, {
      message: "Mô tả không được quá 200 ký tự",
    })
    .optional(),
});

export const ProfileEditPage = () => {
  const profileQuery = useGetMyProfileQuery();
  const [updateUserUsername, { isLoading: isUpdating }] =
    useUpdateMyUsernameMutation();
  const [updateProfileMutation] = useUpdateProfileMutation();
  const [updateProfileAvatarMutation] = useUpdateProfileAvatarMutation();
  const [updateProfileBannerMutation] = useUpdateProfileBannerMutation();
  const [openAvatarCropper, setOpenAvatarCropper] = useState(false);
  const [openBannerCropper, setOpenBannerCropper] = useState(false);

  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [bannerUrl, setBannerUrl] = useState<string | null>(null);

  const profile: Profile = profileQuery.data?.data;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    disabled: isUpdating,
  });
  const { openFilePicker: openAvatarPicker, filesContent: avatarContent } =
    useFilePicker({
      accept: ["image/*"],
      readAs: "DataURL",
      onFilesSuccessfullySelected: (files) => {
        if (files.filesContent.length > 0) {
          setOpenAvatarCropper(true);
        }
      },
    });
  const { openFilePicker: openBannerPicker, filesContent: bannerContent } =
    useFilePicker({
      accept: ["image/*"],
      readAs: "DataURL",
      onFilesSuccessfullySelected: (files) => {
        if (files.filesContent.length > 0) {
          setOpenBannerCropper(true);
        }
      },
    });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    updateUserUsername({ username: data.username });
    updateProfileMutation({
      name: data.name,
      bio: data.bio,
    });
    if (avatarUrl) {
      const blob = await (await fetch(avatarUrl)).blob();
      Resizer.imageFileResizer(
        blob,
        300,
        300,
        "JPEG",
        100,
        0,
        (uri) => {
          updateProfileAvatarMutation(uri as File);
        },
        "blob"
      );
    }
    if (bannerUrl) {
      const blob = await (await fetch(bannerUrl)).blob();
      Resizer.imageFileResizer(
        blob,
        400,
        (400 * 9) / 16,
        "JPEG",
        100,
        0,
        (uri) => {
          updateProfileBannerMutation(uri as Blob);
        },
        "blob"
      );
    }
    toast({
      title: "Profile updated",
    });
  };

  return (
    <>
      <TopBarWithProps showBackButton />
      <ImageCropperDialog
        open={openAvatarCropper}
        onOpenChange={setOpenAvatarCropper}
        modal={true}
        image={avatarContent?.[0]?.content}
        onCropComplete={(url) => {
          setAvatarUrl(url);
          setOpenAvatarCropper(false);
        }}
      />
      <ImageCropperDialog
        open={openBannerCropper}
        onOpenChange={setOpenBannerCropper}
        modal={true}
        image={bannerContent?.[0]?.content}
        onCropComplete={(url) => {
          setBannerUrl(url);
          setOpenBannerCropper(false);
        }}
        aspect={16 / 9}
      />
      {profileQuery.isError && (
        <Reload onReload={profileQuery.refetch} className="h-80" />
      )}

      {profileQuery.isLoading && (
        <div className="flex justify-center items-center h-[calc(100vh*3/5)]">
          <Spinner className="text-4xl" />
        </div>
      )}

      {profileQuery.isSuccess && (
        <>
          <div className="relative mb-16">
            {bannerUrl ?? profile?.banners ? (
              <Image
                src={
                  bannerUrl ??
                  findSpecifiedImageOrFirst(profile?.banners, {
                    width: 400,
                    height: (400 * 9) / 16,
                  })?.url
                }
                alt="profile"
                className="w-full h-44"
              />
            ) : (
              <div className="w-full h-44 bg-gray-300" />
            )}
            <Button
              variant="outline"
              size="icon"
              className="absolute bottom-4 right-4"
              onClick={() => openBannerPicker()}
            >
              <PencilSimple />
            </Button>

            <Image
              //src={avatarContent?.[0]?.content ?? profile?.avatarUrl}
              src={
                avatarUrl ??
                findSpecifiedImageOrFirst(profile?.avatars, {
                  width: 300,
                  height: 300,
                })?.url
              }
              alt="avatar"
              className="rounded-full border-2 border-white absolute -bottom-12 left-0 right-0 mx-auto size-28 object-cover"
              showSkeleton={false}
            />

            <Button
              variant="outline"
              size="icon"
              className="absolute -bottom-12 left-0 -right-16 mx-auto"
              onClick={() => {
                openAvatarPicker();
              }}
            >
              <PencilSimple />
            </Button>
          </div>
          <Form {...form}>
            <form
              className="m-4 flex flex-col gap-4"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                name="username"
                defaultValue={profile.username}
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tên tài khoản</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="tentaikhoan123"
                        startAdornment={<At />}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                // disabled={isUpdating}
                name="name"
                defaultValue={profile.name ?? ""}
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tên hiển thị</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Ocean Nguyễn" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                // disabled={isUpdating}
                name="bio"
                defaultValue={profile.bio ?? ""}
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mô tả</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        rows={6}
                        placeholder="Giới thiệu một chút về bạn..."
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="mt-4"
                disabled={
                  isUpdating || (!form.formState.isDirty && avatarUrl == null)
                }
              >
                {isUpdating ? "Đang cập nhật..." : "Cập nhật"}
              </Button>
            </form>
          </Form>
        </>
      )}
    </>
  );
};
