import React from 'react';
import { useEffect } from 'react';
import { addCart, removeCart } from '../redux/action';
import { useSelector, useDispatch } from 'react-redux';

function Cart() {
    const state = useSelector((state: any) => state.handleCart);

    const dispatch = useDispatch();
    
    const addToCart = (product: any) => {
        dispatch(addCart(product));
    }

    const removeFromCart = (product: any) => {
        dispatch(removeCart(product));
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state));
    } , [state]);

    return (
        <div className="flex px-6 sm:p-0 mx-4 sm:mx-auto flex-col bg-white max-h-96 overflow-y-auto space-y-4 scrollbar drop-shadow-lg">
            <div className="flex flex-col w-full sm:w-60 py-1 px-3">
                <div className="flex flex-col">
                    { state?.length > 0 ? state.map((item: any) => 
                        <div className="flex flex-col space-y-2">
                            <div className="flex flex-row items-center justify-between space-x-1">
                                <div className="flex flex-col">
                                    <h3 className="font-medium text-sm text-gray-900">{item.brand} {item.model}</h3>
                                    <p className="font-medium text-[#2a59fe]">{item.price}₺</p>
                                </div>
                                <div className="flex flex-row">
                                    <button 
                                        className="text-gray-600 text-center font-medium rounded-l-md bg-gray-200 border-0 my-6 p-2 focus:outline-none"
                                        onClick={() => removeFromCart(item)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M20 12H4" />
                                        </svg>
                                    </button>
                                    <input className='w-10 text-center text-white bg-[#2a59fe] border-0 my-6 p-2 focus:outline-none' type='text' value={item.quantity} />
                                    <button 
                                        className="text-gray-600 text-center font-medium rounded-r-md bg-gray-200 border-0 my-6 p-2 focus:outline-none"
                                        onClick={() => addToCart(item)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='flex flex-col space-y-2'>
                            <h3 className="font-medium text-gray-900">Your cart is empty</h3>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Cart;