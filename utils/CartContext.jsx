import React, { createContext, useMemo, useState } from 'react'
import { AddDocument, getDocument } from '../lib/services/firestoreActions';

export const CartContext = createContext(null)

function CartProvider({ children }) {

  const [cart, setCart] = useState({});


  const cartList = useMemo(() => {
    return Object.values(cart)
  }, [cart])

  const totalPrice = useMemo(() => cartList.reduce((acc, item) => acc + item.totalPrice, 0), [cartList]);

  const countItemInCart = (productId) => { return cartList.find(item => item.product.id === productId)?.quantity }

  const deleteItemFromCart = (productId) => {
    const newCart = { ...cart }
    delete newCart[productId]
    setCart(newCart)
  }

  const updateItemInCart = (product, amount) => {
    console.log('[data]', amount)
    if (amount === 0) {
      return deleteItemFromCart(product.id)

    }
    setCart(prev => ({
      ...prev,
      [product.id]: {
        quantity: amount,
        product,
        totalPrice: product.price * amount
      }

    }))


  }

  const order = async () => {

    const user = (await getDocument('users/' + localStorage.getItem('token'))).data
    console.log('[Fetch] User:', user)
    const newOrder = {
      orderDate: new Date(),
      productsInOrder: cart,
      user
    }

    const response = await AddDocument('orders', newOrder)

    if (response.success) {
      alert(response.message)
      setCart({})
    }
    else {
      alert(response.message)
    }

  }



  return (
    <CartContext value={{ deleteItemFromCart, updateItemInCart, order, countItemInCart, cart, cartList, totalPrice }}>
      {children}
    </CartContext>
  )
}

export { CartProvider } 