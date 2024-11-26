import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-5 flex justify-center items-center">
        <div className=''>
            <p>© {currentYear} - Francis Adrian Altesing.</p>
        </div>
    </footer>
  )
}

export default Footer