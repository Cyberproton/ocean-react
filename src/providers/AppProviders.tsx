import { Spinner } from "@/components/Spinner";
import { PlayControlProvider } from "@/providers/PlayControlProvider";
import { router } from "@/routes/router";
import { appStore } from "@/stores/store";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
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
          <PlayControlProvider>
            <RouterProvider router={router} />
            {children}
          </PlayControlProvider>
        </ThemeProvider>
      </Suspense>
    </Provider>
  );
};
