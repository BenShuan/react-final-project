import React from 'react'
import { Outlet, useNavigate } from 'react-router'
import NavBar from '../../lib/ui/NavBar'
import {  customerRoutes } from '../../utils/routes'
import useAuth from '../../utils/useAuth'



const CustomerLayout = () => {

const auth = useAuth()
  
  return (
    <div className='flex-grow w-full flex flex-col'>
      {/* admin nav bar */}
      <div className='p-4 border-b-2 border-gray-400 sticky top-0 bg-white'>
        <NavBar routes={customerRoutes} />
      </div>

      {/* admin content */}
      <div className='bg-gray-400  flex-grow '>

        <Outlet />
      </div>

    </div>
  )
}

export default CustomerLayout