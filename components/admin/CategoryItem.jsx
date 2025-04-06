import React, { useState } from 'react'
import Header from '../../lib/ui/Header'
import Button from '../../lib/ui/Button'
import Form from '../Form'
import { deleteDocument, setDocument } from '../../lib/services/firestoreActions'
import { useRevalidator } from 'react-router'
import Input from '../../lib/ui/Input'
import { addCategoryAction } from '../../lib/services/admin'
import FormButton from '../FormButton'

const CategoryItem = ({ category }) => {

  const [isUpdating, setIsUpdating] = useState(false)
  const [updateType, setUpdateType] = useState('button')

  const revalidator = useRevalidator()

  const deleteCategory = async () => {

    const deleteCategorty = await deleteDocument('categories', category.id)

    if (deleteCategorty.success) {
      revalidator.revalidate()
    }

  }

  const successUpdate = () => {
    revalidator.revalidate()
    setIsUpdating(false)
  }

  return (

    <Form className={'paper flex-row justify-between '} action={!isUpdating ? () => setIsUpdating(true) : addCategoryAction} onSuccess={successUpdate} >

      {isUpdating ? <>
        <Input id={'name'} defaultValue={category.name} name={'name'} />
        <Input id={'id'} type={'hidden'} value={category.id} name={'id'} />
      </> :
        <Header>{category.name}</Header>

      }
      <div className='flex gap-4'>

        <FormButton   >Update</FormButton>
        <FormButton formAction={deleteCategory}>Remove</FormButton>
      </div>
    </Form>
  )
}

export default CategoryItem