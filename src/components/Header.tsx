"use client"
import Link from 'next/link'
import { FiraCode, Quantico } from '../fonts/fonts'
import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';



function Header() {
  const [currSection, setcurrSection] = useState('default');
  const [menuOpen, setMenuOpen] = useState(false);
  function switchStates(curr:string){
    setMenuOpen(!menuOpen);
    setcurrSection(curr);
  }
  return (
    <div className='flex justify-between items-center relative max-md:block z-10'>
        <div className={`${Quantico.className} max-md:m-auto text-center`}>
          <Link href={"/"} className='text-2xl hover:text-3xl ease duration-700 aalahyan relative'>aalahyan3</Link>
        </div>
        <div className={`${FiraCode.className} ${menuOpen ? 'right-0' :'-right-full'} transition-all 
        duration-700 ease-in-out  max-md:absolute max-md:p-1 top-30 max-md:border
         border-gray-700 max-md:w-1/2 max-md:h-screen max-md:bg-[#141235] max-md:text-sm`}>
          <ol className='flex justify-between max-md:flex-col max-md:gap-10'>
            <li className=''>
            <a href='#about' className={`block p-4 ${currSection == 'about' ? 'text-purple' : 'text-[#C1BDFF]'}`} onClick={()=>switchStates('about')}>
            <span className='text-purple'>01. </span>About</a>
            </li>
            <li className=''>
            <a href='#exp' className={`block p-4 ${currSection == 'exp' ? 'text-purple' : 'text-[#C1BDFF]'}`} onClick={()=>switchStates('exp')}>
            <span className='text-purple'>02. </span>Experience</a>
            </li>
            <li className=''>
            <a href='#projects' className={`block p-4 ${currSection == 'projects' ? 'text-purple' : 'text-[#C1BDFF]'}`} onClick={()=>switchStates('projects')}>
            <span className='text-purple'>03. </span>Projects</a>
            </li>
            <li className=''>
            <a href='#contact' className={`block p-4 ${currSection == 'contact' ? 'text-purple' : 'text-[#C1BDFF]'}`} onClick={()=>switchStates('contact')}>
            <span className='text-purple'>04. </span>Contact</a>
            </li>
          </ol>
        </div>

          <button className={`absolute top-10 right-4 hidden max-md:block`} onClick={()=>{setMenuOpen(!menuOpen)}}>
            {menuOpen ? <XMarkIcon className='h-8 w-8 text-purple border'/>: <Bars3Icon className='w-8 h-8 text-purple border'></Bars3Icon>}
          </button>
    </div>
  )
}

export default Header