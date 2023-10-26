import { useState, useEffect } from 'react';
import previousImage from '../../assets/previous-image.png';
import { useParams } from 'react-router-dom';
import { Movie } from '../../requests/moviesRequest';

const MovieDetails = () => {
  const { movie_id } = useParams();
  console.log('movie:id:', movie_id);
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    // Realiza una solicitud a la API o carga la película desde una lista de películas
    // Aquí debes usar el `movie_id` para obtener los detalles de la película correspondiente.
    // Puedes hacer una solicitud a tu API o buscar la película en tu lista.

    // Ejemplo de solicitud a la API (asegúrate de reemplazarlo con tu lógica):
    fetch(`https://api.themoviedb.org/movie/${movie_id}`)
      .then((response) => response.json())
      .then((data: Movie) => {
        setMovie(data);
        console.log('Detalles de la película:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [movie_id]);

  if (!movie) {
    return <p>Cargando...</p>; // Puedes mostrar un indicador de carga mientras se obtienen los datos.
  }
  return (
    <>
    <section className= 'container'>

      <section className='back-section'>
        <button className='back'><img src={previousImage} alt='Back to catalogue' />Back to Catalogue</button>
      </section>

      <section className='card'>
        <h1 className='movie-title-detail'>{movie.original_title}</h1>
        <section className='inner-card'>
          <a className='score' href= '#'>{movie.vote_average}</a>
          <p className='date-detail'>{movie.release_date} | {movie.genre_ids} | {movie.vote_count}</p>
        </section>

        <h2>Overview</h2>
        <h3>{movie.overview}</h3>
      </section>

    </section>

    <section className='poster-container'>
      <img className='movie-poster' 
      src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
      alt={movie.original_title}/> 
    </section>
    </>
  );
};

export default MovieDetails;
