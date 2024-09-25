import { ContentCard, ContentCardProps } from "@/components/ContentCard";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { ArtistContextMenu } from "@/features/artist/components/ArtistContextMenu";
import { Artist } from "@/features/artist/models/artist";
import { AppRoute } from "@/routes/routes";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LongPressEventType, useLongPress } from "use-long-press";

export const ArtistCard = ({
  artist,
  ...props
}: ContentCardProps & { artist: Artist }) => {
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
          variant="circle"
          onContextMenu={(e) => {
            e.preventDefault();
            setIsOpen(true);
          }}
          {...bindLongPress()}
          {...props}
          title={artist.name}
        />
      </Link>
      <Drawer
        open={isOpen}
        onOpenChange={(open) => {
          setIsOpen(open);
        }}
      >
        <DrawerContent>
          <ArtistContextMenu />
        </DrawerContent>
      </Drawer>
    </>
  );
};
