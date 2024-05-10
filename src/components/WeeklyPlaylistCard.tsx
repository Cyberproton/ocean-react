import weeklyPlaylistCover from "@/assets/weekly-playlist.svg";
import { PlayCircle } from "@phosphor-icons/react";

export const WeeklyPlaylistCard = () => {
  return (
    <div className="relative">
      <img src={weeklyPlaylistCover} className="h-[100px]" />
      <div className="absolute inset-0 h-[100px] flex items-center">
        <div className="w-full ml-8">
          <p className="w-48 font-bold text-lg text-white">
            Danh sách phát hàng tuần của bạn
          </p>
        </div>
        <PlayCircle size={48} weight="fill" color="white" className="mr-8" />
      </div>
    </div>
  );
};
