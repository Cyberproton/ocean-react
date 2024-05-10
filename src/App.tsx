import { Toaster } from "./components/ui/toaster";
import { AppProviders } from "./providers/AppProviders";
import { AppRoutes } from "./routes/AppRoutes";

const App = () => {
  return (
    <AppProviders>
      <AppRoutes />
      <Toaster />
    </AppProviders>
  );
};

export default App;
