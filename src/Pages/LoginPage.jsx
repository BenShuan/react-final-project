import React from 'react'
import {  Link, useNavigate } from 'react-router'
import Button from '../../lib/ui/Button'
import FormButton from '../../components/FormButton'
import Input from '../../lib/ui/Input'
import Header from '../../lib/ui/Header'
import Form from '../../components/Form'
import { LoginAction } from '../../lib/services/auth'

const LoginPage = () => {

  const navigate=useNavigate()

  const loginSuccess=(data)=>{
    navigate('/')
  }

  return (
    <div className='paper'>
      <Header>Next Generation E-Commerce</Header>
      <Form action={LoginAction} onSuccess={loginSuccess} >
        <Input label={"Email"} type="email" id="email" name="email" />
        <Input label={"Password"} type="password" id="password" name="password" />
        <FormButton>Login</FormButton>
      </Form>
      <p>New User? <Link className='underline ' to={'/signup'}>Register</Link></p>
    </div>

  )
}

export default LoginPage