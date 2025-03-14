import React from 'react'
import { Button, Card } from '../components'
import { Navbar } from '../components/Navbar'
import chillAnimation from '../lotties/homepage-chill.json'
import Lottie from 'lottie-react'
import '../app.css'

export const DashboardPage = () => {
  return (
    <>
    <Navbar/>
    <h1 className='p-5 text-5xl font-bold font-mono m-4'>Welcome, Ernesto </h1>
    <div className='flex columns-3 flex-auto'>
      <div className='flex flex-row'>
      </div>
    </div>
      <h1 className='p-5 text-3xl font-bold'>Reminders </h1>
    <div className='flex columns-3 flex-wrap'>
      <div className='flex flex-row h-fit flex-wrap  ml-4 mr-10 p-8 rounded-xl'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
    <Lottie animationData={chillAnimation} loop={true} className='h-100'/>
    <div className='flex flex-wrap h-fit p-10 m-5 bg-amber-50 flex-auto rounded-b-4xl'>
      <h1 className='p-5 text-3xl font-bold'>My Tasks </h1>
      <Button>Add Task</Button>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
    <div className='flex h-fit flex-wrap'>
    <h1 className='p-5 text-3xl font-bold'>Widgets </h1>
      <Card/>
      <Card/>
    </div>
    </div>
    </>
  )
}
