'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'motion/react';
import Image from 'next/image'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaGit } from "react-icons/fa";

//image

const Hero = () => {

  const [showFlag, setShowFlag] = useState(false);

  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  
  const roles = ['IT Engineer', 'Web Developer', 'Fullstack Developer'];
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const delayBetweenRoles = 2000;

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[loopNum % roles.length];
      
      if (!isDeleting) {
        if (currentText !== currentRole) {
          setCurrentText(currentRole.substring(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), delayBetweenRoles);
          return;
        }
      } else {
        if (currentText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          return;
        } else {
          setCurrentText(currentRole.substring(0, currentText.length - 1));
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, loopNum]);
    
  return (
    <div className='bg-gradient-to-br from-[#071126] to-[#1e072d] py-10 md:py-20 rounded-b-4xl h-[80vh]' id='home'>
        <div className='h-20'></div>
        <div className='page-center'>
            <div className='flex flex-col items-center justify-center gap-3'>
                <h1 className='text-4xl font-bold'>Hello, I'm <span className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Maulana Rahman Nur</span></h1>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground h-12 md:h-14"
                >
                  <span className="inline-block min-w-[300px] md:min-w-[400px] text-center">
                    {currentText}
                    <span className="animate-pulse">|</span>
                  </span>
                </motion.div>
                <div className='flex justify-center'>
                  <a className="bg-gradient-to-r from-[#1f63c9] to-[#4d439f] text-white px-5 py-2 rounded-full font-bold text-lg" href="#">Reach Me</a>
                </div>

                <div className='flex flex-row gap-4 px-5 w-max items-center justify-center p-3 rounded-2xl bg-white/10 backdrop-blur-md mt-10'>

                  <FaHtml5 className='text-2xl text-orange-300' />
                  <FaCss3 className='text-2xl text-blue-300' />
                  <FaJs className='text-2xl text-yellow-300' />
                  <FaReact className='text-2xl text-blue-300' />
                  <FaDatabase className='text-2xl text-green-300' />
                  <FaGit className='text-2xl text-red-300' />

                </div>
            </div>

        </div>
    </div>
  )
}

export default Hero