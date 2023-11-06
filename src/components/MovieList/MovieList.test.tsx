import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import MovieList from './MovieList';
import '@testing-library/jest-dom';

// Mock de las funciones y datos necesarios para la prueba
jest.mock('../../requests/moviesRequest', () => {
  return {
    buildMovieApiUrl: jest.fn(),
    API_KEY: 'fake-api-key',
    requestMovies: jest.fn(() => Promise.resolve({ results: 
      [{ id: 1171989, original_title: 'The Devil on Trial' },
      { id: 1174725, original_title: "Duell am Abgrund", poster_path: null  },
      { id: 1171989, original_title: "Encanto at the Hollywood Bowl" },
      { id: 926762, original_title: "Living with Chucky" },
      { id: 1168842, original_title: "Monster Inside: America's Most Extreme Haunted House" },
      { id: 1187872, original_title: "Higuita: El camino del Escorpión" },
      { id: 1155770, original_title: "The Pigeon Tunnel" },
      { id: 1183225, original_title: "Soțul Meu Musulman" },
      { id: 1146302, original_title: "His love of film began as an escape from a rocky childhood. From underdog to Hollywood legend, Sylvester Stallone tells his story in this documentary." },
      { id: 899082, original_title: "Harry Potter 20th Anniversary: Return to Hogwarts" },
      { id: 1025169, original_title: "13 หมูป่า: เรื่องเล่าจากในถ้ำ" },
      { id: 1149947, original_title: "To End All War: Oppenheimer & the Atomic Bomb" },
      { id: 1128514, original_title: "Big Sur Gay Porn" },
      { id: 1195945, original_title: "7200 segundos con Ana Mena" },
      { id: 965143, original_title: "사이버 지옥: n번방을 무너뜨려라" },
      { id: 854535, original_title: "The Legacy of Chucky" },
      { id: 691179, original_title: "Friends: The Reunion" },
      { id: 1033801, original_title: "The Curse of Robert the Doll" },
      { id: 440249, original_title: "After Porn Ends 2" },
      { id: 324558, original_title: "X-Rated: The Greatest Adult Movies of All Time" }
    
    ] })),
  };
});

describe('MovieList Component', () => {
  it('renders a list of movies', async () => {
    const filterByValue = ''
    const sortByValue = 'popularity.desc'
    render(
      <MemoryRouter>
        <MovieList filterByValue={filterByValue} sortByValue={sortByValue}/>
        </MemoryRouter>
        );

    // Espera a que las películas se carguen (puedes personalizar según tu lógica de carga)
    await waitFor(() => screen.getByText('The Devil on Trial'), { timeout: 1000 });

    // Realiza las aserciones
    expect(screen.getByText('The Devil on Trial')).toBeInTheDocument();

    // También puedes hacer aserciones sobre otras películas, imágenes, etc.
  });
  /*it.only('renders no-poster image when poster_path is null', async () => {
    const filterByValue = '';
    const sortByValue = 'popularity.desc';
    render(
      <MemoryRouter>
        <MovieList filterByValue={filterByValue} sortByValue={sortByValue} />
      </MemoryRouter>
    );
  
    // Espera a que las películas se carguen (puedes personalizar según tu lógica de carga)
    await waitFor(() => screen.getByText("Once More with Ealing"), { timeout: 5000 });
  
    // Selecciona la película con poster_path nulo por su atributo alt
    const movieWithNullPoster = screen.getByAltText("Once More with Ealing");
  
    // Verifica que se muestre la imagen no-poster.png
    const noPosterImage = movieWithNullPoster.querySelector('img[src="src/assets/no-poster.png"]');
    expect(noPosterImage).toBeInTheDocument();
  });*/
});