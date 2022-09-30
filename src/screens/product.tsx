import React from "react";
import axios from "axios";
import { addCart } from '../redux/action';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';

import Header from "../components/header";
import Cart from "../components/cart";
import Total from "../components/total";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState<any>({});

  useEffect(() => {
    const fetchProduct = async () => {
      const result = await axios(
        `https://5fc9346b2af77700165ae514.mockapi.io/products/${id}`
      );
      setProduct(result.data);
    };

    fetchProduct();
  }, [id]);

  const dispatch = useDispatch();
  const addToCart = (product: any) => {
    dispatch(addCart(product));
  }

  return (
    <>
      <div className="container h-screen mx-auto bg-[#f9f9f9]">
        <Header />
        <div className="flex flex-col sm:flex-row mt-6 sm:mt-10 p-4 sm:p-0 mx-auto max-w-7xl  sm:justify-between sm:space-x-10">
          <div className="flex flex-col sm:flex-row bg-white p-4 sm:p-2 sm:pr-6 drop-shadow-lg">
            <img
              alt="ecommerce"
              className="w-full lg:w-1/2 my-4 object-cover object-center"
              src={product.image}
            />
            <div className="w-full lg:w-1/2  lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.brand} {product.model}
              </h1>
              <span className="title-font font-medium text-2xl text-[#2a59fe]">
                {product.price}₺
              </span>
              <div className="flex flex-col mt-6">
                <button 
                  className="w-full text-white text-center font-medium bg-[#2a59fe] border-0 my-6 p-2 rounded focus:outline-none"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
              <p className="leading-relaxed">{product.description}</p>
            </div>
          </div>
          <div className="flex flex-col justify-start">
            <Cart />
            <Total />
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
