import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import Home from './components/Home/Home';
import MovieDetails from './components/MovieDetails/MovieDetails';
import ErrorPage from './components/Error/error-page';

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/movie/:movie_id',
          element: <MovieDetails />
        },
      ]

    },
    

  ]);
  return (
    <RouterProvider router={router} />
  );
};

export default App;
