'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu } from 'lucide-react';

import homeIcon from '@/app/assets/icons/home.svg';
import aboutIcon from '@/app/assets/icons/user.svg';
import educationIcon from '@/app/assets/icons/education.svg';
import projectsIcon from '@/app/assets/icons/project.svg';
import contactIcon from '@/app/assets/icons/mail.svg';

//image

const Header = () => {
  const [showMenu, setShowMenu] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 768;
    }
    return false;
  });

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth >= 768;
      setShowMenu(isDesktop);
    };

    const handleScroll = () => {
      const scrollThreshold = 48; // 3rem = 48px
      setIsScrolled(window.scrollY > scrollThreshold);

      // Detect active section
      const sections = ['home', 'about', 'education', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100; // offset untuk header

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    
  return (
    <>
    <div className={`w-full fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-black' : 'bg-transparent'}`}>
        <div className='page-center flex flex-row justify-between items-center gap-4 font-bold h-20'>
          <Menu className='md:hidden cursor-pointer' onClick={() => setShowMenu(!showMenu)} />
          
          {/* Mobile Menu - Slide from left */}
          <div className={`fixed top-20 left-0 h-[calc(100vh-5rem)] w-64 bg-black/80 flex flex-col md:flex-row gap-4 p-6 z-40 transition-transform duration-300 ease-in-out md:hidden
            ${showMenu ? 'translate-x-0' : '-translate-x-full'}
          `}>
            <a href="#home" className="hover:text-blue-300 flex items-center gap-2">
              <Image src={homeIcon} alt="Home" width={20} height={20} />Home
            </a>
            <a href="#about" className="hover:text-blue-300 flex items-center gap-2">
              <Image src={aboutIcon} alt="About" width={20} height={20} /> About
            </a>
            <a href="#education" className="hover:text-blue-300 flex items-center gap-2">
              <Image src={educationIcon} alt="Education" width={20} height={20} />Education
            </a>
            <a href="#projects" className="hover:text-blue-300 flex items-center gap-2">
              <Image src={projectsIcon} alt="Projects" width={20} height={20} />Projects
            </a>
            <a href="#contact" className="hover:text-blue-300 flex items-center gap-2">
              <Image src={contactIcon} alt="Contact" width={20} height={20} />Contact
            </a>
          </div>

          {/* Overlay for mobile menu */}
          {showMenu && (
            <div 
              className="fixed inset-0 bg-black/70 z-30 md:hidden top-20"
              onClick={() => setShowMenu(false)}
            />
          )}

          {/* Desktop Menu */}
          <div className={`ml-auto flex-row gap-10 p-6 hidden md:flex`}>
            <a href="#home" className={`relative flex items-center gap-2 pb-2 transition-colors
              before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 
              before:bg-gradient-to-r before:from-blue-500 before:to-pink-500
              before:transition-transform before:duration-300 before:origin-left
              ${activeSection === 'home' ? 'before:scale-x-100' : 'before:scale-x-0 hover:before:scale-x-100'}`}>
              <Image src={homeIcon} alt="Home" width={20} height={20} />Home
            </a>
            <a href="#about" className={`relative flex items-center gap-2 pb-1 transition-colors
              before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 
              before:bg-gradient-to-r before:from-blue-500 before:to-pink-500
              before:transition-transform before:duration-300 before:origin-left
              ${activeSection === 'about' ? 'before:scale-x-100' : 'before:scale-x-0 hover:before:scale-x-100'}`}>
              <Image src={aboutIcon} alt="About" width={20} height={20} /> About
            </a>
            <a href="#education" className={`relative flex items-center gap-2 pb-2 transition-colors
              before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 
              before:bg-gradient-to-r before:from-blue-500 before:to-pink-500
              before:transition-transform before:duration-300 before:origin-left
              ${activeSection === 'education' ? 'before:scale-x-100' : 'before:scale-x-0 hover:before:scale-x-100'}`}>
              <Image src={educationIcon} alt="Education" width={20} height={20} />Education
            </a>
            <a href="#projects" className={`relative flex items-center gap-2 pb-2 transition-colors
              before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 
              before:bg-gradient-to-r before:from-blue-500 before:to-pink-500
              before:transition-transform before:duration-300 before:origin-left
              ${activeSection === 'projects' ? 'before:scale-x-100' : 'before:scale-x-0 hover:before:scale-x-100'}`}>
              <Image src={projectsIcon} alt="Projects" width={20} height={20} />Projects
            </a>
            <a href="#contact" className={`relative flex items-center gap-2 pb-2 transition-colors
              before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 
              before:bg-gradient-to-r before:from-blue-500 before:to-pink-500
              before:transition-transform before:duration-300 before:origin-left
              ${activeSection === 'contact' ? 'before:scale-x-100' : 'before:scale-x-0 hover:before:scale-x-100'}`}>
              <Image src={contactIcon} alt="Contact" width={20} height={20} />Contact
            </a>
          </div>
          
        </div> 
    </div>
    </>
  )
}

export default Header