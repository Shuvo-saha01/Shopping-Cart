import React, { useEffect, useState } from 'react'
import { useCart } from '../../Context/cartContext';

function CartCard({product}) {
    const [count , setCount] = useState(1)
    const{setBill} = useCart();

    

    const increment = () => {
        if(count < 99){
            setCount((prev) => prev+1);
            setBill((prev) => prev + product.price)
        }
    }
    const decrement = () => {
        if(count > 1){
            setCount((prev) => prev - 1);
            setBill((prev) => prev - product.price)
        }
    }

  return (
    <div id='body' className='flex border-[#E0E0E0] border-b-2 pb-2 bg-[#FFFFFF] items-center mx-5 my-5'>
        <div id='image' className='border-2 rounded-lg p-5 border-[#E0E0E0]'>
            <img className='max-h-52 max-w-52 rounded-lg' src={product.image} 
            alt="Product Image here" 
            />
        </div>
        <div id='text' className='mx-5 text flex-col justify-center text-[#333333]  overflow-clip items-center text-lg font-medium' >
            <h1>{product.title}</h1>
            <h1>Quantity: {count}</h1>
            <h1>Price: ${product.price.toFixed(2)}</h1>
            <h1 className='font-normal' >{product.description}</h1>
            <div id='qtyBtn'>
                <button className='border-2 px-2 mr-3' onClick={decrement}>-</button>    
                {count}
                <button className='border-2 px-2 mx-3' onClick={increment}>+</button>
            </div>
        </div>
    </div>
  )
}

export default CartCard