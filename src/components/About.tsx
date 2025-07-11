import React from 'react'
import Title from './Title'
import Image from 'next/image'
import { FiraCode, Inter } from '@/fonts/fonts'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'

const programming_languages = [
	{ name: "React", link: "https://react.dev" },
	{ name: "Next.js", link: "https://nextjs.org" },
	{ name: "Python", link: "https://www.python.org" },
	{ name: "C", link: "https://en.cppreference.com/w/c" },
	{ name: "C++", link: "https://isocpp.org" },
	{ name: "tailwindcss", link: "https://tailwindcss.com" },
	{ name: "MongoDB", link: "https://www.mongodb.com" },
	{ name: "PostgreSQL", link: "https://www.postgresql.org" },
	{ name: "Javascript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
	{ name: "TypeScript", link: "https://www.typescriptlang.org" },
	{ name: "Node.js", link: "https://nodejs.org" }
]

const Programminglanguage = ({language, link}: {language: string, link:string})=>{
    return (
        <div className={`flex items-center text-sm ${FiraCode.className} w-1/2 sm:w-1/3 md:w-1/4 p-1`}>
            <ChevronRightIcon className='w-5 h-5 inline text-violet-800'/>
            <Link href={link} className='text-gray-500 hover:text-violet-800' target="_blank" rel="noopener noreferrer">
                {language}
            </Link>
        </div>
    )
}

function About() {
  return (
    <section className='p-6 max-w-[1000px] m-auto' id='about'>
        <div>
            <Title title='About Me' order={1}/>
        </div>
        <div className='flex flex-col mt-10 md:flex-row-reverse gap-20 items-center md:items-start'>
            <div className='image-box bg-transparent w-60 sm:w-80  md:w-100 '>
                <div className='relative rounded-lg w-full aspect-square overflow-hidden bg-[#ffffffbc] min-w-50 border border-violet-400'>
                    <Image
                    src={"/moi.png"}
                    alt='me'
                    fill
                    className='object-cover mix-blend-multiply'
                    />
                </div>
            </div>
            <div className='md:max-w-2/3 '>
                <p className={`${Inter.className} text-[#a4a4a4] text-sm md:text-base`}>
                I'm a developer with solid knowledge of front-end technologies and design 
                principles, but my main focus is on backend development and microservices
                 architecture. I enjoy building scalable systems, working with APIs, 
                 and structuring clean backend logic. Alongside my core backend work, 
                 I'm comfortable using tools like Docker and writing scripts in 
                 Python when needed. I approach every project with a practical
                  mindset and a strong drive to create efficient, reliable software.
                </p>
            </div>
        </div>
        <div className='mt-4'>
            <p className={` ${Inter.className} text-[#a4a4a4] text-sm md:text-base`}>some programming languages and technologies i recently used:</p>
            <div className='flex flex-wrap mt-4'>
                {programming_languages.map((lang, index)=> (
                    <Programminglanguage language={lang.name} link={lang.link} key={index}/>
                ))}
                
            </div>
        </div>
    </section>
  )
}

export default About