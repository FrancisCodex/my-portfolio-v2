import React from 'react'
import { Link } from 'react-router-dom'
import AllProjects from '@/constants/fullprojects'

const Projects = () => {
  return (
    <div className='flex flex-col gap-4'>
        <h1 className='text-3xl'>My projects</h1>
        <p className=''>
          Here are some of the projects I have worked on:
        </p>
        <ul className='grid grid-rows-1 md:grid-cols-3 gap-5'>
          {AllProjects.map(project => (
            <li key={project.id} className='p-4 rounded-lg hover:-translate-y-3 transition border-2'>
              <Link to={`/projects/${project.id}`}>
                <div className='flex flex-col'>
                  <img src={project.logo} alt={`${project.title} logo`} height={30} width={30}  className='mb-4 grayscale' />
                  <h3 className='text-xl mb-2'>{project.title}</h3>
                  <p className=''>{project.description}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Projects