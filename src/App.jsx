import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from '@/layout/appLayout'
import {ThemeProvider} from '@/components/theme-provider'
import Home from '@/pages/home/home'
import Projects from '@/pages/projects/projects';
import ProjectsDetails from '@/pages/projects/projects_slug';
import Contact from '@/pages/contact/contact';

function App() {

  return (
    <>
    <ThemeProvider>
      <Router>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/projects/:id" element={<ProjectsDetails/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </AppLayout>
      </Router>
    </ThemeProvider>
    </>
  )
}

export default App