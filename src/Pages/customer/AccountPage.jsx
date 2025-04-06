import React from 'react'
import Form from '../../../components/Form'
import Input from '../../../lib/ui/Input'
import useAuth from '../../../utils/useAuth'
import { useLoaderData } from 'react-router'
import { Loader } from 'lucide-react'
import FormButton from '../../../components/FormButton'
import { updateUserAction } from '../../../lib/services/user'
import Checkbox from '../../../lib/ui/Checkbox'

const AccountPage = () => {

  const { currentUser } = useAuth()


  return (
    <Form className={'paper mt-6'} action={updateUserAction } >
      {
        currentUser ?
        <>
          <Input label={'First Name'} defaultValue={currentUser.firstName} name={'firstName'} />
          <Input label={'Last Name'} defaultValue={currentUser.lastName} name={'lastName'} />
          <Input label={'User Name'} defaultValue={currentUser.userName} name={'userName'} />
          <Input label={'Password'} defaultValue={currentUser.password} name={'password'} />
          <Input defaultValue={currentUser.id} name={'id'} className={'hidden'} />
          <Input defaultValue={currentUser.email} name={'email'} className={'hidden'} />
          <Checkbox label={'Allow others see myorders'} type={'checkbox'} id={'showOrders'} name={'showOrders'} defaultValue={currentUser.showOrders} />
          <FormButton>Save</FormButton>
        </>
        :
        <Loader/>
          }
    </Form>
  )
}

export default AccountPage