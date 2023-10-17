import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import Home from './components/Home/Home';
import Movie from './components/Movie/Movie';
import ErrorPage from './components/Error/error-page';

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
