import { ThemeToggle } from '@/components/ui/theme-toggle'
import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import myImage from "@/assets/images/altesing_profile.jpg"
import FeaturedProjects from '@/constants/featureProjects'
import TechnologiesUsed from '@/constants/technologies'
import { Link } from 'react-router-dom'


const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString('en-US', { timeZone: 'Asia/Manila' }));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleString('en-US', { timeZone: 'Asia/Manila' }));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <section className='flex flex-col-reverse items-center md:grid md:grid-cols-3 w-full gap-3 md:gap-0'>
        <div className='flex flex-col gap-2 text-wrap col-span-2'>
          <h1 className='text-3xl'>
            Hi, I'm Francis Adrian Altesing 👋
          </h1>
          <p className=''>
            I am a Full Stack Developer with a passion for creating web applications. I have experience in developing web applications using React, Node.js, Express, and PostgreSQL. I am also familiar with Django, Laravel, and NextJS. I am currently learning Ruby on Rails.
          </p>
          <p className=''>
            {currentTime} (Philippine Time)
          </p>
          <div className="flex items-center gap-2">
              <a href="https://github.com/FrancisCodex" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <path d="M12 3C7.0275 3 3 7.13211 3 12.2284C3 16.3065 5.5785 19.7648 9.15375 20.9841C9.60375 21.0709 9.76875 20.7853 9.76875 20.5403C9.76875 20.3212 9.76125 19.7405 9.7575 18.9712C7.254 19.5277 6.726 17.7332 6.726 17.7332C6.3165 16.6681 5.72475 16.3832 5.72475 16.3832C4.9095 15.8111 5.78775 15.8229 5.78775 15.8229C6.6915 15.887 7.16625 16.7737 7.16625 16.7737C7.96875 18.1847 9.273 17.777 9.7875 17.5414C9.8685 16.9443 10.1003 16.5381 10.3575 16.3073C8.35875 16.0764 6.258 15.2829 6.258 11.7471C6.258 10.7399 6.60675 9.91659 7.18425 9.27095C7.083 9.03774 6.77925 8.0994 7.263 6.82846C7.263 6.82846 8.01675 6.58116 9.738 7.77462C10.458 7.56958 11.223 7.46785 11.988 7.46315C12.753 7.46785 13.518 7.56958 14.238 7.77462C15.948 6.58116 16.7017 6.82846 16.7017 6.82846C17.1855 8.0994 16.8818 9.03774 16.7917 9.27095C17.3655 9.91659 17.7142 10.7399 17.7142 11.7471C17.7142 15.2923 15.6105 16.0725 13.608 16.2995C13.923 16.5765 14.2155 17.1423 14.2155 18.0071C14.2155 19.242 14.2043 20.2344 14.2043 20.5341C14.2043 20.7759 14.3617 21.0647 14.823 20.9723C18.4237 19.7609 21 16.3002 21 12.2284C21 7.13211 16.9703 3 12 3Z" fill="currentColor" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/francisaltesing/" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
                  <path d="M16.2 0H1.8C0.81 0 0 0.81 0 1.8V16.2C0 17.19 0.81 18 1.8 18H16.2C17.19 18 18 17.19 18 16.2V1.8C18 0.81 17.19 0 16.2 0ZM5.4 15.3H2.7V7.2H5.4V15.3ZM4.05 5.67C3.15 5.67 2.43 4.95 2.43 4.05C2.43 3.15 3.15 2.43 4.05 2.43C4.95 2.43 5.67 3.15 5.67 4.05C5.67 4.95 4.95 5.67 4.05 5.67ZM15.3 15.3H12.6V10.53C12.6 9.81004 11.97 9.18 11.25 9.18C10.53 9.18 9.9 9.81004 9.9 10.53V15.3H7.2V7.2H9.9V8.28C10.35 7.56 11.34 7.02 12.15 7.02C13.86 7.02 15.3 8.46 15.3 10.17V15.3Z" fill="currentColor" />
                </svg>
              </a>
              {/* Button for Resume */}
              <a href="https://drive.google.com/file/d/16TdFJiHOheneN4YoA7IauDJtTYFdwjEo/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Button className='bg-foreground hover:bg-foreground'>My Resume</Button>
              </a>
          </div>
        </div>
        <div className='md:justify-self-end'>
          <img src={myImage} alt="profile" className='w-[150px] h-[150px] rounded-full ' />
        </div>
      </section>
      <div className='py-10'>
        <Separator />
      </div>

      <section className='flex flex-col gap-5 pb-10'>
        <h2 className='text-2xl'>Skills</h2>
        <p className=''>
          Here are some of the technologies I have worked with:
        </p>
        <ul className='grid grid-cols-2 md:grid-cols-5 gap-2 '>
          {TechnologiesUsed.map(tech => (
            <li key={tech.name} className='flex flex-col items-start font-medium'>
              <span>{tech.name}</span>
            </li>
          ))}
        </ul>
      </section>
      {/* Featured Projects */}
      <section className='flex flex-col gap-5 pb-10'>
        <h2 className='text-2xl'>Featured Projects</h2>
        <p className=''>
          Here are some of the projects I have worked on:
        </p>
        <ul className='grid grid-rows-1 md:grid-cols-3 gap-5'>
          {FeaturedProjects.map(project => (
            <li key={project.id} className='p-4 rounded-lg hover:-translate-y-3 transition'>
              <Link to={`/projects/${project.id}`}>
                <div className='flex flex-col'>
                  <img src={project.image} alt={`${project.title} logo`} height={30} width={30}  className='mb-4 grayscale' />
                  <h3 className='text-xl mb-2'>{project.title}</h3>
                  <p className=''>{project.description}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      {/* Education */}
      <section className='flex flex-col gap-5 pb-10'>
        <h2 className='text-2xl '>Education</h2>
        <div>
          <h3 className='font-medium'>2020 - Present</h3>
          <p>Caraga State University - Main</p>
          <p>Bachelor of Science in Information Technology</p>
        </div>
      </section>
    </div>
  )
}

export default Home