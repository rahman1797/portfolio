import Image from "next/image";
import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import { Skills } from "./components/skills";
import { Experience } from "./components/experience";
import { Education } from "./components/education";
import { ProjectsAndHobbies } from "./components/projectAndHobbies";
import { Contact } from "./components/contact";

export default function Home() {
  return (
  <>
    <Header /> 
    <Hero />
    <About />
    <Skills />
    <Experience />
    <Education />
    <ProjectsAndHobbies />
    <Contact />
    </>
  );
}
