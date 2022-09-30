import React from 'react';
import { render } from '@testing-library/react';
import Card from '../../components/card';
import axios from 'axios';
import { MemoryRouter } from 'react-router-dom';

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

describe('Card', () => {
    it('should render correctly', () => {
        (axios.get as jest.Mock).mockResolvedValue({ data: [dummyProduct] });
        const { asFragment } = render(
            <MemoryRouter>
                <Card 
                    key={dummyProduct.id} 
                    id={dummyProduct.id}
                    image={dummyProduct.image}
                    price={dummyProduct.price}
                    brand={dummyProduct.brand}
                    model={dummyProduct.model}
                    addToCart={() => {}}
                />
            </MemoryRouter>
        );
        expect(asFragment()).toMatchSnapshot();
    }),
    it('should render correctly with no image', () => {
        (axios.get as jest.Mock).mockResolvedValue({ data: [{ ...dummyProduct, image: '' }] });
        const { asFragment } = render(
            <MemoryRouter>
                <Card 
                    key={dummyProduct.id} 
                    id={dummyProduct.id}
                    image={dummyProduct.image}
                    price={dummyProduct.price}
                    brand={dummyProduct.brand}
                    model={dummyProduct.model}
                    addToCart={() => {}}
                />
            </MemoryRouter>
        );
        expect(asFragment()).toMatchSnapshot();
    }),
    it('should render correctly with no description', () => {
        (axios.get as jest.Mock).mockResolvedValue({ data: [{ ...dummyProduct, description: '' }] });
        const { asFragment } = render(
            <MemoryRouter>
                <Card 
                    key={dummyProduct.id} 
                    id={dummyProduct.id}
                    image={dummyProduct.image}
                    price={dummyProduct.price}
                    brand={dummyProduct.brand}
                    model={dummyProduct.model}
                    addToCart={() => {}}
                />
            </MemoryRouter>
        );
        expect(asFragment()).toMatchSnapshot();
    }),
    it('should render correctly with no brand', () => {
        (axios.get as jest.Mock).mockResolvedValue({ data: [{ ...dummyProduct, brand: '' }] });
        const { asFragment } = render(
            <MemoryRouter>
                <Card 
                    key={dummyProduct.id} 
                    id={dummyProduct.id}
                    image={dummyProduct.image}
                    price={dummyProduct.price}
                    brand={dummyProduct.brand}
                    model={dummyProduct.model}
                    addToCart={() => {}}
                />
            </MemoryRouter>
        );
        expect(asFragment()).toMatchSnapshot();
    }),
    it('should render correctly with no model', () => {
        (axios.get as jest.Mock).mockResolvedValue({ data: [{ ...dummyProduct, model: '' }] });
        const { asFragment } = render(
            <MemoryRouter>
                <Card 
                    key={dummyProduct.id} 
                    id={dummyProduct.id}
                    image={dummyProduct.image}
                    price={dummyProduct.price}
                    brand={dummyProduct.brand}
                    model={dummyProduct.model}
                    addToCart={() => {}}
                />
            </MemoryRouter>
        );
        expect(asFragment()).toMatchSnapshot();
    }),
    it('should render correctly with no price', () => {
        (axios.get as jest.Mock).mockResolvedValue({ data: [{ ...dummyProduct, price: 0 }] });
        const { asFragment } = render(
            <MemoryRouter>
                <Card 
                    key={dummyProduct.id} 
                    id={dummyProduct.id}
                    image={dummyProduct.image}
                    price={dummyProduct.price}
                    brand={dummyProduct.brand}
                    model={dummyProduct.model}
                    addToCart={() => {}}
                />
            </MemoryRouter>
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly with no brand and model', () => {
        (axios.get as jest.Mock).mockResolvedValue({ data: [{ ...dummyProduct, brand: '', model: '' }] });
        const { asFragment } = render(
            <MemoryRouter>
                <Card 
                    key={dummyProduct.id} 
                    id={dummyProduct.id}
                    image={dummyProduct.image}
                    price={dummyProduct.price}
                    brand={dummyProduct.brand}
                    model={dummyProduct.model}
                    addToCart={() => {}}
                />
            </MemoryRouter>
        );
        expect(asFragment()).toMatchSnapshot();
    }),
    it('should render correctly with no brand and model and price', () => {
        (axios.get as jest.Mock).mockResolvedValue({ data: [{ ...dummyProduct, brand: '', model: '', price: 0 }] });
        const { asFragment } = render(
            <MemoryRouter>
                <Card 
                    key={dummyProduct.id} 
                    id={dummyProduct.id}
                    image={dummyProduct.image}
                    price={dummyProduct.price}
                    brand={dummyProduct.brand}
                    model={dummyProduct.model}
                    addToCart={() => {}}
                />
            </MemoryRouter>
        );
        expect(asFragment()).toMatchSnapshot();
    }),
    it('should render correctly with no brand and model and price and image', () => {
        (axios.get as jest.Mock).mockResolvedValue({ data: [{ ...dummyProduct, brand: '', model: '', price: 0, image: '' }] });
        const { asFragment } = render(
            <MemoryRouter>
                <Card 
                    key={dummyProduct.id} 
                    id={dummyProduct.id}
                    image={dummyProduct.image}
                    price={dummyProduct.price}
                    brand={dummyProduct.brand}
                    model={dummyProduct.model}
                    addToCart={() => {}}
                />
            </MemoryRouter>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

