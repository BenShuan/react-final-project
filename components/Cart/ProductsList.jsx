import React, { use, useMemo, useState } from 'react'
import { useLoaderData } from 'react-router'
import ProductItem from './ProductItem'
import ProductsFilter from './ProductsFilter'

const ProductsList = () => {

  const productsList = useLoaderData()
  const [filter, setFilter] = useState({})


  // console.log('[Fetch] productsList', productsList)


  const filterdProducts = useMemo(() => {

    console.log('filter', filter)
    let filteredList = productsList

    if (Object.keys(filter).length === 0) return productsList;

    if (filter.title) {
      filteredList = filteredList.filter(item => item.title.toLowerCase().includes(filter.title.toLowerCase()))
      console.log('filterdProducts', filteredList)
    }

    if (filter.price) {
      filteredList = filteredList.filter(item => +item.price <= filter.price)
      console.log('filterdProducts', filteredList)

    }

    if (filter.category) {
      filteredList = filteredList.filter(item => item.category.toLowerCase().includes(filter.category.toLowerCase()))
      console.log('filterdProducts', filteredList)

    }

    return filteredList;
    }, [filter, productsList])

  const filterCart = (event) => {

    const field = event.target.name

    const value = event.target.value

    if (!value) {
      return setFilter(prev => ({
        ...prev,
        [field]: null
      }))

    }

    setFilter(prev => ({
      ...prev,
      [field]: value
    }))


  }

  const clearCart= () => {
    setFilter({})
  }
  

  return (
    <div className='p-4 pl-12  overflow-scroll ' >
      {/* products with filter */}
      <ProductsFilter filter={filter} setFilter={filterCart} clearCart={clearCart} />
      <div>
        <ul className='flex flex-col gap-4 justify-center p-4'>
          {
            filterdProducts.map(product => <ProductItem key={product.id} product={product} />)
          }
        </ul>
      </div>
    </div>
  )
}

export default ProductsList