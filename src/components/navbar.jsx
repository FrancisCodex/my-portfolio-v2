import React from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeToggle } from '@/components/ui/theme-toggle'

const Navbar = () => {
  const navList = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Projects',
      link: '/projects'
    },
    {
      name: 'Contact',
      link: '/contact'
    }
  ]

  return (
    <div className='flex flex-row justify-between'>
      <div className='flex'>
        <ul className='flex flex-row items-center justify-center gap-2 text-md md:text-xl'>
          {navList.map((navItem, index) => {
            return (
              <li key={index} className='navLink'>
                <NavLink
                  to={navItem.link}
                  className={({ isActive }) =>
                    isActive ? 'underline decoration-black dark:underline dark:decoration-white' : 'hover:text-primary hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:rounded-lg p-1'
                  }
                  end
                >
                  {navItem.name}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </div>
      <div>
        <ThemeToggle />
      </div>
    </div>
  )
}

export default Navbar