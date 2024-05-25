import { TopBarWithProps } from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { At, PencilSimple } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";

export const ProfileEditPage = () => {
  const form = useForm();

  return (
    <>
      <TopBarWithProps showBackButton />
      <div className="relative mb-16">
        <img
          src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjU0NmJhdGNoMy1teW50LTM0LWJhZGdld2F0ZXJjb2xvcl8xLmpwZw.jpg"
          alt="profile"
          className="w-full h-44"
        />
        <Button
          variant="outline"
          size="icon"
          className="absolute bottom-4 right-4"
        >
          <PencilSimple />
        </Button>

        <img
          src="https://avatars.githubusercontent.com/u/66234343?v=4"
          width={100}
          height={100}
          alt="avatar"
          className="rounded-full border-2 border-white absolute -bottom-12 left-0 right-0 mx-auto"
        />
        <Button
          variant="outline"
          size="icon"
          className="absolute -bottom-12 left-0 -right-16 mx-auto"
        >
          <PencilSimple />
        </Button>
      </div>
      <Form {...form}>
        <form className="m-4 flex flex-col gap-4">
          <FormField
            name="username"
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
              </FormItem>
            )}
          />
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tên hiển thị</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Ocean Nguyễn" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="description"
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
              </FormItem>
            )}
          />
          <Button type="submit" className="mt-4">
            Lưu
          </Button>
        </form>
      </Form>
    </>
  );
};
