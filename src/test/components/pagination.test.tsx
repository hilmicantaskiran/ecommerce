import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Pagination from '../../components/paginaton';

describe('Pagination', () => {
    it('should render correctly', () => {
        const { asFragment } = render(
            <MemoryRouter>
                <Pagination
                    pages={100}
                    setCurrentPage={() => {}}
                />
            </MemoryRouter>
        );
        expect(asFragment()).toMatchSnapshot();
    }),
    it('should render correctly with no pages', () => {
        const { asFragment } = render(
            <MemoryRouter>
                <Pagination
                    pages={0}
                    setCurrentPage={() => {}}
                />
            </MemoryRouter>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
