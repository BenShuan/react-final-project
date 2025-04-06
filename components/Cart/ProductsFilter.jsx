import React from 'react'
import Input from '../../lib/ui/Input'
import Button from '../../lib/ui/Button'
import Select from '../../lib/ui/Select'
import { getCollection } from '../../lib/services/firestoreActions'

const ProductsFilter = ({ filter, setFilter,clearCart }) => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap w-full  content-baseline justify-center items-baseline gap-4 '>
      <span>Filter by: </span>
      <Select name={'category'} options={getCollection('categories')}  label={'Category: '} type={'text'} className={'flex-row gap-2'} value={filter.category || ""} onChange={setFilter} accessField={category => category.name} />
      <Input name={'price'} label={'Price: '} type={'range'} className={'flex-row gap-2'} value={filter.price || 0} onChange={setFilter} min={0} max={10000  } />
      <span>{filter.price || 0}$</span>
      <Input name={'title'} label={'Title: '} type={'text'} className={'flex-row gap-2'} value={filter.title || ""} onChange={setFilter} />
      <Button onClick={clearCart}>Clear</Button>
    </div>
  )
}

export default ProductsFilter