import { DetailsTab } from "@/components/TrackPlay/DetailsTab";
import { NextPlayTab } from "@/components/TrackPlay/NextPlayTab";
import { TrackPlayTile } from "@/components/TrackPlay/TrackPlayTile";
import autoAnimate from "@formkit/auto-animate";
import {
  CaretDown,
  DotsThreeVertical,
  Heart,
  ListPlus,
  PauseCircle,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
} from "@phosphor-icons/react";
import { MouseEventHandler, useEffect, useRef, useState } from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button, DivButton } from "../ui/button";
import { DrawerClose } from "../ui/drawer";
import { Slider } from "../ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export const TrackPlay = ({
  useCloseDrawerFunction,
}: {
  // Use this function to close the drawer instead of the default one
  useCloseDrawerFunction?: MouseEventHandler<Element>;
}) => {
  const [showCurrentPlay, setShowCurrentPlay] = useState(true);
  const [currentTab, setCurrentTab] = useState<string | undefined>(undefined);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current && autoAnimate(ref.current);
  }, [ref]);

  return (
    <>
      <div ref={ref}>
        {showCurrentPlay && (
          <div className="h-full">
            <div className="flex items-center p-2">
              {useCloseDrawerFunction ? (
                <DivButton
                  onClick={useCloseDrawerFunction}
                  variant="ghost"
                  size="icon"
                >
                  <CaretDown className="text-2xl" />
                </DivButton>
              ) : (
                <DrawerClose className="p-2">
                  <CaretDown className="text-2xl" />
                </DrawerClose>
              )}
              <p className="grow text-xl text-center">Bài hát</p>
              <Button variant="ghost" size="icon">
                <DotsThreeVertical weight="bold" />
              </Button>
            </div>
            <img
              src="https://i1.sndcdn.com/artworks-mn62TV9eiyEZ7fvJ-WQ8gPA-t500x500.jpg"
              className="rounded-lg object-cover h-64 w-64 mx-auto my-4"
            />
            <div className="flex justify-between mx-6">
              <div>
                <p className="text-2xl mb-1">Sunshine</p>
                <div className="flex items-center gap-2">
                  <Avatar className="size-7">
                    <AvatarImage src="https://i1.sndcdn.com/avatars-zaC0ltt7BdlXySNf-IBg0bQ-t240x240.jpg" />
                  </Avatar>
                  <p>Spiky Candy</p>
                </div>
              </div>
              <div>
                <Button variant="ghost" size="icon" className="mr-2">
                  <Heart className="text-primary" />
                </Button>
                <Button variant="ghost" size="icon">
                  <ListPlus />
                </Button>
              </div>
            </div>

            <div className="mx-6 mt-8">
              <Slider />
              <div className="flex justify-between mt-2">
                <p className="text-xs">0:00</p>
                <p className="text-xs">0:00</p>
              </div>
            </div>

            <div className="flex items-center justify-between mx-4">
              <Button variant="ghost" size="icon-xl" className="mr-1">
                <Shuffle />
              </Button>
              <Button variant="ghost" size="icon-xl" className="mx-1">
                <SkipBack weight="fill" />
              </Button>
              <Button variant="ghost" className="w-24 h-24 text-7xl p-0 mx-1">
                <PauseCircle weight="fill" />
              </Button>
              <Button variant="ghost" size="icon-xl" className="mx-1">
                <SkipForward weight="fill" />
              </Button>
              <Button variant="ghost" size="icon-xl" className="ml-1">
                <Repeat weight="fill" />
              </Button>
            </div>
          </div>
        )}
        {!showCurrentPlay && (
          <TrackPlayTile
            onClick={() => {
              setShowCurrentPlay(true);
              setCurrentTab(undefined);
            }}
          />
        )}

        <Tabs
          onClick={() => {
            setShowCurrentPlay(false);
          }}
          onValueChange={(value) => {
            setCurrentTab(value);
          }}
          defaultValue="next"
          className={currentTab ? "h-full" : "h-12"}
        >
          <TabsList className="grid w-full grid-cols-3 mb-2">
            <TabsTrigger value="next">Tiếp theo</TabsTrigger>
            <TabsTrigger value="lyrics">Lời nhạc</TabsTrigger>
            <TabsTrigger value="info">Chi tiết</TabsTrigger>
          </TabsList>
          <TabsContent value="next">
            <NextPlayTab />
          </TabsContent>
          <TabsContent value="lyrics">
            <p>Lời nhạc</p>
          </TabsContent>
          <TabsContent value="info">
            <DetailsTab />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};
