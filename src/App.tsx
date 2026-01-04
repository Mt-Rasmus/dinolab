import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ChakraProvider } from "@chakra-ui/react";
// import { Provider } from "@/components/ui/provider"
import { Provider } from './components/ui/provider';
import HomePage from './pages/HomePage';
import DinosaurPage from './pages/DinosaurPage';
import Header from './components/Header/Header';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/dinosaur/:id',
    element: <DinosaurPage />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <Header />
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
