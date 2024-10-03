import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Outlet } from 'react-router-dom'
import { Footer } from './components/Footer'
import { ToastContainer } from 'react-toastify'
function App() {

  return (
    <>
      <ToastContainer />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
