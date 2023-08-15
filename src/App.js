import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Posts from './components/Posts/Posts'
import Sidebar from './components/Sidebar/Sidebar'
import Course from './components/Courses/Course'
import Notification from './components/Notifications/Notification'
import CreateCourse from './components/CreateCourse/CreateCourse'


export default function App() {
  return (
    <BrowserRouter>
      <Header />
        <Sidebar />
        <Routes>
          <Route index path='/' element={<Posts />} />
          <Route  path='/courses' element={<Course/>} />
          <Route  path='/create-course' element={<CreateCourse/>} />
          <Route  path='/notification' element={<Notification/>} />
        </Routes>
    </BrowserRouter>
  )
}
