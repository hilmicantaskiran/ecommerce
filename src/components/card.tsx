import React from 'react';
import { NavLink } from 'react-router-dom';

type CardProps = {
    id: number;
    image: string;
    price: number;
    brand: string;
    model: string;
    addToCart: (product: any) => void;
};
  
const Card: React.FunctionComponent<CardProps> = ({...props}) => {
    const {id, image, price, brand, model, addToCart } = props;

    return (
        <div className="flex flex-col justify-center items-center sm:h-72 bg-white p-2 drop-shadow">
            <NavLink key={id} id='product' to={'/product/' + id} className="flex flex-col group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden xl:aspect-w-8 xl:aspect-h-10">
                    <img
                        src={image}
                        alt="product"
                        className="w-full h-full object-center object-cover group-hover:opacity-75"
                    />
                </div>
                <h3 className="mt-4 font-medium text-sm text-[#2a59fe]">{price}₺</h3>
                <p className="mt-1 font-medium text-gray-900">{brand} {model}</p>
            </NavLink>
            <button
                id='addToCart'
                className="w-full mt-10 sm:mt-auto bg-[#2a59fe] text-white py-2 px-4 rounded-lg"
                onClick={() => addToCart(props)}
            >
                Add to Cart
            </button>
        </div>
    );
};

export default Card;
