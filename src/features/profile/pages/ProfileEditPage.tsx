import { TopBar } from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

export const ProfileEditPage = () => {
  const form = useForm();

  return (
    <>
      <TopBar showBackButton />
      <div className="relative mb-16">
        <img
          src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjU0NmJhdGNoMy1teW50LTM0LWJhZGdld2F0ZXJjb2xvcl8xLmpwZw.jpg"
          alt="profile"
          className="w-full h-44"
        />
        <img
          src="https://avatars.githubusercontent.com/u/66234343?v=4"
          width={100}
          height={100}
          alt="avatar"
          className="rounded-full border-2 border-white absolute -bottom-12 left-0 right-0 mx-auto"
        />
      </div>
      <Form {...form}>
        <form>
          <FormField
            name="username"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">Save</Button>
        </form>
      </Form>
    </>
  );
};
