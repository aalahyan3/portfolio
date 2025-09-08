import React from 'react'
import Title from './Title'
import { FolderIcon, FolderOpenIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import { FiraCode , Inter} from '@/fonts/fonts'
import Link from 'next/link'
import { Github, GithubIcon, Tags } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
import { link } from 'fs'
import { ProjectsSection } from '@/lib/types/ContentType'

// type Project = {name: string, description:string, tags: string, repoLink: string, liveLink: string | null}

// const projects = [
//     {
//         name: "minishell",
//         description: "A custom Unix shell in C with support for pipes, redirections, and built-in commands. Handled parsing, process management, and signals to replicate basic bash behavior.",
//         tags: 'UNIX . C language . Bash',
//         repoLink : "https://github.com/aalahyan3/msh",
//         liveLink: null
//     },
//     {
//         name: "moovie-hub",
//         description: "A React frontend app that uses the TMDB API to show movie details and lets users watch trailers. It fetches data like titles, images, and ratings, and displays them in a clean, easy-to-use interface.",
//         tags:"React . Front-end . API",
//         repoLink: "https://github.com/aalahyan3/moovie_hub",
//         liveLink: "https://moovie-hub.vercel.app/"
//     },
//     {
//         name: "gtkm",
//         description: "basic Full stack training, A user sign in and see other users data based on his permessions",
//         tags:"React . Express . MongoDb",
//         repoLink: "https://github.com/aalahyan3/gtkm",
//         liveLink: null
//     },
//     {
//         name: "stockify",
//         description: "backend application designed to manage and track stock items for businesses or personal use. It allows admins to perform CRUD (Create, Read, Update, Delete) operations on stock data and provides secure authentication for users.",
//         tags:"Express . PostgreSQL . JWT",
//         repoLink: "https://github.com/aalahyan3/gtkm",
//         liveLink: null
//     },
//     {
//         name: "multi",
//         description: "full-stack web application for a chatting platform.it is built with next.js and provides secure authentication using google OAuth and real-time chatting using web sockets",
//         tags:"OAuth . Sockets . next.js",
//         repoLink: "https://github.com/aalahyan3/multi",
//         liveLink: "https://multichat.up.railway.app"
//     }

// ]

const ProjectCard = ({project}: {project: ProjectsSection}) =>
    {
        return(
            <div className='w-70 h-70 bg-[#191736] rounded-xl p-4 hover:scale-105 transition-all duration-500 ease-in-out shadow-sm shadow-violet-900'>
                <div className='flex items-center'>
                    <div className='w-1/4'>
                        <Image src={"/folderIcon.svg"} height={30} width={30} alt='icon'/>
                    </div>
                    <div className={`w-3/4 text-[10px] text-end text-gray-400 ${FiraCode.className}`}>
                        <span>{project.tags}</span>
                    </div>
                </div>
                <div className='min-h-1/2 max-h-1/2 mt-10 project-area overflow-auto'>
                    <div className='text-2xl font-bold'>
                        <h1>{project.name}</h1>
                    </div>
                    <div className='mt-4 text-sm text-gray-300'>
                        <p>{project.description}</p>
                    </div>
                </div>
                <div className='w-full h-px bg-gray-500 mt-6 opacity-40'></div>
                <div className='flex justify-end gap-4 mt-3'>
                    <Link href={project.repoLink}><FaGithub className='text-2xl text-gray-400'/></Link>
                    {project.liveLink && <Link href={project.liveLink}><FiExternalLink className='text-2xl text-gray-400'/></Link>}
                </div>
            </div>
        )
    }

function Projects({data}: {data: {title:string, projs: ProjectsSection[]}}) {
  return (
    <section id="projects" className={`mt-20 p-6 max-w-[1000px] m-auto ${Inter.className}`}>
        <div>
            <Title title={data.title} order={3}/>
        </div>
        <div className='flex justify-center w-full'>

            <div className='inline-flex flex-wrap mt-10 gap-x-5 gap-y-5 justify-start max-md:justify-center'>
                {
                    data.projs.map((project, index) =>
                    {
                        return (
                            <ProjectCard project={project} key={index}/>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Projects