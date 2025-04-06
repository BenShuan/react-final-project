import React, { useActionState, useEffect, useRef } from 'react'
import { useRevalidator } from 'react-router'

const Form = ({ action, children, className, onSuccess, ...props }) => {
  const formRef= useRef(null)
  const [state, formActions] = useActionState(action, { success: false, message: '' })
  const reviled = useRevalidator()
  useEffect(() => {

    if (state?.success) {
      reviled.revalidate()
      formRef.current.reset()
      if (onSuccess) {
        onSuccess(state.message)
      }
    }

  }, [state])



  return (
    <form action={formActions} ref={formRef} className={'flex flex-col w-full ' + className} {...props}>
      {children}

      {
        !state?.success && state?.message && <p>
          {state?.message}
        </p>
      }
    </form>
  )
}

export default Form