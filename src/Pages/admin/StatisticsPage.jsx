import React, { useMemo } from 'react'
import { useLoaderData } from 'react-router'
import PieChart from '../../../components/charts/PieChart'
import BarChart from '../../../components/charts/BarChart'
import AdminBarChart from '../../../components/AdminBarChart'



const StatisticsPage = () => {
  const data = useLoaderData()


  const pieChartData = useMemo(() => {

    const { orders, products } = data;
    const sumProduct = products.data.map(product => {
      const sum = orders.data.reduce((acc, next) => {
        return next.productsInOrder[product.id]?.quantity || 0 + acc
      }, 0)


      return {
        label: product.title,
        sum
      }
    })
    return sumProduct
  }
  , [data])


  

  return (
    <div className='p-4 flex flex-wrap justify-center gap-4'>
      <div className='max-w-96 border w-full p-2'>
        <h1 className='text-3xl font-bold mb-4'> Total Sold Products</h1>
        <PieChart info={pieChartData} />
      </div>
      <div className='max-w-96 border w-full p-2'>
        <h1 className='text-3xl font-bold mb-4'> Products Quantity Per Costumer</h1>
        <AdminBarChart/>
      </div>

    </div>
  )
}

export default StatisticsPage