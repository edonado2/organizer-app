import React from 'react'

export const Navbar = () => {
  return (
    <>
    <div className='  bg-sky-800 text-blue-50 font-bold flex-auto'>
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
