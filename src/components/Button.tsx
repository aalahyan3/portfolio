import { FiraCode } from '@/fonts/fonts'
import Link from 'next/link'
import React from 'react'

function VioletButton({title, Icon}: {title:string, Icon:React.ElementType}) {
  return (
    <div>
        <Link href={"/"} 
        className={`text-purple border py-2 px-4 text-center font-medium 
        rounded-sm violet-button transition-all 
        duration-300 ease-in-out ${FiraCode.className}
        shadow shadow-violet-800 flex items-center w-fit gap-4
        `}>
          <Icon className="h-6 w-6 font-light"/>
           <span>{title}</span>
           </Link>
    </div>
  )
}

export default VioletButton