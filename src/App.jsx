import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { LandingPage, Login } from './pages'

function App() {

  return (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<LandingPage />} />
    </Routes>
  )
}

export default App
