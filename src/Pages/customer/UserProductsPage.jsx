import React, { useState } from 'react'
import { CartContext, CartProvider } from '../../../utils/CartContext'
import ProductsList from '../../../components/Cart/ProductsList'
import { useNavigation } from 'react-router'
import { ArrowLeft, ArrowRight, Loader } from 'lucide-react'
import Cart from '../../../components/Cart/Cart'
import { cn } from '../../../utils/tailwind'
import ProductsFilter from '../../../components/Cart/ProductsFilter'

const UserProductsPage = () => {
  const navigation = useNavigation()
  const [openCart, setOpenCart] = useState(true)
  return (
    <CartProvider>

      <div className='flex justify-between h-[calc(100vh-6rem)]'>
        <div className={cn('relative h-full mr-12')}>
          {/* cart */}
          {openCart && <Cart />}
          <button className='absolute top-1/2 -right-10 -translate-y-1/2 bg-amber-100 h-20 p-2 rounded-r-lg ' onClick={() => setOpenCart(prev => !prev)}>
            {openCart ? <ArrowLeft /> : <ArrowRight />}
          </button>
        </div>
          <ProductsList />
        
      </div>
    </CartProvider>
  )
}

export default UserProductsPage 