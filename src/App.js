import React from 'react'
import { Route, Routes } from 'react-router-dom'

import About from './components/about/About'
import Contact from './components/contact/Contact'
import Home from './components/home/Home'
import Layout from './components/layout/Layout'

import './App.scss'

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </React.Fragment>
  )
}

export default App
