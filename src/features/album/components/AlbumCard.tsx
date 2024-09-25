import {
  ContentCard,
  ContentCardLoading,
  ContentCardProps,
} from "@/components/ContentCard";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { Album } from "@/features/album/models/album";
import { AppRoute } from "@/routes/routes";
import { findSpecifiedImage } from "@/utils/image";
import { VinylRecord } from "@phosphor-icons/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LongPressEventType, useLongPress } from "use-long-press";

export const AlbumCard = ({
  album,
  ...props
}: ContentCardProps & { album: Album }) => {
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
      <Link to={AppRoute.ALBUM}>
        <ContentCard
          size="md"
          actionIcon={<VinylRecord />}
          onContextMenu={(e) => {
            e.preventDefault();
            setIsOpen(true);
          }}
          {...bindLongPress()}
          {...props}
          title={album.name}
          subtitle={
            album.artists != null && album.artists.length > 0
              ? album.artists.map((a) => a.name).join(", ")
              : "Unknown artists"
          }
          imageUrl={
            findSpecifiedImage(album.covers, {
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

export const AlbumCardLoading = () => {
  return <ContentCardLoading size="md" />;
};
