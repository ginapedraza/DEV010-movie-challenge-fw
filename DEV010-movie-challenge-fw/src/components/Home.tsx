//import docuPulseLogo from '../assets/logo-web-docuPulse-noBackground.png';
import { useEffect, useState } from 'react';
import { requestMovies, buildMovieApiUrl, API_KEY, Movie } from '../requests/moviesRequest';
import '../styles/App.css';
import '../styles/Home.css';
import Header from '../utils/header';
import nextImage from '../assets/next-image.png';

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const apiUrl = buildMovieApiUrl(currentPage);
    // Opciones para la solicitud HTTP
    const options: RequestInit = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: API_KEY,
      },
    };
    //Llamamos a la funcion requestMovies para que muestre la data.
    requestMovies(apiUrl, options)
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [currentPage]);

  //Funcion para manejar el cambio de página

  const handleNextPage = () => {
    // Incrementa el número de página
    setCurrentPage(currentPage + 1);
  };


  return (
    <>
      <div>
        <Header/>
      </div>

      <div className='movie-cards'>
        {movies.map((movie: Movie, i: number) => (
          <div className='movie-box' key={i}>
            <a href='#' className='link-movie'>
              <img
                className='movie-img'
                src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
                alt=""
              />
            </a>
            <div className='poster-text'>
              <p className='movie-title'>{movie.original_title}</p>
              <p className='movie-date'>
                {new Date(movie.release_date).getFullYear()}
              </p>
            </div>
          </div>
        ))}
  
      </div>
      <div className="centered-container">
        {/* Botón para avanzar a la siguiente página */}
        <button className= 'button-next' onClick={handleNextPage}>Load More
          <img src = {nextImage} className= 'nextImage' alt = 'Arrow right' /></button>
      </div>
    </>
  );
};

export default Home;
