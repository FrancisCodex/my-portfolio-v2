import React from 'react'
import { Separator } from '@/components/ui/separator'
import { ExternalLink, Mail } from 'lucide-react'

const Contact = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='text-4xl'>
        <h1>Contact</h1>
      </div>
      <div>
        <Separator />
      </div>
      <div className='flex flex-col gap-2'>
        <div>
          <p>
            If you would like to contact me, you can reach me using the following methods.
          </p>
        </div>
        <div className='grid grid-rows-1 md:grid-cols-2 gap-10 py-5'>
          <a href='mailto:francisadrian.altesing@gmail.com' target="_blank" rel="noopener noreferrer" className='flex justify-between gap-2'>
            <div>
              <h2 className='text-xl'>Email:</h2>
              <p>francisadrian.altesing@gmail.com</p>
            </div>
            <Mail className='h-5 w-5' />
          </a>
          <a href='https://www.linkedin.com/in/francisaltesing/' target="_blank" rel="noopener noreferrer" className='flex justify-between gap-2'>
            <div>
              <h2 className='text-xl'>LinkedIn:</h2>
              <p>@francisaltesing</p>
            </div>
            <ExternalLink className='h-5 w-5' />
          </a>
          <a href='https://github.com/FrancisCodex' target="_blank" rel="noopener noreferrer" className='flex justify-between gap-2'>
            <div>
              <h2 className='text-xl'>GitHub:</h2>
              <p>@FrancisCodex</p>
            </div>
            <ExternalLink className='h-5 w-5' />
          </a>
          <a href='https://www.facebook.com/francisaltesing72/' target="_blank" rel="noopener noreferrer" className='flex justify-between gap-2'>
            <div>
              <h2 className='text-xl'>Facebook:</h2>
              <p>@francisaltesing72</p>
            </div>
            <ExternalLink className='h-5 w-5' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact