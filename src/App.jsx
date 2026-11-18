import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NavBar from "./components/NavBar";
import ColorPallete from "./components/ui/ColorPallete";
import MixContainer from "./components/ui/MixContainer";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="w-full flex flex-col items-center gap-10 p-5 min-h-[calc(100vh-64px)] max-w-7xl mx-auto lg:flex-row">
          <ColorPallete />
          <MixContainer />
        </main>
      </div>
    </QueryClientProvider>
  );
};

export default App;
