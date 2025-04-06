import React, { useEffect, useState } from 'react'
import Header from '../../../lib/ui/Header'
import { useLoaderData } from 'react-router'
import CategoryItem from '../../../components/admin/CategoryItem'
import CategoryForm from '../../../components/admin/CategoryForm'

const CategoriesPage = () => {

  const categories = useLoaderData()

console.log('categories', categories)
  return (
    <section className='flex flex-col justify-around gap-4 p-4'>

      <Header >
        Categories
      </Header>

      <div className='paper  '>
      {
        categories.length===0?<Header>No Categories</Header>:
        categories.map(category => {
          return <CategoryItem key={category.id} category={category}/>
        })
      }

        <CategoryForm />

      </div>


    </section>
  )
}

export default CategoriesPage  