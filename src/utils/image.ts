import { ImageResponse } from "@/features/file/models/file";

export const readFile = (file: File) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });
};

export const createImage = (url: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", (error) => reject(error));
    image.setAttribute("crossOrigin", "anonymous"); // needed to avoid cross-origin issues on CodeSandbox
    image.src = url;
  });

export const findSpecifiedImage = (
  images: ImageResponse[] | null | undefined,
  match: { width?: number; height?: number }
) => {
  if (!images) {
    return null;
  }
  const image = images.find((image) => {
    if (match.width && match.height) {
      return image.width === match.width && image.height === match.height;
    } else if (match.width) {
      return image.width === match.width;
    } else if (match.height) {
      return image.height === match.height;
    }
    return false;
  });
  if (image) {
    return image;
  }
  return null;
};
