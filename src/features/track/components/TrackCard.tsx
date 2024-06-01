import { ContentCard, ContentCardProps } from "@/components/ContentCard";
import { TrackPlay } from "@/components/TrackPlay/TrackPlay";
import {
  Drawer,
  DrawerContent,
  DrawerPortal,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { usePlayControl } from "@/contexts/play-control";
import { TrackCardContextMenu } from "@/features/track/components/TrackCardContextMenu";
import { Play } from "@phosphor-icons/react";
import { useState } from "react";
import { LongPressEventType, useLongPress } from "use-long-press";

export const TrackCard = (props: ContentCardProps) => {
  const control = usePlayControl();
  const [isOpen, setIsOpen] = useState(false);
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
          <TrackCardContextMenu />
        </DrawerContent>
      </Drawer>
    </>
  );
};
