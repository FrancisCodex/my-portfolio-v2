import React from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/Footer'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { useLocation } from 'react-router-dom'
import './AppLayout.css' // Import the CSS file for transitions

const AppLayout = ({ children }) => {
  const location = useLocation()

  return (
    <div>
          <main className='flex items-center justify-between w-full flex-col min-h-screen'>
            <div className='w-full max-w-4xl p-8'>
              <Navbar />
              <TransitionGroup>
              <CSSTransition
                key={location.key}
                classNames="fade"
                timeout={300}
              >
              <div className='py-10 h-full'>
                {children}
              </div>
              </CSSTransition>
              </TransitionGroup>
            </div>
            <div className='py-5'>
            <Footer />
            </div>

          </main>
    </div>
  )
}

export default AppLayout