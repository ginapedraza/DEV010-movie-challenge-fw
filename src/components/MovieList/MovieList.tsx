import { useState, useEffect } from 'react';
import { buildMovieApiUrl, API_KEY, requestMovies, Movie } from '../../requests/moviesRequest';
import '../Home/Home.css';
import Pagination from '../Pagination/Pagination';
import { Link } from 'react-router-dom';


const MovieList = ({ filterByValue, sortByValue }: { filterByValue: string, sortByValue: string }) => {

  
  // Acá usamos el Hook useState para establecer los estados de movies y de currentPage
  //movies representa el estado y setMovies el cambio de estado
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  


  //Usamos useEffect para ejecutar efectos de componentes funcionales externos
  useEffect(() => {
 
    //Primer parámetro Configuraciones
    const apiUrl = buildMovieApiUrl(currentPage, filterByValue, sortByValue);
    
    const options: RequestInit = { // Opciones para la solicitud HTTP
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: API_KEY,
      },
    };
    
    requestMovies(apiUrl, options)//Llamamos a la promesa requestMovies para que muestre la data.
      .then((data) => {
        setMovies(data.results);
        console.log(data.results)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    // Segundo parámetro Dependencias es currentPage (se va a ejecutar lo anterior cada vez que cambie currentPage), filter y sort
  }, [currentPage, filterByValue, sortByValue]);

  
  // Renderizamos el componente
  return (
    <>
      {/*Agregamos el contenedor principal*/}
      <div className='full-container'>
        {/*Agregamos el contenedor de las tarjetas*/}
        <div className='movie-cards'>
          {/*Recorremos el arreglo movies y creamos una tarjeta con link, imagen y texto para cada una*/}
          {movies.map((movie: Movie) => (

            <div className='movie-box' key={movie.id}>

              <Link to={`/movie/${movie.id}?filter=${filterByValue}&sort=${sortByValue}`}  className='link-movie'>{/*Probando obtener las opciones de filter y sort seleccionadas, aun no sirve para mantenerls*/}
                <img
                  className='movie-img'
                  src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
                  alt={movie.original_title}
                />
              </Link>
              <div className='poster-text'>
                <p className='movie-title'>{movie.original_title}</p>
                <p className='movie-date'>{new Date(movie.release_date).getFullYear()}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Pagination page= { currentPage } setCurrentPage= { setCurrentPage } />
  
  
      </div>
    </>
  );
};

export default MovieList;
