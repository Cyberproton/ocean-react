import { Button } from "@/components/ui/button";
import { Headphones, Heart, Users, VinylRecord } from "@phosphor-icons/react";

export const DetailsTab = () => {
  return (
    <div className="m-4">
      <p className="mb-4 font-medium">Thông tin bài hát</p>
      <div className="flex items-center gap-4">
        <img
          src="https://i1.sndcdn.com/artworks-mn62TV9eiyEZ7fvJ-WQ8gPA-t500x500.jpg"
          className="h-32 w-32 object-cover rounded-lg"
        />
        <div>
          <p className="text-sm">Đĩa đơn</p>
          <p className="text-xl font-medium">Sunshine</p>
          <p className="mb-2">Spiky Candy</p>
          <div className="flex items-center gap-1 mb-1">
            <Headphones className="text-primary" />
            <p className="text-sm">2.3K lượt nghe</p>
          </div>
          <div className="flex items-center gap-1">
            <Heart className="text-primary" />
            <p className="text-sm">100 lượt thích</p>
          </div>
        </div>
      </div>

      <p className="mt-8 mb-4 font-medium">Thông tin nghệ sĩ</p>
      <div className="flex items-center gap-4">
        <img
          src="https://i1.sndcdn.com/artworks-mn62TV9eiyEZ7fvJ-WQ8gPA-t500x500.jpg"
          className="h-32 w-32 object-cover rounded-full"
        />
        <div>
          <p className="text-xl font-medium mb-2">Spiky Candy</p>
          <div className="flex items-center gap-1 mb-1">
            <VinylRecord className="text-primary" />
            <p className="text-sm">12 đĩa nhạc, 48 bài hát</p>
          </div>
          <div className="flex items-center gap-1 mb-1">
            <Headphones className="text-primary" />
            <p className="text-sm">2.3K lượt nghe</p>
          </div>
          <div className="flex items-center gap-1">
            <Users className="text-primary" />
            <p className="text-sm">12.3K lượt theo dõi</p>
          </div>
          <Button variant="outline" size="sm" className="mt-2">
            Theo dõi
          </Button>
        </div>
      </div>

      <p className="text-sm font-medium mt-8 mb-2">Giới thiệu nghệ sĩ</p>
      <p className="text-sm">
        🍭🍭🍭 Most of my tracks are free to use. Click "Buy" to download the
        track. Download is free;) 🍭🍭🍭
      </p>
    </div>
  );
};
