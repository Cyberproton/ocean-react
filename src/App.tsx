import { Toaster } from "./components/ui/toaster";
import { AppProviders } from "./providers/AppProviders";

const App = () => {
  return (
    <AppProviders>
      <Toaster />
    </AppProviders>
  );
};

export default App;
