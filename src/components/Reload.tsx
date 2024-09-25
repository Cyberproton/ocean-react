import { Button } from "@/components/ui/button";
import { cn } from "@/utils";
import { ArrowClockwise } from "@phosphor-icons/react";
import { HTMLAttributes } from "react";

export const Reload = ({
  onReload,
  className,
  ...props
}: { onReload?: () => void } & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center w-full my-4 gap-2",
        className
      )}
      {...props}
    >
      <p>An error has happened</p>
      <Button onClick={onReload}>
        <ArrowClockwise className="mr-2" /> Reload
      </Button>
    </div>
  );
};
