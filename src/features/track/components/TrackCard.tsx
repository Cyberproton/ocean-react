import {
  ContentCard,
  ContentCardLoading,
  ContentCardProps,
} from "@/components/ContentCard";
import { TrackPlay } from "@/components/TrackPlay/TrackPlay";
import {
  Drawer,
  DrawerContent,
  DrawerPortal,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { usePlayControl } from "@/contexts/play-control";
import { TrackContextMenu } from "@/features/track/components/TrackCardContextMenu";
import { Track } from "@/features/track/models/track";
import { findSpecifiedImage } from "@/utils/image";
import { Play } from "@phosphor-icons/react";
import { useState } from "react";
import { LongPressEventType, useLongPress } from "use-long-press";

export const TrackCard = (props: ContentCardProps & { track: Track }) => {
  const control = usePlayControl();
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

  return (
    <>
      <Drawer>
        <DrawerTrigger
          className="text-start"
          onClick={() => {
            control.setIsHidden(false);
          }}
        >
          <ContentCard
            size="md"
            actionIcon={<Play />}
            onContextMenu={(e) => {
              e.preventDefault();
              setIsOpen(true);
            }}
            {...bindLongPress()}
            {...props}
            title={track.name}
            subtitle={
              track.artists == null || track.artists.length < 1
                ? "Unknown artists"
                : track.artists.map((a) => a.name).join(", ")
            }
            imageUrl={
              findSpecifiedImage(track.album?.covers, {
                width: 300,
                height: 300,
              })?.url
            }
          />
        </DrawerTrigger>
        <DrawerPortal>
          <DrawerContent
            className="h-screen rounded-none"
            showDragHandle={false}
          >
            <TrackPlay />
          </DrawerContent>
        </DrawerPortal>
      </Drawer>
      <Drawer
        open={isOpen}
        onOpenChange={(open) => {
          setIsOpen(open);
        }}
      >
        <DrawerContent>
          <TrackContextMenu track={track} />
        </DrawerContent>
      </Drawer>
    </>
  );
};

export const TrackCardLoading = () => {
  return <ContentCardLoading size="md" />;
};
