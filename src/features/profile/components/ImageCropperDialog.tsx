import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { createImage } from "@/utils/image";
import { DialogProps } from "@radix-ui/react-dialog";
import { useState } from "react";
import Cropper, { Area } from "react-easy-crop";

export const ImageCropperDialog = ({
  image,
  onCropComplete,
  ...props
}: DialogProps & {
  image: string;
  onCropComplete: (url: string) => void;
  aspect?: number;
}) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [area, setArea] = useState<Area | null>(null);

  const onCropAreaChange = (croppedArea: Area, croppedAreaPixels: Area) => {
    setArea(croppedAreaPixels);
  };

  const processImage = async () => {
    if (!area) return;
    const img = await createImage(image);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;
    canvas.width = area.width;
    canvas.height = area.height;
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(
      img,
      area.x,
      area.y,
      area.width,
      area.height,
      0,
      0,
      area.width,
      area.height
    );

    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      onCropComplete(url);
    });
  };

  return (
    <Dialog {...props}>
      <DialogContent className="h-screen p-0 flex flex-col">
        <div className="relative mt-12 flex-1">
          <div className="absolute top-0 left-0 right-0 bottom-0">
            <Cropper
              image={image}
              crop={crop}
              zoom={zoom}
              maxZoom={10}
              aspect={props.aspect}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropAreaChange={onCropAreaChange}
            />
          </div>
        </div>
        <div className="mt-8 p-4 pb-8">
          <Label htmlFor="zoom-slider">Zoom</Label>
          <Slider
            id="zoom-slider"
            defaultValue={[1]}
            value={[zoom]}
            min={1}
            max={10}
            step={0.1}
            className="mt-4 mb-12"
            onValueChange={(e) => setZoom(e[0])}
          />
          <Button onClick={processImage} className="w-full">
            Crop
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
