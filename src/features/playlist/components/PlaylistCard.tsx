import { ContentCard } from "@/components/ContentCard";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { TrackCardContextMenu } from "@/features/track/components/TrackCardContextMenu";
import { AppRoute } from "@/routes/routes";
import { Queue } from "@phosphor-icons/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LongPressEventType, useLongPress } from "use-long-press";

export const PlaylistCard = () => {
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
      <Link to={AppRoute.PLAYLIST}>
        <ContentCard
          size="md"
          actionIcon={<Queue />}
          onContextMenu={(e) => {
            e.preventDefault();
            setIsOpen(true);
          }}
          {...bindLongPress()}
        />
      </Link>
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
