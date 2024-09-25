import { Artist } from "@/features/artist/models/artist";
import { Copyright } from "@/features/copyrights/models/copyrights";
import { ImageResponse } from "@/features/file/models/file";
import { RecordLabel } from "@/features/record-labels/models/record-labels";

export enum AlbumType {
  SINGLE = "SINGLE",
  ALBUM = "ALBUM",
  COMPILATION = "COMPILATION",
}

export type Album = {
  id: number;
  type: AlbumType;
  name: string;
  description: string;
  releaseDate: Date;
  covers: ImageResponse[];
  recordLabel: RecordLabel;
  copyright: Copyright;
  artists: Artist[];
  popularity: number;
};
