"use client"
import React, { useState } from 'react'
import Title from './Title'
import { FiraCode, Inter } from '@/fonts/fonts'
import { link } from 'fs'
import { CheckIcon } from '@heroicons/react/16/solid'
const exp = [
	{
		tabName: "common core",
		company: "1337 Coding School",
        link: "1337.ma/fr",
		role: "Junior developper",
		from: "Oct 2024",
		to: "Present",
		tasks: [
			'Completed over 15+ real-world projects covering low-level programming in C, memory management, and data structures.',
			'Developed full-stack applications and implemented Docker containers, microservices, and RESTful APIs in later stages.',
			'Gained strong problem-solving skills, autonomy, and the ability to learn and adapt quickly in unfamiliar technical domains.'
		]
	}
]


function Experience() {
    const [curr, setCurr] = useState(0);
  return (
    <section className='p-6  mt-20 max-w-[1000px] m-auto' id='exp'>
        <div>
                <Title title='My Experience' order={2}/>
        </div>
        <div className='mt-10'>
            <div className='flex gap-1 flex-col md:flex-row w-full'>
                <div className='md:w-3/12 md:max-w-1/3 lg:max-w-1/4 overflow-x-auto'>
                    <div className='flex md:flex-col min-w-fit'>
                        {exp.map(function (item, i) {
                            let cls = "";
                            if (curr == i) {
                                cls += 'md:border-l-2 max-md:border-b-2 border-[#a39cff6c] bg-[#6977bb46] text-purple'
                            }
                            else
                                cls += 'md:border-l-2 max-md:border-b-2 border-gray-800 text-purple'
                            cls += 'hover:bg-[#6977bb46]'
                            return (
                                <div key={i} className={cls}>
                                    <button className={`${FiraCode.className} max-md:text-nowrap w-full font-light block text-xs sm:text-sm text-start cursor-pointer py-2.5 px-1 max-md:px-4 ${curr == i ? 'text-purple`': 'text-gray-500'}`} onClick={function () { setCurr(i) }}>
                                        {item.tabName}
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className='content p-6 bg-[#c1bdff1c] md:w-9/12'>
                   {
                    (function() {
                    let job = exp[curr];
                    return(
                        <>
                        <div className={` ${Inter.className} text-2xl font-semibold`}><span>{job.role} </span> <span className='text-[#C1BDFF]'>@ {job.company}</span></div>
                        <div className={`text-xs mt-2 ${FiraCode.className} text-[#9594A7]`}><span>{job.from} - {job.to}</span></div>
						<div className='mt-10 '>
								{
									job.tasks.map((task, index)=>
									{
										return (
											<div key={index} className={`${Inter.className} flex items-start gap-1 mt-4 text-sm`}>
												<CheckIcon className='w-6 h-6 text-purple'/> <p>{task}</p>
											</div>
										)
									})
								}
						</div>
                        </>
                        )
                    })()}

                </div>
        </div>
        </div>
    </section>
  )
}

export default Experience