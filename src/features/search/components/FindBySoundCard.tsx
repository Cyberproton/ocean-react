import { Card } from "@/components/ui/card";
import { DecoratedCircle } from "@/features/search/components/Circle";
import { AppRoute } from "@/routes/routes";
import { Upload } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export const FindBySoundCard = () => {
  return (
    <Link to={AppRoute.SEARCH_BY_SOUND}>
      <Card className="bg-input text-primary-foreground font-bold relative overflow-hidden px-4 pt-4 pb-0 shadow-lg">
        <p>Tìm kiếm bằng đoạn nhạc</p>
        <Upload className="text-4xl opacity-30" weight="fill" />
        <DecoratedCircle className="absolute -top-4 -left-4" />
        <DecoratedCircle className="absolute -top-4 -right-3" />
        <DecoratedCircle className="absolute -bottom-3 right-4" />
        <DecoratedCircle className="absolute bottom-1 -right-1" />
      </Card>
    </Link>
  );
};
