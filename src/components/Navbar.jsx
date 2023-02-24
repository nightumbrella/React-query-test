import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='pb-20 pt-10'>
        <ul className='flex justify-between'>
            <li className='bg-emerald-500'><NavLink to="/">Home</NavLink></li>
            <li className='bg-emerald-500'><NavLink to="/data">Data</NavLink></li>
            <li className='bg-emerald-500'><NavLink to="/data-ex">Data EX</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar