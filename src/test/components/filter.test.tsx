import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';

import Filter from '../../components/filter';

jest.mock('axios');
const dummyProduct = {
    id: 1,
    name: 'Product 1',
    price: 100,
    image: 'https://via.placeholder.com/150',
    brand: 'Brand 1',
    model: 'Model 1',
    description: 'Description 1',
    createdAt: '2022-01-01'
}

describe('Filter', () => {
    it('should render correctly', () => {
        (axios.get as jest.Mock).mockResolvedValue({ data: [dummyProduct] });
        const { asFragment } = render(
            <MemoryRouter>
                <Filter
                    products={[dummyProduct]}
                    handleFilters={() => {}}
                />
            </MemoryRouter>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});