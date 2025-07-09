import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="md:p-10 max-md:py-10">
      <Header />
      <Hero />
    </div>
  );
}
