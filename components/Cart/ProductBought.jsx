import React, { use, useEffect, useState } from 'react'
import { getProductBoughtCount } from '../../lib/services/cart'

const ProductBought = ({ productId }) => {
  const [count, setCount] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const bought = await getProductBoughtCount(productId)
      setCount(bought)
    }
    fetchData();
  }, [])


  return (
    <div>
      <p>Bought {count}</p>
    </div>
  )
}

export default ProductBought  