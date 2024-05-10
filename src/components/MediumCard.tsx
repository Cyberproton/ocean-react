import { Play } from "@phosphor-icons/react";
import cover from "../assets/track-cover-1.png";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export const MediumCard = () => {
  return (
    <Card className="w-40">
      <CardContent className="p-0">
        <div className="relative">
          <img
            src={cover}
            alt="cover"
            className="h-36 object-cover rounded-t-lg"
          />
          <Button
            variant="outline"
            className="h-14 w-14 absolute bottom-4 left-4 border-slate-400"
          >
            <Play />
          </Button>
        </div>
        <div className="p-4">
          <p className="font-bold">Sakura Tree</p>
          <p className="text-sm">Vlad Gluschenko</p>
        </div>
      </CardContent>
    </Card>
  );
};
