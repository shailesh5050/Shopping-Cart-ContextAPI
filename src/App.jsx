import { useState } from 'react'
import './App.css'
import Home from './Home'
import {BrowserRouter as Router , Routes,Route}  from 'react-router-dom'
function App() {
  
  return (
    <Router>
      <Routes>
      <Route path="/" Component={Home} />
      </Routes>
     
    </Router>
  )
}

export default App
