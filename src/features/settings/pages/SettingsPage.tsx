import { BackButton } from "@/components/BackButton";
import { TopBar } from "@/components/TopBar";
import { RadioGroup } from "@/components/ui/radio-group";
import { useTheme } from "@/contexts/theme";
import { Theme } from "@/types/theme";
import { ThemeOptions } from "../components/ThemeOptions";

export const SettingsPage = () => {
  const { theme } = useTheme();

  return (
    <>
      <TopBar>
        <BackButton />
        <p className="text-xl">Cài đặt</p>
      </TopBar>
      <div className="m-4">
        <p className="font-bold mb-2">Chủ đề</p>
        <RadioGroup defaultValue={Theme.System} value={theme}>
          <div className="grid grid-cols-3 gap-2">
            <ThemeOptions theme={Theme.System} label="Hệ thống" />
            <ThemeOptions theme={Theme.Light} label="Sáng" />
            <ThemeOptions theme={Theme.Dark} label="Tối" />
          </div>
        </RadioGroup>
      </div>
    </>
  );
};
