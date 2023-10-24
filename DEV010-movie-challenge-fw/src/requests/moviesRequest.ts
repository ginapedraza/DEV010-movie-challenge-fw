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


//Definimos la respuesta de la Api que nos dará un arreglo de objetos tipo Movie (definido anteriormente)
export type ApiResponse = {
  results: Movie[];
};

//Guardamos en una constate la Api Key que necesitaremos como autorizavión
export const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZGUzMGMxZGY5ODEyZjAwZjFjOTZjMGNjYzI2OGZmZSIsInN1YiI6IjY1Mjk0Zjk1NjI5YjJjMDBjNTllNjM3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YcDVFDVV7B2k1qCjx1JHzsKXiew57qQD58OE03_0bmk'; 

//Creamos una función que construya la URL según la página requerida
export const buildMovieApiUrl = (page: number, selectedOption: string): string => {
  const baseUrl = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=99`;

  if (!selectedOption) {
    return baseUrl; // Devolver la URL base si no se ha seleccionado ninguna opción
  }

  const dateFilters: Record<string, [string, string]> = {
    latestReleases: ['2022-01-01', '2023-10-23'], // Aquí usamos la fecha actual como fecha de finalización
    lastDecade: ['2011-01-01', '2021-12-31'],
    oldest: ['1900-01-01', '2000-12-31'],
  };

  const [startDate, endDate] = dateFilters[selectedOption] || []; // Obtenemos las fechas correspondientes

  if (startDate && endDate) {
    return `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&primary_release_date.gte=${startDate}&primary_release_date.lte=${endDate}&sort_by=popularity.desc&with_genres=99`;
  }

  return baseUrl;
};

/*// Función para formatear la fecha en el formato "YYYY-MM-DD"
const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Agregamos 1 al mes ya que en JavaScript enero es 0, y luego formateamos a dos dígitos
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};*/

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

