import "./App.scss";
import TextContext from "./components/TextContext";
import UseQueryTest from "./Data/UseQueryTest";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // refetchOnWindowFocus: false,
        // refetchOnmount: false,
        // refetchOnReconnect: false,
        // retry: 1,
        // staleTime: 5 * 1000,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <UseQueryTest />
      <TextContext />
    </QueryClientProvider>
  );
}

export default App;
