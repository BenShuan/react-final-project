import React from 'react'
import NavItem from './NavItem'

const NavBar = ({routes}) => {
  return (
    <nav className='sticky w-full '>
      <ul className='flex justify-center items-center gap-6 h-16'>
        {routes.map(route => {
          return (
            <NavItem key={route.id} route={route}/>
          )
        })}
      </ul>
    </nav>
  )
}

export default NavBar