import { Theme } from "@/types/theme";

export const getSystemPreferredTheme = () => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? Theme.Dark
    : Theme.Light;
};
