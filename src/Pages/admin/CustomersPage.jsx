import React from 'react'
import { useLoaderData } from 'react-router'
import Table from '../../../components/Table'

const CustomersPage = () => {
  const { users, orders } = useLoaderData()

  const columns = [
    {
      header: 'Full Name',
      accessField: 'firstName',
      cell: (row) => `${row.firstName} ${row.lastName}`

    },
    {
      header: 'Joined At',
      accessField: `createdAt`,
      cell: (row) => row.createdAt?.toDate().toLocaleDateString('he-il').replaceAll('.', '/')

    },
    {
      header: 'Prouducts Bought',
      accessField: `orders`,
      cell: (row) => {
        const cols = [{
          header: 'Product',
          accessField: 'name'
        }, {
          header: 'Qty',
          accessField: 'quantity'
        }, {
          header: 'Date',
          accessField: 'createdAt',
        }]

        const usersOrders = orders.filter(o => o.user.email === row.email).map((ord)=>{

          const values = Object.values(ord.productsInOrder)

          return values.map(p=>{ 
            return {
              name: p.product.title,
              quantity: p.quantity,
              createdAt: ord.orderDate?.toDate().toLocaleDateString('he-il').replaceAll('.', '/')
            }
          })

        }).flat()
        
        console.log('usersOrders', usersOrders)

        return <Table columns={cols} data={usersOrders} />
      }
    },

  ]

  return (
    <div className='flex flex-col gap-4 justify-center text-center px-6 paper mt-6'>
      <h2 className='text-3xl font-bold'>Customers</h2>
      <Table className='paper' columns={columns} data={users} />
    </div>
  )
}

export default CustomersPage