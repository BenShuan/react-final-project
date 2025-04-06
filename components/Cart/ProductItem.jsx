import React from 'react'
import ProductBought from './ProductBought'
import UpdateProductAmount from './UpdateProductAmount';


const ProductItem = ({ product }) => {
  

  return (
    <div className='paper flex-row rounded-4xl '>
      <div className='w-2/5 p-4'>
        <h3 className='text-3xl font-bold mb-4'>{product.title}</h3>
        <p className='mb-2 text-lg'>{product.description}</p>
        <p className='mb-2 text-lg'>Price: ${product.price}</p>
        <p className='mb-2 text-lg'>In Stock: {product.inStock}</p>
        {/* add to cart */}
        <UpdateProductAmount product={product} />
      </div>
      <div className='w-2/5'>
        <img className=' w-3/4  aspect-square m-auto ' src={product.imageUrl || "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"} alt={product.title} />
      </div>
      <div className='w-1/5 text-center'>
        {/* product in stock */}
        <ProductBought productId={product.id} />
      </div>
    </div>
  )
}

export default ProductItem