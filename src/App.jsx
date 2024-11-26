import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from '@/layout/appLayout'
import {ThemeProvider} from '@/components/theme-provider'
import Home from '@/pages/home/home'

function App() {

  return (
    <>
    <ThemeProvider>
      <Router>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/projects" element={<h1>Projects 🚧</h1>} />
            <Route path="/projects/:id" element={<h1>Projects Details ⚒️</h1>} />
            <Route path="/contact" element={<h1>Contacts ⚒️</h1>} />
          </Routes>
        </AppLayout>
      </Router>
    </ThemeProvider>
    </>
  )
}

export default App