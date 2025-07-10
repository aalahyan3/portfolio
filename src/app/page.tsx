import About from "@/components/About";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <div className="md:p-10 max-md:py-10">
      <div className="h-screen flex flex-col">
        <Header />
        <Hero />
      </div>
      <About/>
      <Experience />
      <Projects />
    </div>
  );
}
