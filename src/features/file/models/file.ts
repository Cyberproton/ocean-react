export type File = {
  id: number;
  name: string;
  mimetype: string;
  path: string;
  size: number;
  owner: number;
  isPublic: boolean;
  createdAt: Date;
};

export type ImageResponse = {
  url: string;
  width: number;
  height: number;
};
