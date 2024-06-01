import { BackButton } from "@/components/BackButton";
import { Tile, TileContent, TileSubtitle, TileTitle } from "@/components/Tile";
import { TopBar } from "@/components/TopBar";
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
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Check, DotsSix, PencilSimple } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";

export const PlaylistEditPage = () => {
  const form = useForm();

  return (
    <>
      <TopBar>
        <BackButton />
        <p className="text-xl text-center w-full">Chỉnh sửa danh sách</p>
        <Button variant="ghost" className="text-primary">
          <Check weight="bold" />
        </Button>
      </TopBar>

      <ScrollArea>
        <div className="flex flex-col items-center">
          <div className="relative mx-auto mt-8 mb-4">
            <img
              src="https://i1.sndcdn.com/artworks-mn62TV9eiyEZ7fvJ-WQ8gPA-t500x500.jpg"
              className="rounded-lg object-cover w-48 h-48 "
            />
            <Button
              variant="outline"
              size="icon-xl"
              className="absolute bottom-4 right-4"
            >
              <PencilSimple />
            </Button>
          </div>

          <Form {...form}>
            <form className="flex flex-col gap-3 px-4 my-4 w-full">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tiêu đề</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Nhập tiêu đề danh sách" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mô tả</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Nhập tiêu đề danh sách"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>

          <Separator className="mt-2" />
          <Tile className="w-full">
            <img
              src="https://i1.sndcdn.com/artworks-mn62TV9eiyEZ7fvJ-WQ8gPA-t500x500.jpg"
              className="w-14 h-14 object-cover rounded-lg"
            />
            <TileContent>
              <TileTitle>Waltz for Debby</TileTitle>
              <TileSubtitle>Bill Evans</TileSubtitle>
            </TileContent>
            <Button variant="ghost" size="icon">
              <DotsSix weight="bold" />
            </Button>
          </Tile>
          <Tile className="w-full">
            <img
              src="https://i1.sndcdn.com/artworks-mn62TV9eiyEZ7fvJ-WQ8gPA-t500x500.jpg"
              className="w-14 h-14 object-cover rounded-lg"
            />
            <TileContent>
              <TileTitle>Waltz for Debby</TileTitle>
              <TileSubtitle>Bill Evans</TileSubtitle>
            </TileContent>
            <Button variant="ghost" size="icon">
              <DotsSix weight="bold" />
            </Button>
          </Tile>
          <Tile className="w-full">
            <img
              src="https://i1.sndcdn.com/artworks-mn62TV9eiyEZ7fvJ-WQ8gPA-t500x500.jpg"
              className="w-14 h-14 object-cover rounded-lg"
            />
            <TileContent>
              <TileTitle>Waltz for Debby</TileTitle>
              <TileSubtitle>Bill Evans</TileSubtitle>
            </TileContent>
            <Button variant="ghost" size="icon">
              <DotsSix weight="bold" />
            </Button>
          </Tile>
          <Tile className="w-full">
            <img
              src="https://i1.sndcdn.com/artworks-mn62TV9eiyEZ7fvJ-WQ8gPA-t500x500.jpg"
              className="w-14 h-14 object-cover rounded-lg"
            />
            <TileContent>
              <TileTitle>Waltz for Debby</TileTitle>
              <TileSubtitle>Bill Evans</TileSubtitle>
            </TileContent>
            <Button variant="ghost" size="icon">
              <DotsSix weight="bold" />
            </Button>
          </Tile>
        </div>
      </ScrollArea>
    </>
  );
};
