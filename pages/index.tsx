import Head from "next/head";
import dynamic from "next/dynamic";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Feedbacks from "@/components/Feedbacks";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Tech from "@/components/Tech";
import Works from "@/components/Works";

const StarsCanvas = dynamic(() => import("@/components/canvas/StarsCanvas"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Sebas López | Portfolio</title>
        <meta
          name="description"
          content="Hi! This is my portfolio website, my name is Sebastián López, I am a Full-Stack Developer and I hope you enjoy all the projects I have done."
        />
      </Head>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </>
  );
}
