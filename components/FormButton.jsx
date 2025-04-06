import React from 'react'
import Button from '../lib/ui/Button'
import { LoaderIcon } from 'lucide-react'
import { useFormStatus } from 'react-dom'

const FormButton = ({ children, ...props }) => {

  const status = useFormStatus()


  return (
    <Button disabled={status.pending} {...props}>

      {status.pending ? <span>
        loading... <LoaderIcon className='animate-spin inline' /> 
      </span>:   <p>{children}</p> }
    </Button>
  )
}

export default FormButton