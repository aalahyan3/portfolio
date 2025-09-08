import { Inter } from '@/fonts/fonts'
import React from 'react'
import Title from './Title'
import VioletButton from './Button'
import { Mail } from 'lucide-react'
import { ContactSection } from '@/lib/types/ContentType'

function Contact({data}: {data: ContactSection}) {
  return (
    <section id="contact" className={`mt-20 p-6 max-w-[1000px] m-auto ${Inter.className}`}>
      <div>
        <Title title={data.title} order={4}/>
      </div>
      <div className='mt-10 flex items-center flex-col'>
        <h2 className='text-4xl font-bold text-[#C1C1C1]'>{data.get_in_touch}</h2>
        <p className='mt-2 text-gray-500 text-sm text-center'>{data.motivate}</p>
        <div className='mt-10'>
            <VioletButton link="mailto:me.a.alahyane@gmail.com?subject=FROME%20PORTFOLIO: " Icon={Mail} title={data.say_hello}/>
          </div>
      </div>
    </section>

  )
}

export default Contact

  