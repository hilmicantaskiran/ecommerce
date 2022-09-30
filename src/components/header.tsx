import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
    const state = useSelector((state: any) => state.handleCart);
    const navigate = useNavigate();

    const [search, setSearch] = useState<any>('');

    const changeLocation = () => {
        navigate('/', { replace: true });
        window.location.reload();
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        navigate('/' + search, { replace: true });
        window.location.reload();
    }

    return (
        <header className='bg-[#2a59fe] py-2'>
            <div className='flex flex-col sm:flex-row mx-auto justify-center sm:justify-between w-full sm:max-w-7xl'>
                <div className='flex flex-col sm:flex-row items-center mx-auto sm:m-0'> 
                    <Link to='/' onClick={() => changeLocation()} className='text-white text-center text-2xl font-semibold m-0 sm:mr-32'>Ecommerce</Link>
                    <div className='mt-2 sm:mt-0'>   
                        <label htmlFor='search' className='mb-2 font-medium text-gray-900 sr-only'>Search</label>
                        <form className='relative' onSubmit={handleSubmit}>
                            <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                                <svg aria-hidden='true' className='w-5 h-5 text-gray-500 dark:text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path></svg>
                            </div>
                            <input type='search' id='search' className='block p-2 sm:mr-40 text-sm pl-10 w-full text-gray-900 bg-gray-50 border border-gray-300' placeholder='Search' onChange={(e) => setSearch(e.target.value)} />              
                        </form>
                    </div>
                </div>
                <div className='flex items-center justify-center text-white mt-4 sm:mt-0 space-x-8'>
                    <div className='flex flex-row items-center space-x-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        <h1 className='font-medium'>{state.reduce((acc: any, item: any) => acc + item.price * item.quantity, 0)}₺</h1>
                    </div>
                    <div className='flex flex-row items-center space-x-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <h1 className='font-medium'>Hilmi Can</h1>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;