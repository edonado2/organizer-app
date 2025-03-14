import React from 'react'
import logo from '../assets/react.svg'
export const Card = () => {
  return (
    <>
    <div className='flex flex-col container m-5 p-12 w-50  text-gray-700 hover:bg-violet-100 cursor-pointer rounded-2xl bg-gray-50'>
      <div>
        <img  className="pb-3.5" src={logo} alt="sample"/>
      </div>
      <div className='w-fit'>
        <p className='font-normal'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis</p>
      </div>
    </div>
    </>
  )
}
