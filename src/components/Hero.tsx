import React from 'react'
import {Inter, FiraCode, Quantico} from '@/fonts/fonts'
import VioletButton from './Button'
import { ArrowDownTrayIcon } from '@heroicons/react/16/solid'
function Hero() {
  return (
    <div className='mt-50 max-sm:mt-20  max-sm:p-5 lg:pl-50 sm:p-10 menu relative max-w-[1000px]'>
        <div>
            <div className={`${FiraCode.className} text-sm text-[#9893E2] max-sm:text-xs`}><span>Hi, my name is</span></div>
        </div>
        <div className={`${Quantico.className} text-[#C1BFE2] mt-1 font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl`}>
            <h1>Ayoub Alahyane.</h1>
        </div>
        <div className={`${Inter.className} mt-3 `}>
            <h2 className='text-6xl text-[#bab9ce6b] font-semibold max-lg:text-5xl max-sm:text-2xl max-md:text-4xl'>I build things for the web</h2>
            <p className={`text-[#C2C2C2] md:w-1/2 mt-2 text-sm max-w-[800px] max-sm:text-xs`}>
            I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at 1337
            </p>
        </div>
        <div className='mt-10'>
            <VioletButton title='Download my CV' Icon={ArrowDownTrayIcon} link='/'/>
        </div>
        <div className='hero_light w-150 h-150 rounded-full bg-violet-600 top-0 absolute right-0 blur-[120px] opacity-15 -z-10'></div>
    </div>
  )
}

export default Hero