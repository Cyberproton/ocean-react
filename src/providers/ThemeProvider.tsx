import { ThemeProviderContext, ThemeProviderProps } from "@/contexts/theme";
import { Theme } from "@/types/theme";
import { useCallback, useEffect, useState } from "react";

export function ThemeProvider({
  children,
  defaultTheme = Theme.System,
  storageKey = "app-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  const refreshTheme = useCallback(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === Theme.System) {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    refreshTheme();
  }, [refreshTheme, theme]);

  // Listen for system theme changes
  useEffect(() => {
    const systemThemeChangeListener = (e: MediaQueryListEvent) =>
      e.matches && refreshTheme();

    const mediaDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
    const mediaLightTheme = window.matchMedia("(prefers-color-scheme: light)");

    mediaDarkTheme.addEventListener("change", systemThemeChangeListener);
    mediaLightTheme.addEventListener("change", systemThemeChangeListener);

    return () => {
      // Cleanup event listeners
      mediaDarkTheme.removeEventListener("change", systemThemeChangeListener);
      mediaLightTheme.removeEventListener("change", systemThemeChangeListener);
    };
  }, [refreshTheme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
