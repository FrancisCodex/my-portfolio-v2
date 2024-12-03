import React, { useEffect, useState } from 'react'
import AllProjects from '@/constants/fullprojects'
import { ExternalLink, Slash } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { useParams, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"

const ProjectsDetails = () => {
  const { id } = useParams()
  const project_id = parseInt(id)
  const project = AllProjects.find(p => p.id === project_id)
  const navigate = useNavigate()
  const [countdown, setCountdown] = useState(5)
  const project_title = project.title

  useEffect(() => {
    if (!project) {
      const timer = setInterval(() => {
        setCountdown(prevCountdown => prevCountdown - 1)
      }, 1000)

      const timeout = setTimeout(() => {
        navigate('/projects')
      }, 5000)

      return () => {
        clearInterval(timer)
        clearTimeout(timeout)
      }
    }
  }, [project, navigate])

  if (!project) {
    return (
      <div className='flex flex-col items-center gap-5'>
        <h1>Project Not Found</h1>
        <p>Redirecting to projects page in {countdown} seconds...</p>
        <Button onClick={() => navigate('/projects')}>Go to Projects</Button>
      </div>
    )
  }

  return (
    <div>
        <div className='pb-5'>
        <Breadcrumb>
        <BreadcrumbList>
            <BreadcrumbItem>
            <BreadcrumbLink href="/projects">projects</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
            <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
            <BreadcrumbLink href={'/projects/'+project_id}>{project_title}</BreadcrumbLink>
            </BreadcrumbItem>
        </BreadcrumbList>
        </Breadcrumb>
        </div>

        <div className='flex flex-col gap-5 text-justify'>
        <div>
            <div className='flex flex-row justify-between'> 
            <div className='flex flex-row gap-2'>
                <h1 className='text-xl md:text-4xl font-black'>
                {project.title}
                </h1>
                <img src={project.logo} alt={`${project.title} logo`} className='h-8 w-8 md:h-12 md:w-12' />
            </div>
            <div className='flex items-center gap-2'>
                <TooltipProvider>
                {project.project_url && (
                    <Tooltip>
                    <TooltipTrigger asChild>
                        <a href={project.project_url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink />
                        </a>
                    </TooltipTrigger>
                    <TooltipContent variant="outline">
                        View Website
                    </TooltipContent>
                    </Tooltip>
                )}
                {project.project_github && (
                    <Tooltip>
                    <TooltipTrigger asChild>
                        <a href={project.project_github} target="_blank" rel="noopener noreferrer" className="text-black dark:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                            <path d="M12 3C7.0275 3 3 7.13211 3 12.2284C3 16.3065 5.5785 19.7648 9.15375 20.9841C9.60375 21.0709 9.76875 20.7853 9.76875 20.5403C9.76875 20.3212 9.76125 19.7405 9.7575 18.9712C7.254 19.5277 6.726 17.7332 6.726 17.7332C6.3165 16.6681 5.72475 16.3832 5.72475 16.3832C4.9095 15.8111 5.78775 15.8229 5.78775 15.8229C6.6915 15.887 7.16625 16.7737 7.16625 16.7737C7.96875 18.1847 9.273 17.777 9.7875 17.5414C9.8685 16.9443 10.1003 16.5381 10.3575 16.3073C8.35875 16.0764 6.258 15.2829 6.258 11.7471C6.258 10.7399 6.60675 9.91659 7.18425 9.27095C7.083 9.03774 6.77925 8.0994 7.263 6.82846C7.263 6.82846 8.01675 6.58116 9.738 7.77462C10.458 7.56958 11.223 7.46785 11.988 7.46315C12.753 7.46785 13.518 7.56958 14.238 7.77462C15.948 6.58116 16.7017 6.82846 16.7017 6.82846C17.1855 8.0994 16.8818 9.03774 16.7917 9.27095C17.3655 9.91659 17.7142 10.7399 17.7142 11.7471C17.7142 15.2923 15.6105 16.0725 13.608 16.2995C13.923 16.5765 14.2155 17.1423 14.2155 18.0071C14.2155 19.242 14.2043 20.2344 14.2043 20.5341C14.2043 20.7759 14.3617 21.0647 14.823 20.9723C18.4237 19.7609 21 16.3002 21 12.2284C21 7.13211 16.9703 3 12 3Z" fill="currentColor" />
                        </svg>
                        </a>
                    </TooltipTrigger>
                    <TooltipContent variant="outline">
                        View Code
                    </TooltipContent>
                    </Tooltip>
                )}
                </TooltipProvider>
            </div>
            </div>
            <div>
            <p>
                Project Status: <Badge 
                variant={project.project_status === 'Completed' ? 'default' : 'outline'} 
                className={project.project_status !== 'Completed' ? 'border-black dark:border-white bg-accent' : 'dark:text-black'}
                >
                {project.project_status}
                </Badge>
            </p>
            </div>
            <div>
            <p>
                Blog Posted on: {project.blog.date_posted}
            </p>
            </div>
            <div>
              {/* Technologies Used */}
              <div className='flex flex-col gap-2'>
                <p>Technologies used:</p>
                <ul className='flex gap-2'>
                  {project.technologies_used.map(tech => (
                    <li key={tech.name} className='flex flex-col items-start'>
                      <Badge>{tech.name}</Badge>
                    </li>
                  ))}
                </ul>
            </div>
            </div>
        </div>
        <div>
            <Separator />
        </div>
        {/* The Blog */}
        <section className='flex flex-col gap-4'>
            {/* Introduction */}
            <div>
            <img src={project.imageHeader} alt={`${project.title} header`} className='w-full mb-4' />
            </div>
            {project.blog.introduction.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
            ))}
            {/* End of Introduction */}

            {/* Body of the blog */}
            {project.blog.body.map((section, index) => (
            <div key={index} className='flex flex-col gap-2 py-5'>
                <h2 className='text-lg md:text-xl'>{section.subtitle}</h2>
                {section.paragraphs.map((paragraph, pIndex) => (
                typeof paragraph === 'string' ? (
                    <p key={pIndex}>{paragraph}</p>
                ) : (
                    <ul key={pIndex} className='list-disc list-inside'>
                    {paragraph.ul.map((item, ulIndex) => (
                        <li key={ulIndex} className=''>{item}</li>
                    ))}
                    </ul>
                )
                ))}
                {section.imageBody && (
                <img src={section.imageBody} alt={`${section.subtitle} image`} className='w-full mt-4' />
                )}
            </div>
            ))}
            {/* End of Body */}

            {/* Conclusion */}
            <div className='flex flex-col gap-2'>
            <h2 className='text-xl'>{project.blog.conclusion.subtitle}</h2>
            {project.blog.conclusion.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
            </div>
            {/* End of Conclusion */}
        </section>
        </div>
    </div>

  )
}

export default ProjectsDetails