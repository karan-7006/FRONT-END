import React from 'react'
import "./index.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Manage from './Component/Manage'
import Add from './Component/Add'
import Update from './Component/Update'

function App() {
  return (
    <BrowserRouter>
    <div>

    <Routes>
      <Route path='/' element={<Manage />} />
      <Route path='Add' element={<Add />} />
      <Route path='/edit/:id' element={<Update />} />
    </Routes>

    </div>
    </BrowserRouter>
  )
}

export default App
