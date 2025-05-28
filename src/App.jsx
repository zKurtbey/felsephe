import { useState } from 'react'
import './App.css'
import Header from './index-components/header/Header'
import Main from './index-components/main/Main'
import { Route, Routes } from 'react-router-dom'
import Index from './index.jsx'
import Etik from './etik.jsx'

function App() {

  return (
      
      <Routes>

        <Route path="/" element={<Index />} />
        <Route path="/etik" element={<Etik />} />

      </Routes>
  
  )
}

export default App
