import React from 'react';
import { useState } from 'react';

type FilterProps = {
    products: any[];
    handleFilters: (filters: any) => void;
};

const sort = [
    { text: "Old to New", value: "oldest" },
    { text: "New to Old", value: "newest" },
    { text: "Price Low to High", value: "lowest" },
    { text: "Price High to Low", value: "highest" }
];

const Filter: React.FunctionComponent<FilterProps> = ({ ...props }) => {
    const { products, handleFilters } = props;

    const [filterBrand, setFilterBrand] = useState<string[]>([]);
    const [filterModel, setFilterModel] = useState<string[]>([]);
    const [filterSort, setFilterSort] = useState('');

    const [searchBrand, setSearchBrand] = useState<string>('');
    const [searchModel, setSearchModel] = useState<string>('');

    const models = products.map((product: any) => product.model);
    const brands = products.map((product: any) => product.brand);

    const unqiueModels = [...new Set(models)];
    const unqiueBrands = [...new Set(brands)];

    const handleBrandChange = (value: any) => {
        const currentIndex = filterBrand.indexOf(value);
        const newBrand = [...filterBrand];

        if (currentIndex === -1) {
            newBrand.push(value);
        } else {
            newBrand.splice(currentIndex, 1);
        }

        setFilterBrand(newBrand);
        handleFilters({ brand: newBrand, model: filterModel, sort: filterSort });
    }

    const handleModelChange = (value: any) => {
        const currentIndex = filterModel.indexOf(value);
        const newModel = [...filterModel];
        
        if (currentIndex === -1) {
            newModel.push(value);
        } else {
            newModel.splice(currentIndex, 1);
        }
        
        setFilterModel(newModel);
        handleFilters({ model: newModel, brand: filterBrand, sort: filterSort });
    }

    const handleSort = (value: any) => {
        setFilterSort(value);
        handleFilters({ brand: filterBrand, model: filterModel, sort: value });
    }

    return (
        <>
            <div className="relative flex-col px-6 sm:p-0 space-y-4">
                <div className="flex flex-col">
                    <p className='font-medium text-sm text-gray-400 my-2'>Sort By</p>
                    <ul className='space-y-4 bg-white p-4 drop-shadow-lg'>
                        {sort.map(sort => (
                            <li key={sort.text} className="flex items-center">
                                <input 
                                    type="radio"
                                    id={sort.text}
                                    value={sort.text} 
                                    name="sort"
                                    defaultChecked={sort.text === "Old to New"}
                                    className="form-radio h-4 w-4 text-blue-500"
                                    onChange={() => handleSort(sort.value)}
                                />
                                <label htmlFor={sort.text} className="block ml-3 text-sm font-medium text-gray-700"> {sort.text} </label>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col">
                    <p className='font-medium text-sm text-gray-400 my-2'>Brands</p>
                    <div className="bg-white drop-shadow-lg">
                        <div className='mt-2 sm:mt-0 p-2'>   
                            <label htmlFor='search-brand' className='mb-2 font-medium text-gray-900 sr-only'>Search</label>
                            <div className='relative'>
                                <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                                    <svg aria-hidden='true' className='w-5 h-5 text-gray-500 dark:text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path></svg>
                                </div>
                                <input type='search' id='search-brand' className='block p-2 text-sm pl-10 w-full text-gray-900 bg-gray-50 border border-gray-300' placeholder='Search' required onChange={(e) => setSearchBrand(e.target.value)} />                    
                            </div>
                        </div>
                        <ul className='space-y-4 p-4 h-48 overflow-y-auto scrollbar '>
                            {unqiueBrands.filter((brand: any) => brand.toLowerCase().includes((searchBrand).toLowerCase())).map((brand: any) => (
                                <li key={brand} className="flex items-center">
                                    <input 
                                        type="checkbox"
                                        id={brand}
                                        value={brand} 
                                        name="brand"
                                        className="form-radio h-4 w-4 text-blue-500"
                                        onChange={() => handleBrandChange(brand)}
                                        checked={filterBrand.indexOf(brand) === -1 ? false : true}
                                    />
                                    <label htmlFor={brand} className="block ml-3 text-sm font-medium text-gray-700"> {brand} </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className='font-medium text-sm text-gray-400 my-2'>Models</p>
                    <div className="bg-white drop-shadow-lg">
                        <div className='mt-2 sm:mt-0 p-2'>   
                            <label htmlFor='search-model' className='mb-2 font-medium text-gray-900 sr-only'>Search</label>
                            <div className='relative'>
                                <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                                    <svg aria-hidden='true' className='w-5 h-5 text-gray-500 dark:text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path></svg>
                                </div>
                                <input type='search' id='search-model' className='block p-2 text-sm pl-10 w-full text-gray-900 bg-gray-50 border border-gray-300' placeholder='Search' required onChange={(e) => setSearchModel(e.target.value)} />                    
                            </div>
                        </div>
                        <ul className='space-y-4 bg-white p-4 h-48 overflow-y-auto scrollbar'>
                            {unqiueModels.filter((model: any) => model.toLowerCase().includes(searchModel.toLowerCase())).map((model: any) => (
                                <li key={model} className="flex items-center">
                                    <input 
                                        type="checkbox"
                                        id={model}
                                        value={model} 
                                        name="model"
                                        className="form-radio h-4 w-4 text-blue-500"
                                        onChange={() => handleModelChange(model)}
                                        checked={filterModel.indexOf(model) === -1 ? false : true}
                                    />
                                    <label htmlFor={model} className="block ml-3 text-sm font-medium text-gray-700"> {model} </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Filter;