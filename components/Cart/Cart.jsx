import React, { useContext } from 'react'
import { CartContext } from '../../utils/CartContext'
import ProductInCart from './ProductInCart'
import Button from '../../lib/ui/Button'

const Cart = () => {
  const {cartList,totalPrice,order}=useContext(CartContext)

  return (
    <div className='min-w-md w-fit flex flex-col h-full bg-amber-100 p-4'>
      <h1 className='text-2xl font-bold'>Cart</h1>
      <ul className='flex-grow flex flex-col gap-4'>
        {
          cartList.map((item)=>{
            return <li key={item.product.id}>
              <ProductInCart product={item}/>
            </li>
          })
        }
      </ul>
      <p>Total: ${totalPrice    } </p>
      <Button onClick={order} >Order</Button>
    </div>
  )
}

export default Cart
