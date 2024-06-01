import { cn } from "@/utils";

export const DecoratedCircle = ({
  size,
  className,
}: {
  size?: number;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "bg-white opacity-15 size-12 rounded-full absolute",
        size ? `size-${size}` : "",
        className ?? ""
      )}
    />
  );
};
