//import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
//import userEvent from '@testing-library/user-event';
import MovieList from './MovieList';
import '@testing-library/jest-dom';

// Mock de las funciones y datos necesarios para la prueba
jest.mock('../../requests/moviesRequest', () => {
  return {
    buildMovieApiUrl: jest.fn(),
    API_KEY: 'fake-api-key',
    requestMovies: jest.fn(() => Promise.resolve({ results: [{ id: 1174725, original_title: 'Duell am Abgrund' }] })),
  };
});

describe('MovieList Component', () => {
  it('renders a list of movies', async () => {
    const filterByValue = ''
    const sortByValue = 'popularity.desc'
    render(<MovieList filterByValue={filterByValue} sortByValue={sortByValue}/>);

    // Espera a que las películas se carguen (puedes personalizar según tu lógica de carga)
    await waitFor(() => screen.getByText('Duell am Abgrund'));

    // Realiza las aserciones
    expect(screen.getByText('Duell am Abgrund')).toBeInTheDocument();

    // También puedes hacer aserciones sobre otras películas, imágenes, etc.
  });

});
