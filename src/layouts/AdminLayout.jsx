import React from 'react'
import { Outlet } from 'react-router'
import NavBar from '../../lib/ui/NavBar'
import { adminRoutes } from '../../utils/routes'
import useAuth from '../../utils/useAuth'



const AdminLayout = () => {

const auth = useAuth()

  return (
    <div className='flex-grow w-full flex flex-col'>
      {/* admin nav bar */}
      <div className='p-4 border-b-2 border-gray-400 sticky z-10 top-0 bg-white'>
        <h2 className='text-3xl font-bold text-center'>Hello Admin</h2>
        <NavBar routes={adminRoutes} />
      </div>

      {/* admin content */}
      <div className='bg-gray-400  flex-grow '>

        <Outlet />
      </div>

    </div>
  )
}

export default AdminLayout