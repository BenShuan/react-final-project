import React from 'react'
import { useLoaderData } from 'react-router'
import { addOrdersToFirebase } from '../../../utils/seed'
import Table from '../../../components/Table'

const MyOrdersPage = () => {

  const data = useLoaderData()

  console.log("[Fetch] User Orders:", data)

  const productsOrdered = data.map((order) => {

    const productsInOrder = Object.values(order.productsInOrder)

    return productsInOrder.map((product,i) => {
      return {
        id: product.product.id+Math.random(),
        title: product.product.title,
        qty: product.quantity,
        totle: product.totalPrice,
        date: order.orderDate?.toDate().toLocaleDateString('he-il').replaceAll('.', '/')
      }

    })
  }).flat()

  const columns = [
    {
      header: 'Title',
      accessField: 'title',
    },
    {
      header: 'Qty',
      accessField: `qty`,

    },
    {
      header: 'Total',
      accessField: `orders`,
      cell: (row) => `$${row.totle}`
    },
    {
      header: 'Date',
      accessField: `date`,
    },
  ]


  console.log('Products', productsOrdered)

  return (
    <div className='p-4'>
       <Table columns={columns} data={productsOrdered} />

    </div>
  )
}

export default MyOrdersPage
