import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './components/home/Home'
import Layout from './components/layout/Layout'

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </React.Fragment>
  )
}

export default App
