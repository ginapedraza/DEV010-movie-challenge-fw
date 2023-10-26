import { fireEvent, render, screen } from '@testing-library/react';
import SortBy from './SortBy';
import '@testing-library/jest-dom';

describe('SortBy component', () => {
    it('changes option value with onChangeSortBy in sort select', async () => {
        const onChangeSortBy = jest.fn();
        render(<SortBy onChangeSortBy={onChangeSortBy} />);
        
        const selectElement = screen.getByTestId('sort');
        
        fireEvent.change(selectElement, {
            target: {value: 'vote_average.desc'}
        });

        expect(onChangeSortBy).toHaveBeenLastCalledWith('vote_average.desc');
    });
});