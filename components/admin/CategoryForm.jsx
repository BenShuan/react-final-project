import React, { useActionState, useEffect } from 'react'
import { useRevalidator } from 'react-router'
import Input from '../../lib/ui/Input'
import FormButton from '../FormButton'
import { addCategoryAction } from '../../lib/services/admin'
import Form from '../Form'

const CategoryForm = () => {

  return (
    <Form className={'flex-row gap-4 w-full'} action={addCategoryAction}  >
      <Input className={'m-0 flex-grow'} id={'name'} name={'name'} placeholder='Add new category' />
      <FormButton>Add</FormButton>
    </Form>
  )
}

export default CategoryForm