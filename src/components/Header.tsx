"use client";
import Link from "next/link";
import { FiraCode, Quantico } from "../fonts/fonts";
import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { HeaderSection, HeroSection } from "@/lib/types/ContentType";

function Header({data}: {data: HeaderSection | undefined}) {
  const [currSection, setCurrSection] = useState("default");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      const block = id === "contact" ? "end" : "start";
      element.scrollIntoView({ behavior: "smooth", block });
    }
  }

  function handleClick(section: string) {
    setMenuOpen(false);
    setCurrSection(section);
    scrollToSection(section);
  }

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#5E52FF]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-20 -right-20 w-60 h-60 bg-[#5E52FF]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <header className={`fixed right-0 top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/30 backdrop-blur-lg border-b border-[#5E52FF]/20 shadow-xl' 
          : 'bg-black/20 backdrop-blur-md border-b border-[#5E52FF]/10'
      }`}>
        <div className="mx-auto px-6 py-4">
          <div className="flex justify-between items-center relative max-md:block">
            <div className={`${Quantico.className} max-md:m-auto text-center group`}>
              <Link
                href="/"
                className="relative text-3xl font-bold text-[#5E52FF] hover:text-[#5E52FF]/80 transition-all duration-700 transform hover:scale-110"
              >
                aalahyan3
                <div className="absolute -inset-2 bg-[#5E52FF]/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#5E52FF] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </Link>
            </div>
            <nav className={`${FiraCode.className} hidden md:block`}>
              <ol className="flex space-x-8">
                {[
                  { id: 'about', num: '01', label: data.about},
                  { id: 'exp', num: '02', label: data.experience },
                  { id: 'projects', num: '03', label: data.projects },
                  { id: 'contact', num: '04', label: data.contact }
                ].map(({ id, num, label }) => (
                  <li key={id}>
                    <button
                      className={`group relative px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                        currSection === id 
                          ? 'text-[#5E52FF] bg-[#5E52FF]/20 shadow-lg shadow-[#5E52FF]/20' 
                          : 'text-[#C1BDFF] hover:text-[#5E52FF] hover:bg-[#5E52FF]/10'
                      }`}
                      onClick={() => handleClick(id)}
                    >
                      <span className="text-[#5E52FF] text-sm font-bold">{num}. </span>
                      <span className="relative z-10">{label}</span>
                      <div className="absolute inset-0 bg-[#5E52FF]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute -inset-0.5 bg-[#5E52FF]/20 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></div>
                    </button>
                  </li>
                ))}
              </ol>
            </nav>

            <button
              className="md:hidden fixed top-3 right-6 z-50 p-3 rounded-full bg-[#5E52FF] hover:bg-[#5E52FF]/80 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-[#5E52FF]/50"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className="relative w-6 h-6">
                <Bars3Icon 
                  className={`absolute inset-0 w-6 h-6 text-white transition-all duration-300 ${
                    menuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                  }`} 
                />
                <XMarkIcon 
                  className={`absolute inset-0 w-6 h-6 text-white transition-all duration-300 ${
                    menuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>
        <div className={`md:hidden fixed inset-0 z-40 transition-all duration-500 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          ></div>
          <div className={`absolute right-0 top-0 h-screen w-80 max-w-[85vw] bg-[#141235] border-l border-[#5E52FF]/30 shadow-2xl shadow-[#5E52FF]/20 transform transition-all duration-500 flex flex-col overflow-hidden ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <div className="flex-1 flex flex-col justify-center px-8">
              <nav className={`${FiraCode.className}`}>
                <ol className="space-y-8">
                  {[
                    { id: 'about', num: '01', label: 'About' },
                    { id: 'exp', num: '02', label: 'Experience' },
                    { id: 'projects', num: '03', label: 'Projects' },
                    { id: 'contact', num: '04', label: 'Contact' }
                  ].map(({ id, num, label }, index) => (
                    <li key={id} className={`transform transition-all duration-500 ${
                      menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                    }`} style={{ transitionDelay: `${index * 100}ms` }}>
                      <button
                        className={`group relative w-full text-left px-6 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                          currSection === id 
                            ? 'text-[#5E52FF] bg-[#5E52FF]/20 shadow-lg shadow-[#5E52FF]/20' 
                            : 'text-[#C1BDFF] hover:text-[#5E52FF] hover:bg-[#5E52FF]/10'
                        }`}
                        onClick={() => handleClick(id)}
                      >
                        <span className="text-[#5E52FF] text-lg font-bold mr-3">{num}.</span>
                        <span className="text-xl">{label}</span>
                        <div className="absolute inset-0 bg-[#5E52FF]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-[#5E52FF] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150"></div>
                      </button>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
            
            <div className="px-8 pb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-[#5E52FF]/50 to-transparent"></div>
              <div className="mt-4 text-center">
                <p className={`${FiraCode.className} text-[#5E52FF]/60 text-sm`}>
                  Let's build something amazing
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;