import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import MoviePage from './MoviePage';
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';
// Mock de la función global.fetch para simular la solicitud
global.fetch = async () => {
  return {
    json: async () => ({
      id: 1174725,
      original_title: "Duell am Abgrund",
      vote_average: 6.456,
      release_date: '2023-10-04',
      vote_count: 34,
      overview: "Fearless alpine climbers Ueli Steck and Dani Arnold enter into a death-defying rivalry to set speed records on the Swiss Alps' great north faces.",
      poster_path: "/3H8u03qr9se2pCv3QTHR1gxSa9k.jpg",
    }),
  } as Response;
};

describe('MoviePage Component', () => {
  it('renders movie details', async () => {
    await act(async () => {
    render(
      <MemoryRouter initialEntries={['/movie/1174725']}>
        <Routes>
          <Route path="/movie/:movieId" element={<MoviePage />} /> {/* Usa "element" para definir el componente */}
        </Routes>
      </MemoryRouter>
    );
    });

    // Realiza tus aserciones sobre los detalles de la película
    expect(screen.getByText('Duell am Abgrund')).toBeInTheDocument();
    expect(screen.getByText('64.6%')).toBeInTheDocument();
    expect(screen.getByText('2023-10-04 | 34 votes')).toBeInTheDocument();
    expect(screen.getByText('Overview')).toBeInTheDocument();
    expect(screen.getByText("Fearless alpine climbers Ueli Steck and Dani Arnold enter into a death-defying rivalry to set speed records on the Swiss Alps' great north faces.")).toBeInTheDocument();
    expect(screen.getByAltText('Duell am Abgrund')).toBeInTheDocument();
  });

  it('renders "No Overview provided" when movie overview is empty', async () => {
    const mockResponse = {
      id: 1174725,
      original_title: 'Duell am Abgrund',
      vote_average: 6.456,
      release_date: '2023-10-04',
      vote_count: 34,
      overview: '', // Cadena vacía
      poster_path: '/3H8u03qr9se2pCv3QTHR1gxSa9k.jpg',
    };
  
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: async () => mockResponse,
    } as Response);
  
    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/movie/123']}>
          <Routes>
            <Route path="/movie/:movieId" element={<MoviePage />} />
          </Routes>
        </MemoryRouter>
      );
    });
  
    expect(screen.getByText('No Overview provided')).toBeInTheDocument();
  
    // Asegúrate de restaurar global.fetch después de la prueba
    jest.restoreAllMocks();
  });
  /*it.only('handles error and logs it', async () => {
    global.fetch = jest.fn().mockImplementation(() => {
      throw new Error('Network error');
    });
  
    await render(
      <MemoryRouter initialEntries={['/movie/123']}>
        <Routes>
          <Route path="/movie/:movieId" element={<MoviePage />} />
        </Routes>
      </MemoryRouter>
    );
  
    expect(console.error).toHaveBeenCalledWith('Error:', expect.any(Error));
  });*/
});