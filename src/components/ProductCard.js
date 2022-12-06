import React from "react";
import { BiListPlus, BiTrashAlt } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/actionCreators/productActions";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    return (
        <div
            className='shadow-lg rounded-3xl border relative p-3 flex flex-col text-indigo-900'
            key={product._id}
        >
            {window.location.pathname === '/cart' && <div className="absolute top-4 right-4 bg-indigo-500 text-white rounded-full h-6 w-10 text-center">{product.quantity}</div>}
            <div className='h-52 w-52 mx-auto'>
                <img src={product.image} alt={product.model} />
            </div>
            <h1 className='font-bold text-center'>{product.model}</h1>
            <p className='text-center font-semibold mb-3'>Rating: {product.rating}</p>
            <div className=' flex-1'>
                <ul className='space-y-2'>
                    {product.keyFeature.map((feature) => {
                        return <li key={feature} className='text-sm '>{feature}</li>;
                    })}
                </ul>
            </div>
            <div className='flex gap-2 mt-5'>
                {window.location.pathname !== '/cart' && <button
                    className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'
                    onClick={() => dispatch(addToCart(product))}
                >
                    Add to cart
                </button>}
                {window.location.pathname !== '/cart' && <button
                    title='Add to wishlist'
                    className='bg-indigo-500  py-1 px-2 rounded-full'
                >
                    <BiListPlus className='text-white' />
                </button>}
                {window.location.pathname === '/cart' && <button
                    title='Remove Cart'
                    className='bg-red-500 flex justify-between items-center w-full py-2 px-4 rounded-full'
                    onClick={() => dispatch(removeFromCart(product))}
                >
                    <p className="text-white font-[600] uppercase tracking-wider">Remove from cart</p>
                    <BiTrashAlt className='text-white' fontSize={20} />
                </button>}
            </div>
        </div>
    );
};

export default ProductCard;