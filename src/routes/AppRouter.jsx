import React from 'react'
import { Routes, Route } from 'react-router'
import { DashboardPage } from '../pages'

export const AppRouter = () => {
  return (
   <Routes>
        <Route path='dashboard' element={<DashboardPage/>}></Route>
   </Routes>
  )
}
