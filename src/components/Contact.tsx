import { Inter } from '@/fonts/fonts'
import React from 'react'
import Title from './Title'
import VioletButton from './Button'
import { Mail } from 'lucide-react'

function Contact() {
  return (
    <section id="contact" className={`mt-20 p-6 max-w-[1000px] m-auto ${Inter.className}`}>
      <div>
        <Title title="Let's Connect" order={4}/>
      </div>
      <div className='mt-10 flex items-center flex-col'>
        <h2 className='text-4xl font-bold text-[#C1C1C1]'>Get In Touch</h2>
        <p className='mt-2 text-gray-500 text-sm text-center'>i always check my inbox, if you have any questions or just wanna say hello go ahead and send me an email</p>
        <div className='mt-10'>
            <VioletButton link="mailto:me.a.alahyane@gmail.com?subject=FROME%20PORTFOLIO: " Icon={Mail} title='Say Hi!'/>
          </div>
      </div>
    </section>

  )
}

export default Contact

  