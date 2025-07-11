import Link from 'next/link'
import React from 'react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

function Footer() {
  return (
    <div className='mt-6'>
        <div className='flex items-center justify-center'>
             <Link href="github.com/aalahyan3" className='p-4 text-violet-300 hover:text-violet-600  text-xl'><FiGithub /></Link> 
             <Link href="https://www.linkedin.com/in/a-alahyane/" className='p-4 text-violet-300 hover:text-violet-600 text-xl'><FiLinkedin /></Link> 
        </div>
        <div className='mt-6'>
            <p className='font-mono text-xs text-gray-300 text-center'>© 2025 aalahyan3. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer