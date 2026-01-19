"use client";
import useLenis from "@/components/utils/hooks/useLenis";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Hero from "@/components/sections/Hero";
import Poster from "@/components/sections/Poster";
import Philosophy from "@/components/sections/Philosophy";
import Orgin from "@/components/sections/Orgin";
import Product from "@/components/sections/Product";

export default function Home() {
  useLenis();
  return (
    <div className="lg:w-full sm:w-svw overflow-hidden relative ">
      <header>
        <Header />
      </header>
      <main className="relative bg-white">
        <Hero />
        <Poster />
        <Philosophy />
        <Orgin />
        <Product />
      </main>
      <div className="h-screen w-full bg-transparent" />
      <Footer />
    </div>
  );
}
