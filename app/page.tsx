/* ===============================
        IMPORTS
=============================== */

import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects/Projects";
import Research from "@/components/Research/Research";  
import Contact from "@/components/Contact/Contact";

/* ===============================
        PAGE
=============================== */

export default function Home() {

  return (

    <>

      <Navbar />

      <main id="home">

        <Hero />

        <About />

        <Skills />

        <Projects />

        <Research/>

        <Contact/>

      </main>

    </>

  );

}