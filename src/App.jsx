import { useState } from 'react'
import './App.css'
import { Outlet, } from 'react-router'

function App() {

  return (
    <div className='container'>           
      <Outlet/>
    </div>
  )
}

export default App
