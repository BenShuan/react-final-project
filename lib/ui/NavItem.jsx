import React from 'react'
import { Link, matchPath, useLocation } from 'react-router'

const NavItem = ({route,...props}) => {

    const path = useLocation().pathname
    const isActive = matchPath(path, route.path)

  return (
    <li className={`${isActive ? 'underline' : ''} text-xl `} {...props}>
      <Link to={route.path}>{route.id}</Link>
    </li>
  )
}

export default NavItem  