import { fireEvent, render, screen } from '@testing-library/react';
import MovieFilter from './MovieFilter';
import '@testing-library/jest-dom';

describe('MovieFilter component', () => {
    it('changes option value with onChangeFilterBy in filter select', async () => {
        const onChangeFilterBy = jest.fn();
        render(<MovieFilter onChangeFilterBy={onChangeFilterBy} />);

        const selectElement = screen.getByTestId('filter');

        fireEvent.change(selectElement, {
            target: {value: 'primary_release_date.gte=2019-12-31&primary_release_date.lte=2023-12-31'}
        });

        expect(onChangeFilterBy).toHaveBeenLastCalledWith('primary_release_date.gte=2019-12-31&primary_release_date.lte=2023-12-31');
    })
})