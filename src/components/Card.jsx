import React, { useState } from "react";
import { useCart } from "../Context/cartContext";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

function Card({ product }) {
  const dispatch = useDispatch();
  const { setBill } = useCart();
  const handleClick = () => {
    dispatch(addToCart(product));
    setBill((prev) => prev + product.price);
  };

  return (
    <div>
      <div className="card hover:transition-all mx-3 my-2 h-96 text-ellipsis overflow-hidden inline-flex flex-col justify-center w-56 rounded-lg border-2 dark:border-[#333333] border-[#E0E0E0]  bg-[#FFFFFF] items-center hover:shadow-2xl">
        <div className="pic   ">
          <img
            className="max-h-44 max-w-44 rounded-lg p-2"
            src={product.image}
            alt="image"
          />
        </div>
        <div className="text flex-col justify-center text-[#333333]  overflow-clip items-center text-lg font-medium">
          <h1
            className={`flex-wrap justify-center text-center  transition-all duration-200`}
          >
            {product.title}
          </h1>

          <div className="flex justify-between mx-2 text-base font-medium mt-2">
            <h4>review: {product.rating.rate}/5</h4>
            <h4>${product.price}</h4>
          </div>
          <div className="buy-btn flex justify-center items-center my-3 ">
            <button
              className="border-2 rounded-lg px-5 dark:hover:bg-[#FFAB40] hover:bg-[#FFCC80]"
              onClick={handleClick}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
