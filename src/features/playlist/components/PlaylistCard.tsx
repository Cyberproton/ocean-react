import {
  ContentCard,
  ContentCardLoading,
  ContentCardProps,
} from "@/components/ContentCard";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { Playlist } from "@/features/playlist/models/playlist";
import { AppRoute } from "@/routes/routes";
import { findSpecifiedImage } from "@/utils/image";
import { Queue } from "@phosphor-icons/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LongPressEventType, useLongPress } from "use-long-press";

export const PlaylistCard = ({
  playlist,
  ...props
}: { playlist: Playlist } & ContentCardProps) => {
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
          {...props}
          title={playlist.name}
          subtitle={
            playlist.owner == null
              ? "Unknown"
              : playlist.owner.name ?? playlist.owner.username ?? "Unknown"
          }
          imageUrl={
            findSpecifiedImage(playlist.covers, {
              width: 300,
              height: 300,
            })?.url
          }
        />
      </Link>
      <Drawer
        open={isOpen}
        onOpenChange={(open) => {
          setIsOpen(open);
        }}
      >
        <DrawerContent></DrawerContent>
      </Drawer>
    </>
  );
};

export const PlaylistCardLoading = () => {
  return <ContentCardLoading size="md" />;
};
