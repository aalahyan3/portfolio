import About from '@/components/About';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import ContentType from '@/lib/types/ContentType';
import Contact from '@/components/Contact';
import { notFound } from 'next/navigation';
import React from 'react'

async function getPageContent(language: string){
    switch (language)
    {
        case "en": return (await import("@/locals/EnglishContent")).default;
        case "fr": return (await import("@/locals/FrenchContent")).default;
        default:
            throw new Error("Unsupported language");
    }
}

async function Page({params}: {params: Promise<{language: string}>}){
    const {language} = await params;
    
    if (!["fr", "en"].includes(language))
    {
        notFound();
    }
    
    const pageContent: ContentType = await getPageContent(language);
    
    return (
        <div className="md:p-10 md:pb-6 max-md:py-10">
            <div className="h-screen flex flex-col">
                <Header data={pageContent.header}/>
                <Hero data={pageContent.hero}/>
            </div>
            <About data={pageContent.about}/>
            <Experience data={pageContent.experiences}/>
            <Projects data={pageContent.projects}/>
            <Contact data={pageContent.contact}/>
            <Footer />
        </div>
    )
}

export default Page