import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/utils";
import { ImgHTMLAttributes, ReactNode, useState } from "react";

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  placeholder?: ReactNode;
  showSkeleton?: boolean;
}

enum ImageStatus {
  Loading = "loading",
  Loaded = "loaded",
  Error = "error",
}

export const Image = ({
  className,
  placeholder,
  showSkeleton,
  ...props
}: ImageProps) => {
  const [status, setStatus] = useState(ImageStatus.Loading);

  return (
    <>
      <div hidden={status !== ImageStatus.Loading}>
        {placeholder || showSkeleton != false ? (
          <Skeleton className={cn(className, "bg-gray-500")} />
        ) : (
          <div className={cn(className, "bg-gray-500")} />
        )}
      </div>
      <img
        hidden={status !== ImageStatus.Loaded}
        className={className}
        {...props}
        onLoad={() => {
          setStatus(ImageStatus.Loaded);
          console.log("loaded");
        }}
        onError={() => setStatus(ImageStatus.Error)}
      />
    </>
  );
};
