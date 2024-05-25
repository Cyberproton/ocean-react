import { Centered } from "@/components/Centered";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { useTheme } from "@/contexts/theme";
import { Theme } from "@/types/theme";
import { cn } from "@/utils";
import { getSystemPreferredTheme } from "@/utils/theme";
import { Heart, Microphone, MusicNote } from "@phosphor-icons/react";

export const ThemeOptions = (props: { theme: Theme; label: string }) => {
  const { theme, label } = props;
  const { setTheme } = useTheme();

  const trueTheme = theme === Theme.System ? getSystemPreferredTheme() : theme;

  return (
    <Card
      className={cn("p-2 flex flex-col", trueTheme)}
      onClick={() => setTheme(theme)}
    >
      <div className="flex items-center gap-1 overflow-hidden mb-2">
        <Centered className="w-10 h-10 bg-primary rounded-lg shrink-0">
          <Heart weight="fill" className="text-white text-2xl" />
        </Centered>
        <Centered className="w-10 h-10 rounded-lg bg-destructive shrink-0">
          <Microphone weight="fill" className="text-white text-2xl" />
        </Centered>
        <Centered className="w-10 h-10 rounded-lg bg-slate-500 shrink-0">
          <MusicNote weight="fill" className="text-white text-2xl" />
        </Centered>
      </div>
      <div className="w-16 h-2 bg-border rounded-full my-1"></div>
      <div className="w-10 h-2 bg-border rounded-full my-1"></div>
      <div className="w-12 h-2 bg-border rounded-full my-1"></div>
      <div className="flex flex-1 items-center mt-4">
        <RadioGroupItem
          value={theme}
          id={`theme-${theme}-option`}
          className="mr-1"
          onClick={() => setTheme(theme)}
        />
        <Label htmlFor={`theme-${theme}-option`}>{label}</Label>
      </div>
    </Card>
  );
};
