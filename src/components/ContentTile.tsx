import {
  Tile,
  TileContent,
  TileProps,
  TileSubtitle,
  TileTitle,
} from "@/components/Tile";
import { Button } from "@/components/ui/button";
import { Drawer } from "@/components/ui/drawer";
import { DotsThreeVertical } from "@phosphor-icons/react";
import { ReactNode, useState } from "react";
import { LongPressEventType, useLongPress } from "use-long-press";

export const ContentTile = ({
  title,
  subtitle,
  imageUrl,
  tileContextMenu,
  ...props
}: {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  tileContextMenu: ReactNode;
} & TileProps) => {
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
      <Tile
        {...props}
        onContextMenu={(e) => {
          e.preventDefault();
          setIsOpen(true);
        }}
        {...bindLongPress()}
      >
        <img src={imageUrl} className="w-14 h-14 object-cover rounded-full" />
        <TileContent>
          {title && <TileTitle className="line-clamp-1">{title}</TileTitle>}
          {subtitle && (
            <TileSubtitle className="line-clamp-2">{subtitle}</TileSubtitle>
          )}
        </TileContent>
        {tileContextMenu && (
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(true);
            }}
          >
            <DotsThreeVertical weight="bold" />
          </Button>
        )}
      </Tile>
      {tileContextMenu && (
        <Drawer
          open={isOpen}
          onOpenChange={(open) => {
            setIsOpen(open);
          }}
        >
          {tileContextMenu}
        </Drawer>
      )}
    </>
  );
};
