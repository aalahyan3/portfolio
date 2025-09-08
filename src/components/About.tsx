import React from 'react'
import Title from './Title'
import Image from 'next/image'
import { FiraCode, Inter } from '@/fonts/fonts'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'
import { AboutSection } from '@/lib/types/ContentType'

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
    { name: "Node.js", link: "https://nodejs.org" },
    { name: "Java", link: "https://www.java.com/en/" },
    { name: "Spring Boot", link: "https://spring.io/" }
]

const Programminglanguage = ({ language, link }: { language: string, link: string }) => {
    return (
        <div className={`flex items-center text-sm ${FiraCode.className} w-1/2 sm:w-1/3 md:w-1/4 p-1`}>
            <ChevronRightIcon className='w-5 h-5 inline text-violet-800' />
            <Link href={link} className='text-gray-500 hover:text-violet-800' target="_blank" rel="noopener noreferrer">
                {language}
            </Link>
        </div>
    )
}

function About({data}: {data: AboutSection}) {
    return (
        <section className='p-6 mt-10 max-w-[1000px] m-auto' id='about'>
            <div>
                <Title title={data.title} order={1} />
            </div>
            <div className='flex flex-col mt-10 md:flex-row-reverse gap-20 items-center md:items-start'>
                <div className='image-box bg-transparent w-60 sm:w-80 md:w-100'>
                    <div className="relative rounded-3xl w-full aspect-square overflow-hidden bg-gray-900">
                        <Image
                            src="/aalahyan.jpeg"
                            alt="me"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#5E52FF]/30 via-transparent to-blue-400/20"></div>
                        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                </div>
                <div className='md:max-w-2/3 '>
                    <p className={`${Inter.className} text-[#a4a4a4] text-sm md:text-base`}>
                        {data.about}
                    </p>
                </div>
            </div>
            <div className='mt-4'>
                <p className={` ${Inter.className} text-[#a4a4a4] text-sm md:text-base`}>{data.some_programming_languages}:</p>
                <div className='flex flex-wrap mt-4'>
                    {programming_languages.map((lang, index) => (
                        <Programminglanguage language={lang.name} link={lang.link} key={index} />
                    ))}

                </div>
            </div>
        </section>
    )
}

export default About