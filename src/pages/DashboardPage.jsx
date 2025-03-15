import React from 'react'
import { Button, Card, Sidebar } from '../components'
import { Navbar } from '../components/Navbar'
import chillAnimation from '../lotties/homepage-chill.json'
import Lottie from 'lottie-react'
import '../app.css'
import { reminders, tasks } from '../backend/data'
import emptyBox from '../assets/empty-box.png'

export const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header with subtle gradient */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg shadow-md mb-8 p-6 md:p-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono text-white">
            Welcome, Ernesto
          </h1>
          <p className="text-slate-300 mt-2">Here's your personal dashboard</p>
        </div>
        {/* Main content in a 2-column layout on desktop */}
        <div className="flex flex-col lg:flex-row gap-6">
        <Sidebar/>
          {/* Left column for reminders and animation */}
          <div className="lg:w-7/12 space-y-6">
            {/* Reminders Section */}
            <div className="bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden">
              <div className="border-b border-slate-100 bg-white px-6 py-4 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-slate-800">Reminders</h2>
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 text-sm rounded-md">
                  + New Reminder
                </Button>
              </div>
              
              <div className="p-6">
                {reminders.length >= 1 ? (
                  <div className="grid grid-cols-1 gap-4">
                    {reminders.map(reminder => (
                      <Card 
                        key={reminder.id} 
                        reminder={reminder.remindText}
                        className="border-l-4 border-emerald-500 bg-white shadow-sm hover:shadow-md transition-shadow"
                      />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-10 text-center">
                    <img src={emptyBox} alt="empty-box" className="max-h-32 mb-4 opacity-60" />
                    <p className="text-lg text-slate-600">
                      No reminders at the moment. Time to relax!
                    </p>
                    <p className="text-sm text-slate-400 mt-2">
                      Or add a new reminder to stay organized
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            {/* Animation Card */}
            <div className="bg-white rounded-lg shadow-sm border border-slate-100 p-6 flex flex-col items-center">
              <h2 className="text-xl font-bold text-slate-800 mb-4 self-start">Daily Inspiration</h2>
              <Lottie animationData={chillAnimation} loop={false} className="h-56 max-w-full" />
              <p className="text-slate-600 text-center mt-4">
                Take a moment to breathe and recharge your energy
              </p>
            </div>
          </div>
          
          {/* Right column for tasks and widgets */}
          <div className="lg:w-5/12 space-y-6">
            {/* Tasks Section */}
            <div className="bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden">
              <div className="border-b border-slate-100 bg-white px-6 py-4 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-slate-800">Tasks</h2>
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 text-sm rounded-md">
                  + Add Task
                </Button>
              </div>
              
              <div className="p-6">
                {tasks.length >= 1 ? (
                  <div className="space-y-4">
                    {tasks.map((task, index) => (
                      <Card 
                        key={task.id} 
                        task={task.task}
                        className={`border-l-4 ${
                          index % 3 === 0 ? 'border-emerald-500' : 
                          index % 3 === 1 ? 'border-sky-500' : 'border-slate-500'
                        } bg-white shadow-sm hover:shadow-md transition-shadow`}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-50 rounded-full mb-4">
                      <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800">All caught up!</h3>
                    <p className="text-slate-500 mt-2">You've completed all your tasks</p>
                  </div>
                )}
              </div>
            </div>
            
            {/* Widgets Section */}
            <div className="bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden">
              <div className="border-b border-slate-100 bg-white px-6 py-4">
                <h2 className="text-2xl font-bold text-slate-800">Widgets</h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-white border border-slate-200 text-slate-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-center">
                      <div className="flex justify-center mb-2">
                        <svg className="w-6 h-6 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-lg text-slate-700">Weather</h3>
                      <p className="text-3xl mt-2 font-light">72°</p>
                      <p className="text-sm text-slate-500">Sunny</p>
                    </div>
                  </Card>
                  <Card className="bg-white border border-slate-200 text-slate-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-center">
                      <div className="flex justify-center mb-2">
                        <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-lg text-slate-700">Calendar</h3>
                      <p className="text-3xl mt-2 font-light">15</p>
                      <p className="text-sm text-slate-500">March</p>
                    </div>
                  </Card>
                  <Card className="bg-white border border-slate-200 text-slate-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-center">
                      <div className="flex justify-center mb-2">
                        <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-lg text-slate-700">Notes</h3>
                      <p className="text-3xl mt-2 font-light">5</p>
                      <p className="text-sm text-slate-500">New</p>
                    </div>
                  </Card>
                  <Card className="bg-white border border-slate-200 text-slate-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-center">
                      <div className="flex justify-center mb-2">
                        <svg className="w-6 h-6 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-lg text-slate-700">Fitness</h3>
                      <p className="text-3xl mt-2 font-light">7k</p>
                      <p className="text-sm text-slate-500">Steps</p>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}