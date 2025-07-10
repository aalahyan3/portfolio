import React from 'react'
import { Inter, FiraCode } from '@/fonts/fonts'
function Title({title, order}: {title:string, order:number}) {
  return (
    <div className='flex items-center gap-4 sm:text-lg lg:text-xl'>
        <div>
        <span className={`${FiraCode.className} text-purple`}>0{order}.</span>
        <span className={`${Inter.className} text-[#DADADA]`}> {title}</span>
        </div>
        <div className='h-px w-1/3 bg-gray-500 max-w-[200px]'>
        </div>
    </div>
  )
}

export default Title