import React from 'react'
import { Button } from './Button'

export const Navbar = () => {
  return (
    <>
    <div className='  text-white flex-auto outline font-extrabold bg-[#F0A202]'>
    <ul className='flex justify-end'>
        <li className='p-10'>Home</li>
        <li className='p-10'>Tasks</li>
        <li className='p-10'>Reminders</li>
        <li className='p-10'>Budget</li>
    </ul>
    </div>
    </>
  )
}
