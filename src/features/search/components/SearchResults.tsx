import { AlbumTile } from "@/features/album/components/AlbumTile";
import { ArtistTile } from "@/features/artist/components/ArtistTile";
import { TrackTile } from "@/features/track/components/TrackTile";

export const SearchResults = () => {
  return (
    <>
      <div className="mb-4">
        <p className="font-medium mx-4 mb-2">Bài hát</p>
        <TrackTile />
        <TrackTile />
      </div>
      <div className="mb-4">
        <h4 className="font-medium mx-4 mb-2">Đĩa nhạc</h4>
        <AlbumTile />
      </div>
      <div className="mb-4">
        <h4 className="font-medium mx-4 mb-2">Nghệ sĩ</h4>
        <ArtistTile />
      </div>
    </>
  );
};
