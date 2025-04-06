import React, { useEffect, useState } from 'react'
import Form from '../Form'
import { addProductAction, getOrdersOfProductAction } from '../../lib/services/admin'
import Input from '../../lib/ui/Input'
import FormButton from '../FormButton'
import TextBox from '../../lib/ui/TextBox'
import Select from '../../lib/ui/Select'
import { getCollection } from '../../lib/services/firestoreActions'
import { useRevalidator } from 'react-router'
import Table from '../Table'

const ProductForm = ({ product }) => {
  const columns = [
    {
      header: 'name',
      accessField: 'user.name',
      cell: (row) => `${row.user.firstName} ${row.user.lastName}`
    },
    {
      header: 'qty',
      accessField: `productsInOrder.${product.id}.quantity`
    },
    {
      header: 'date',
      accessField: `orderDate`,
      cell: (row) => row.orderDate.toDate().toLocaleDateString('he-il').replaceAll('.', '/')
    },

  ]

  const revalidetor = useRevalidator()
  const [orders, setOrders] = useState([])

  useEffect(() => {

    getOrdersOfProductAction(product.id).then(orders => {
      console.log('orders.data', orders.data)
      setOrders(orders.data)
    })

  }, [])



  return (
    <div className="paper">
      <Form action={addProductAction} onSuccess={revalidetor.revalidate} >
        <div className={'grid grid-cols-2 gap-4 grid-flow-row'}>
          <Input id={'id'} name={"id"} className={'hidden'} defaultValue={product.id} type={'hidden'} />
          <Input id={'title'} name={"title"} defaultValue={product.title} label={'Title'} />
          <Input id={'price'} name={"price"} label={'Price'} defaultValue={product.price} />
          <Select options={getCollection('categories')} id={'categoryId'} name={"category"} label={'Category'}
            placeholder={'Please select a category'} defaultValue={product.category} accessField={category => category.name} />
          <Input id={'imageUrl'} name={"imageUrl"} label={'Link to pic'} defaultValue={product.imageUrl} type={'url'} />
          <TextBox id={'description'} name={"description"} label={'Description'} defaultValue={product.description} />
          <div className='max-h-40 '>
            <label htmlFor="orders">Bought By</label>
            <div className='max-h-40 overflow-y-scroll'>

              <Table columns={columns} data={orders} />
            </div>
          </div>

        </div>
        <FormButton className={'self-start'}>Save</FormButton>
      </Form>
    </div>
  )
}

export default ProductForm