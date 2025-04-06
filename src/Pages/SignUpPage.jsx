import React, { useActionState, useEffect } from 'react'
import { Link, useFormAction, useNavigate } from 'react-router'
import Input from '../../lib/ui/Input'
import Button from '../../lib/ui/Button'
import FormButton from '../../components/FormButton'
import { SignUpAction } from '../../lib/services/auth'
import Header from '../../lib/ui/Header'
import Checkbox from '../../lib/ui/Checkbox'

const SignUpPage = () => {

  const navigate = useNavigate()

  const [state, formAction] = useActionState(SignUpAction, { succeess: false, message: null })

  useEffect(() => {

    if (state.success) {
      navigate('/')
    }


  }, [state])


  return (
    <div className='paper'>
      <Header >Sign Up</Header>
      <form className='flex flex-col w-full ' action={formAction}>
        <Input label="First Name" type="text" id="first_name" name="firstName" />
        <Input label="Last Name" type="text" id="last_name" name="lastName" />
        <Input label="Email" type="email" id="email" name="email" />

        <Input label="Password" type="password" id="password" name="password" />
        <Checkbox label='Allow Others to see my orders' type='checkbox' id={'showOrders'} name={'showOrders'} className={'flex-row-reverse justify-end gap-3'} />
        {
          state.message &&
          <p className='text-red-500 text-center'>{state.message.toString()}</p>
        }
        <FormButton>Sign Up</FormButton>
      </form>
      <p>Already have an account? <Link className='underline ' to={'/'}>Login</Link></p>
    </div>

  )
}

export default SignUpPage
