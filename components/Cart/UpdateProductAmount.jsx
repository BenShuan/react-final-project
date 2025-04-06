import React, { useContext, useMemo, useState } from 'react'
import Input from '../../lib/ui/Input'
import { CartContext } from '../../utils/CartContext';

const UpdateProductAmount = ({ product }) => {
  const { updateItemInCart ,countItemInCart,cartList} = useContext(CartContext);
  // const [amount, setAmount] = useState(0)

  const amount = useMemo(() => { return countItemInCart(product.id) ||0}, [cartList] ) 
  // const onChange = (diff) => {
  //   const newAmount = amount + diff
  //   setAmount(newAmount)
  //   updateItemInCart(product, newAmount)  

  // }


  

  return (
    <div className='flex gap-2'>

      <button className='rounded-full text-3xl content-center px-4 bg-gray-200 size-12' onClick={() => updateItemInCart(product,amount-1)}> - </button>
      <Input className={'*:rounded-full *:text-center *:size-12  '} min={0} type={"number"} onChange={(e) => updateItemInCart(product, +e.target.value)} value={amount} />
      <button className='rounded-full text-3xl content-center px-4 bg-gray-200 size-12 ' onClick={() => updateItemInCart(product,amount +1)}>+</button>
    </div>
  )
}

export default UpdateProductAmount  