import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from './Pagination';

describe('Pagination Component', () => {
  it('renders pagination buttons and handles click events', () => {
    const setCurrentPageMock = jest.fn();
    const page = 3;
  
    render(<Pagination page={page} setCurrentPage={setCurrentPageMock} />);
  
    // Busca los botones por el atributo `alt` de las imágenes
    const firstPageButton = screen.getByAltText('First Page');
    const lastPageButton = screen.getByAltText('Last Page');
    const loadMoreButton = screen.getByText('Load More');
    const previousButton = screen.getByText('Previous page');

  
    // Simula el clic en los botones de paginación
    fireEvent.click(previousButton);
    fireEvent.click(loadMoreButton);
    fireEvent.click(firstPageButton);
    fireEvent.click(lastPageButton);
  
    // Verifica que setCurrentPage se haya llamado con los valores correctos
    expect(setCurrentPageMock).toHaveBeenCalledWith(page - 1); // Para el botón "Previous page"
    expect(setCurrentPageMock).toHaveBeenCalledWith(page + 1); // Para el botón "Load More"
    expect(setCurrentPageMock).toHaveBeenCalledWith(1); // Para el botón "First Page"
    expect(setCurrentPageMock).toHaveBeenCalledWith(500); // Para el botón "Last Page"
  });
});
