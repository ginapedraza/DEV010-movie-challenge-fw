import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import Home from './components/Home';
import Movie from './components/Movie';
import ErrorPage from './components/error-page';

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/movie',
          element: <Movie />
        },
      ]

    },
    

  ]);
  return (
    <RouterProvider router={router} />
  );
};

export default App;
