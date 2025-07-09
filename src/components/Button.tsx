import { FiraCode } from '@/fonts/fonts'
import Link from 'next/link'
import React from 'react'

function VioletButton() {
  return (
    <div>
        <Link href={"/"} 
        className={`text-purple border py-2 px-4 text-center font-medium 
        rounded-sm violet-button transition-all 
        duration-300 ease-in-out ${FiraCode.className}
        shadow shadow-violet-800
        `}>Download my CV</Link>
    </div>
  )
}

export default VioletButton