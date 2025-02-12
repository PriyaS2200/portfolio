import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Common/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { Skills } from './Pages/Skills'
import { Project } from './Pages/Project'
import { Contact } from './Pages/Contact'

function App() {

  return (
    <>
     <Navbar />
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/skills" element={<Skills />}/>
      <Route path="/project" element={<Project />}/>
      <Route path="/contact" element={<Contact />}/>
     </Routes>
    </>
  )
}

export default App
