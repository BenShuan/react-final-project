import React, { useMemo } from 'react'
import Select from '../lib/ui/Select'
import { useState } from 'react'
import { getCollection } from '../lib/services/firestoreActions'
import { useLoaderData } from 'react-router'
import BarChart from './charts/BarChart'

const AdminBarChart = () => {

  const data = useLoaderData()

  const [email, setEmail] = useState("")

  const barChartData = useMemo(() => {

    const { orders, products } = data;

    const filterOrders = email ? orders.data.filter((val) => val.user.email === email) : orders.data

    const sumProduct = products.data.map(product => {
      const sum = filterOrders.reduce((acc, next) => {
        return next.productsInOrder[product.id]?.quantity || 0 + acc
      }, 0)


      return {
        label: product.title,
        sum
      }
    })
    return sumProduct
  }
    , [data,email])

  return (
    <div>
      <Select options={getCollection('users')}
      label={'Filter by customer'}
       accessField={c => c.firstName}
       name={'costumers'} placeholder={'All'} onSelect={(e,item)=>setEmail(item.email)} />
      <BarChart info={barChartData} />
    </div>
  )
}

export default AdminBarChart  