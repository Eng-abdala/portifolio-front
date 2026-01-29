import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Herro from './components/Herro'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import TopProjects from './components/Topprojects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Feedback from './components/Feedback'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'

function MainPage() {
  return (
    <>
      <div id='hero'><Herro /></div>
      <div id='about'><About /></div>
      <div id='skills'><Skills /></div>
      <div id='services'><Services /></div>
      <div id='top-projects'><TopProjects /></div>
      <div id='contact'><Contact /></div>
      <div id='footer'><Footer /></div>
    </>
  )
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<Login />} />
        <Route
          path='/feedback'
          element={
            <ProtectedRoute>
              <Feedback />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  )
}

export default App