import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DinosaurPage from './pages/DinosaurPage';

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
    <>
      <RouterProvider router={router} />
      <div>
      </div>
    </>
  )
}

export default App
