import About from '@/components/About';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import ContentType from '@/lib/types/ContentType';
import { Contact } from 'lucide-react';
import { notFound } from 'next/navigation';
import React from 'react'

async function getPageContent(language: string){
    switch (language)
    {
        case "en": return (await import("@/locals/EnglishContent")).default;
        case "fr": return (await import("@/locals/EnglishContent")).default;
    }
}

async function page({params}: {params: {language: string}}){
    const {language} =  await params;
    if (!["fr", "en"].includes(language))
    {
        notFound();
    }
    const pageContent: ContentType | undefined = await getPageContent(language);
  return (
    <div className="md:p-10 md:pb-6 max-md:py-10">
      <div className="h-screen flex flex-col">
        <Header data={pageContent?.header}/>
        <Hero />
      </div>
      <About/>
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default page