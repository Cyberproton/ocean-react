import { ImageAction } from "@/components/ImageAction";
import { Tile, TileContent, TileSubtitle } from "@/components/Tile";
import { Button } from "@/components/ui/button";
import { Drawer } from "@/components/ui/drawer";
import { TrackContextMenuDialogContent } from "@/features/track/components/TrackCardContextMenu";
import { Track } from "@/features/track/models/track";
import { cn } from "@/utils";
import { DotsThreeVertical, Play } from "@phosphor-icons/react";
import React, { useState } from "react";
import { LongPressEventType, useLongPress } from "use-long-press";

export const TopTrackTile = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { track: Track }
>(({ className, ...props }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [track] = useState(props.track);
  const bindLongPress = useLongPress(
    () => {
      setIsOpen(true);
    },
    {
      detect: LongPressEventType.Mouse,
    }
  );

  const cover = track.album?.covers[0]?.url;

  return (
    <div
      ref={ref}
      className={cn("border my-2 mt-4 shadow-md", className)}
      onContextMenu={(e) => {
        e.preventDefault();
        setIsOpen(true);
      }}
      {...bindLongPress()}
      {...props}
    >
      <ImageAction src={cover} className="h-40">
        <Button variant="outline" className="size-14 text-2xl">
          <Play />
        </Button>
      </ImageAction>
      <Tile>
        <p className="text-xl text-primary mr-1">1</p>
        <TileContent>
          <p className="text-xl font-medium line-clamp-1">{track.name}</p>
          <TileSubtitle className="line-clamp-1">
            {track?.artists?.map((a) => a.name).join(", ") ?? "Unknown artist"}
          </TileSubtitle>
        </TileContent>
        <Button
          variant="ghost"
          size="icon"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(true);
          }}
          className="w-min"
        >
          <DotsThreeVertical weight="bold" />
        </Button>
      </Tile>
      <Drawer
        open={isOpen}
        onOpenChange={(open) => {
          setIsOpen(open);
        }}
      >
        <TrackContextMenuDialogContent track={track} />
      </Drawer>
    </div>
  );
});

// export const TopTrackTile = ({ track }: { track: Track }) => {
//   const bindLongPress = useLongPress(
//     () => {
//       setIsOpen(true);
//     },
//     {
//       detect: LongPressEventType.Mouse,
//     }
//   );

//   const cover = track.album?.covers[0]?.url;

//   return (
//     <div
//       className="border rounded-lg m-2 mt-4 shadow-md"
//       onContextMenu={(e) => {
//         e.preventDefault();
//         setIsOpen(true);
//       }}
//       {...bindLongPress()}
//     >
//       <ImageAction src={cover} className="h-40 rounded-t-lg">
//         <Button variant="outline" className="size-14 text-2xl">
//           <Play />
//         </Button>
//       </ImageAction>
//       <Tile>
//         <p className="text-xl text-primary mr-1">1</p>
//         {/* <TileImage
//           src="https://avatars.githubusercontent.com/u/66234343?v=4"
//           alt="cover"
//           className="rounded-full"
//         /> */}
//         <TileContent>
//           <p className="text-xl font-medium line-clamp-1">{track.name}</p>
//           <TileSubtitle className="line-clamp-1">
//             {track?.artists?.map((a) => a.name).join(", ") ?? "Unknown artist"}
//           </TileSubtitle>
//         </TileContent>
//         <Button variant="ghost" size="icon">
//           <DotsThreeVertical weight="bold" />
//         </Button>
//       </Tile>
//     </div>
//   );
// };
