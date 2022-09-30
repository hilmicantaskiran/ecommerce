import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import { addCart } from '../redux/action';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Header from '../components/header';
import Filter from '../components/filter';
import Card from '../components/card';
import Cart from '../components/cart';
import Total from '../components/total';
import Pagination from '../components/paginaton';

function Home() {
    const { value } = useParams();
    const [products, setProducts] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(12); 
    const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('https://5fc9346b2af77700165ae514.mockapi.io/products');
            setProducts(result.data);
            setFilteredProducts(sortProducts(result.data, ''));
        }

        const searchData = async () => {
            const result = await axios(`https://5fc9346b2af77700165ae514.mockapi.io/products?search=${value}`);
            setProducts(result.data);
            setFilteredProducts(sortProducts(result.data, ''));
        }

        value ? searchData() : fetchData();
    }, [value]);

    const dispatch = useDispatch();
    const addToCart = (product: any) => {
        dispatch(addCart(product));
    }

    const sortProducts = (products: any, sort: any) => {
        if (sort === 'lowest') {
            return products.sort((a: any, b: any) => a.price - b.price);
        } else if (sort === 'highest') {
            return products.sort((a: any, b: any) => b.price - a.price);
        } else if (sort === 'newest') {
            return products.sort((a: any, b: any) => new Date(b.createdAt).getDate() - new Date(a.createdAt).getDate());
        } else {
            return products.sort((a: any, b: any) => new Date(a.createdAt).getDate() - new Date(b.createdAt).getDate());
        }
    }

    const filterProducts = (filterBrand: any, filterModel: any, sort: any) => {
        if (filterBrand.length === 0 && filterModel.length === 0) {
            setCurrentPage(1);
            return sortProducts(products, sort).map((product: any) => {
                return product;
            });
        } else {
            const filteredProductList = products.filter((product: any) => {
                for (let i = 0; i < filterBrand.length; i++) {
                    if (product.brand === filterBrand[i]) {
                        return true;
                    }
                }
                for (let i = 0; i < filterModel.length; i++) {
                    if (product.model === filterModel[i]) {
                        return true;
                    }
                }
                return false;
            });
            setCurrentPage(1);
            return sortProducts(filteredProductList, sort);
        }
    }

    const handleFilters = (filters: any) => {
        const { brand, model, sort } = filters;
        setFilteredProducts(filterProducts(brand, model, sort));
    }
            
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage); 

    return(
        <>
            <div className="container mx-auto bg-[#f9f9f9]">
                <Header />
                <div className="flex flex-col sm:flex-row mt-8 mx-auto max-w-7xl">
                    <Filter products={products} handleFilters={handleFilters} />
                    <div className="flex p-4 sm:p-0 sm:mx-6 my-2 flex-col sm:flex-row flex-wrap items-center justify-center w-full sm:w-2/3">
                        <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {currentProducts.map((product) => (
                                <Card 
                                    key={product.id}
                                    id={product.id}
                                    image={product.image}
                                    price={product.price}
                                    brand={product.brand}
                                    model={product.model}
                                    addToCart={addToCart}
                                />
                            ))}
                        </div>
                        <Pagination pages={totalPages} setCurrentPage={setCurrentPage} />
                    </div>
                    <div className='flex flex-col justify-start mt-2'>
                        <Cart />
                        <Total />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;