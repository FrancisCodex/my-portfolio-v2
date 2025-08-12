import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-5 flex justify-center items-center">
        <div className=''>
            <p>© Francis Adrian Altesing - {currentYear} </p>
        </div>
    </footer>
  )
}

export default Footer