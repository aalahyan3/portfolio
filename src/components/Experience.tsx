"use client"
import React, { useState } from 'react'
import Title from './Title'
import { FiraCode, Inter } from '@/fonts/fonts'
import { link } from 'fs'
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
	},
	{
		tabName: "frontend internship",
		company: "DeltaTech Solutions",
		role: "Frontend Intern",
		from: "Jun 2024",
		to: "Sep 2024",
		tasks: [
			'Built interactive UI components using React and TypeScript.',
			'Implemented responsive layouts with Tailwind CSS.',
			'Integrated REST APIs for real-time content updates.'
		]
	},
	{
		tabName: "freelance work",
		company: "Self-Employed",
		role: "Web Developer",
		from: "Jan 2024",
		to: "May 2024",
		tasks: [
			'Created landing pages and portfolio sites for local businesses.',
			'Customized WordPress themes and deployed on shared hosting.',
			'Worked with Figma designs and converted them into live websites.'
		]
	},
	{
		tabName: "backend bootcamp",
		company: "CodeCrafters Bootcamp",
		role: "Backend Trainee",
		from: "Sep 2023",
		to: "Dec 2023",
		tasks: [
			'Learned Node.js, Express, and PostgreSQL through guided projects.',
			'Built authentication systems and RESTful API endpoints.',
			'Deployed a simple blog app with Docker and tested with Postman.'
		]
	},
	{
		tabName: "university project",
		company: "ENSIAS",
		role: "Student Developer",
		from: "Mar 2023",
		to: "Jun 2023",
		tasks: [
			'Designed and implemented a library management system in Java.',
			'Used MySQL for database storage and Swing for GUI.',
			'Collaborated in a team of 4 using Git and Agile methods.'
		]
	},
	{
		tabName: "linux scripting course",
		company: "OpenEdu Online",
		role: "Learner",
		from: "Jan 2023",
		to: "Feb 2023",
		tasks: [
			'Wrote bash scripts to automate file organization and backups.',
			'Worked with crontab and system monitoring tools.',
			'Understood file permissions, piping, and redirection in depth.'
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
            <div className='flex gap-1 flex-col md:flex-row w-full over'>
                <div className='w-full text-nowrap md:w-1/3 lg:w-1/4 overflow-x-auto'>
                    <div className='flex md:flex-col min-w-fit'>
                        {exp.map(function (item, i) {
                            let cls = "";
                            if (curr == i) {
                                cls += 'md:border-l-2 max-md:border-b-2 border-[#a39cff6c] bg-[#6977bb46] text-purple'
                            }
                            else
                                cls += 'md:border-l-2 max-md:border-b-2 border-gray-800 text-purple'
                            cls += 'hover:bg-[#6977bb46] '
                            return (
                                <div key={i} className={cls}>
                                    <button className={`${FiraCode.className} font-light text-xs sm:text-sm text-start cursor-pointer py-2.5 px-1 max-md:px-4 ${curr == i ? 'text-purple`': 'text-gray-500'}`} onClick={function () { setCurr(i) }}>
                                        {item.tabName}
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className='content p-2 border'>
                   {
                    (function() {
                    let job = exp[curr];
                    return(
                        <>
                        <div className={` ${Inter.className} text-xl font-semibold `}><span>{job.role} </span> <span className='text-[#C1BDFF]'>@ {job.company}</span></div>
                        <div className={`text-xs ${FiraCode.className} text-[#9594A7]`}><span>{job.from} - {job.to}</span></div>
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