import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Total() {
  const state = useSelector((state: any) => state.handleCart);

  return (
    <div className="flex p-4 sm:p-0 flex-col space-y-4 mt-6 w-auto">
        <div className="flex flex-col w-full space-y-4 bg-white p-2 py-3 drop-shadow-lg">
            <div className='flex flex-row'>
              <p className='text-lg ml-1'>Total Price: </p>
              <p className='font-medium text-lg text-[#2a59fe] ml-2'>{state.reduce((acc: any, item: any) => acc + item.price * item.quantity, 0)}</p>
              <p className='font-medium text-lg text-[#2a59fe]'>₺</p>
            </div>
            <NavLink to="#!" className="flex w-full mt-10 sm:mt-auto bg-[#2a59fe] text-white py-2 px-4 rounded-lg">
                <p className="text-lg mx-auto">Checkout</p>
            </NavLink>
        </div>
    </div>
  );
}

export default Total;