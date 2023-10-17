//import docuPulseLogo from '../assets/logo-web-docuPulse-noBackground.png';
import { useEffect, useState } from 'react';
import { requestMovies, buildMovieApiUrl, API_KEY, Movie } from '../../requests/moviesRequest';
import '../../styles/App.css';
import './Home.css';
import Header from '../../utils/header';
import nextImage from '../../assets/next-image.png';
import previousImage from '../../assets/previous-image.png';

const Home = () => {
  // Acá usamos el Hook useState para establecer los estados de movies y de currentPage
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  //Usamos useEffect para ejecutar efectos de componentes funcionales externos
  useEffect(() => {

    //Primer parámetro Configuraciones
    const apiUrl = buildMovieApiUrl(currentPage);
    
    const options: RequestInit = { // Opciones para la solicitud HTTP
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: API_KEY,
      },
    };
    
    requestMovies(apiUrl, options)//Llamamos a la funcion requestMovies para que muestre la data.
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    // Segundo parámetro Dependencias es currentPage (se va a ejecutar lo anterior cada vez que cambie currentPage)
  }, [currentPage]);

  //Funcion para manejar el cambio de página
  const handleNextPage = () => {
    // Incrementa el número de página
    setCurrentPage(currentPage + 1);
  };
  const handlePreviousPage = () => {
    // Incrementa el número de página
    setCurrentPage(currentPage - 1);
  };

  
  // Renderizamos el componente
  return (
    <>
      {/*Agregamos el header*/}
      <div>
        <Header/>
      </div>
      {/*Agregamos el contenedor principal*/}
      <div className='full-container'>
        {/*Agregamos el contenedor de las tarjetas*/}
        <div className='movie-cards'>
          {/*Recorremos el arreglo movies y creamos una tarjeta con link, imagen y texto para cada una*/}
          {movies.map((movie: Movie, i: number) => (
            <div className='movie-box' key={i}>
              <a href='#' className='link-movie'>
                <img
                  className='movie-img'
                  src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
                  alt={movie.original_title}
                />
              </a>
              <div className='poster-text'>
                <p className='movie-title'>{movie.original_title}</p>
                <p className='movie-date'>{new Date(movie.release_date).getFullYear()}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Sección que contiene los botones*/}
        <div className="centered-container">
          {/* Botón para avanzar a la siguiente página */}
          {currentPage > 1 && (
            <button className= 'button-next' onClick={handlePreviousPage}>
              <img src = {previousImage} className= 'previousImage' alt = 'Arrow left' />Previous page
            </button> 
          )}
          {/* Se llama a la función handleNextPAge cada vez que se hace click */}
          <button className= 'button-next' onClick={handleNextPage}>Load More
            <img src = {nextImage} className= 'nextImage' alt = 'Arrow right' /></button>

          
        </div>

      </div>
    </>
  );
};

export default Home;
