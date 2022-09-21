import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { SideBar } from './components/Sidebar/Sidebar'
import { Workspace } from './components/Workspace/Workspace'
import './App.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="section_main">
        <SideBar />
        <Routes>
          <Route path="/" element={<Workspace />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
