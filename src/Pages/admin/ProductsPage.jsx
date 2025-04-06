import React, { useState } from 'react'
import { useLoaderData } from 'react-router'
import ProductForm from '../../../components/admin/ProductForm'
import Button from '../../../lib/ui/Button'

const ProductsPage = () => {

  const data = useLoaderData()
  const [products, setProducts] = useState(data)

  const addProduct = () => {

    setProducts((prev) => {
      return [...prev, {}]
    })

  }


  return (
    <div className='flex flex-col items-center justify-center gap-6 p-4'> 
      {products.map((product) => (<ProductForm product={product} key={product.id}/>))}
      <Button onClick={addProduct}>Add product</Button>
    </div>
  )
}

export default ProductsPage
