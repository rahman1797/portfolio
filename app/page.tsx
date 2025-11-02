import Image from "next/image";
import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import { Skills } from "./components/skills";
import { Experience } from "./components/experience";
import { Education } from "./components/education";

export default function Home() {
  return (
  <>
    <Header /> 
    <Hero />
    <About />
    <Skills />
    <Experience />
    <Education />
    </>
  );
}
