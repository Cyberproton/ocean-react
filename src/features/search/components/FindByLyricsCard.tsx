import { Card } from "@/components/ui/card";
import { DecoratedCircle } from "@/features/search/components/Circle";
import { AppRoute } from "@/routes/routes";
import { MusicNote } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export const FindByLyricsCard = () => {
  return (
    <Link to={AppRoute.SEARCH_BY_LYRICS}>
      <Card className="bg-primary text-primary-foreground font-bold relative overflow-hidden px-4 pt-4 pb-1 shadow-lg">
        <p>Tìm kiếm bằng lời nhạc</p>
        <MusicNote className="text-4xl opacity-30" weight="fill" />
        <DecoratedCircle className="absolute -top-4 -left-4" />
        <DecoratedCircle className="absolute -top-4 -right-3" />
        <DecoratedCircle className="absolute -bottom-3 right-1" />
        <DecoratedCircle className="absolute bottom-1 right-6" />
      </Card>
    </Link>
  );
};
