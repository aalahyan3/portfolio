import About from "@/components/About";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Image from "next/image";
import Contact from "@/components/Contact"
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="md:p-10 md:pb-6 max-md:py-10">
      <div className="h-screen flex flex-col">
        <Header />
        <Hero />
      </div>
      <About/>
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
