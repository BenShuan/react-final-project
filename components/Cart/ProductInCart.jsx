import React, { useContext } from 'react'
import { CartContext } from '../../utils/CartContext';
import { Minus, MinusSquare, Plus, PlusSquare } from 'lucide-react';

const ProductInCart = ({ product }) => {
  const { updateItemInCart, deleteItemFromCart } = useContext(CartContext);

  return (
    <div className='grid grid-cols-7 text-center items-center content-center bg-gray-400/50 h-12 pl-4  pr-8 py-2 rounded-4xl transition-all duration-300 '>
      <p className='col-span-2'>{product.product.title}</p>
      <div className='flex items-center justify-center gap-2 col-span-2'> <span onClick={() => updateItemInCart(product.product, product.quantity - 1)} ><MinusSquare /></span> {product.quantity} <span onClick={() => updateItemInCart(product.product, product.quantity + 1)} ><PlusSquare/></span> </div>
      <p className='col-span-2'>Total: ${product.totalPrice}</p>
      <button  onClick={() => deleteItemFromCart(product.product.id)} className='col-span-1 bg-red-500 text-white rounded-full size-8 hover:bg-red-300 ml-auto'>X</button>
    </div>
  )
}

export default ProductInCart  