import { Spinner } from "@/components/Spinner";
import { PlayControlTileProvider } from "@/providers/PlayControlTileProvider";
import { appStore } from "@/stores/store";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./ThemeProvider";

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={appStore}>
      <Suspense
        fallback={
          <div className="flex items-center justify-center w-screen h-screen">
            <Spinner />
          </div>
        }
      >
        <ThemeProvider>
          <PlayControlTileProvider>
            <BrowserRouter>{children}</BrowserRouter>
          </PlayControlTileProvider>
        </ThemeProvider>
      </Suspense>
    </Provider>
  );
};
