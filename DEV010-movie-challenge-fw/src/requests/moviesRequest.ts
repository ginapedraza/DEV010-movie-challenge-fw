//Definimos el tipo de dato Movie que vamos a obtener de las peliculas
export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  vote_count: number;
};

export type Language = {
  id: number;
  name: string;
};


//Definimos la respuesta de la Api que nos dará un arreglo de objetos tipo Movie (definido anteriormente)
export type ApiResponse = {
  results: Movie[];
};

//Guardamos en una constate la Api Key que necesitaremos como autorizavión
export const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZGUzMGMxZGY5ODEyZjAwZjFjOTZjMGNjYzI2OGZmZSIsInN1YiI6IjY1Mjk0Zjk1NjI5YjJjMDBjNTllNjM3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YcDVFDVV7B2k1qCjx1JHzsKXiew57qQD58OE03_0bmk'; 

//Creamos una función que construya la URL según la página requerida
export const buildMovieApiUrl = (page: number) => {
  return `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=99`;
};

//Creamos una promesa para hacer la solicitud HTTP con fetch y obtenerla manejando los errores
export const requestMovies = (url: string, options: RequestInit): Promise<ApiResponse>=> {
  return fetch(url, options)
    .then(async (res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      //Indicamos que la data es la ApiResponse de las peliculas
      const data = await res.json();
      return data as ApiResponse;
    })
    .catch((error) => {
      console.error('Error:', error);
      throw error;
    });
};

