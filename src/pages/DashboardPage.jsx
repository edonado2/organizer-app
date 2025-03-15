import React from 'react'
import { Button, Card } from '../components'
import { Navbar } from '../components/Navbar'
import chillAnimation from '../lotties/homepage-chill.json'
import Lottie from 'lottie-react'
import '../app.css'
import { reminders, tasks } from '../backend/data'
import emptyBox from '../assets/empty-box.png'

export const DashboardPage = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1 className='p-5 text-7xl font-bold font-mono m-4'>Welcome, Ernesto </h1>
        <div className='flex columns-3 flex-auto'>
          <div className='flex flex-row'>
          </div>
        </div>
        <h1 className='p-5 text-3xl font-bold'>Reminders </h1>
        <div className='flex columns-3 flex-wrap'>
          <div className='flex flex-row h-fit flex-wrap  ml-4 mr-10 p-8 rounded-full'>
            {reminders.length >= 1 ? reminders.map(reminder =>(
              <Card key={reminder.id} reminder={reminder.remindText}/>
            ))
            : (
              <>
              <p>Seems there is not much happening right now... Go and take a walk </p>
              <img src={emptyBox} alt='empty-box'></img>
              </>
            )
            }
          </div>
          <div className='justify-self-center p-5'>
            <Lottie animationData={chillAnimation} loop={false} className='h-100 w-fit m-10' />
          </div>
          <div className='flex flex-wrap h-fit p-10 m-5 flex-auto rounded-b-lg'>
            {
              tasks.length >= 1 ? (
                <h1 className='p-5 text-3xl font-bold text-black'>
                  Pick up from where you left,
                  {tasks.map(task =>(
                    <Card key={task.id} task={task.task}/>
                  ))}
                </h1>) : (
                <h1 className='p-5 text-3xl font-bold text-black'>Seems you are catch up! </h1>
              )
            }
            <Button>Add Task</Button>
          </div>
          <div className='flex h-fit flex-wrap'>
            <h1 className='p-5 text-3xl font-bold'>Widgets </h1>
            <Card />
            <Card />
          </div>
        </div>
      </div>

    </>
  )
}
