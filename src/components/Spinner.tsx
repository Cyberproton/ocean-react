import { cn } from "@/utils";
import { SpinnerGap } from "@phosphor-icons/react";

export const Spinner = ({ className }: { className?: string }) => {
  return <SpinnerGap className={cn("animate-spin text-2xl", className)} />;
};
