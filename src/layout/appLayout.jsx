import React from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/Footer'

const AppLayout = ({ children }) => {
  return (
    <div>
      <main className='flex items-center justify-between w-full p-8 flex-col'> 
        <div className='w-full max-w-4xl py-5'>
          <Navbar />
          <div className='py-10 h-full'>
          {children}
          </div>
          <Footer />
        </div>        
      </main>
      {/* Add Footer component here */}
    </div>
  )
}

export default AppLayout