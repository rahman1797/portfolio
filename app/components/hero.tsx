'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'motion/react';
import Image from 'next/image'
import { FaHtml5 } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { RiPhpLine } from "react-icons/ri";
import { DiCodeigniter } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { DiMsqlServer } from "react-icons/di";
import { DiDotnet } from "react-icons/di";
import { DiBootstrap } from "react-icons/di";
import { DiTrello } from "react-icons/di";

import Tooltip from './tooltip';

const iconData = [
  { Icon: FaHtml5, name: 'HTML5', color: 'text-orange-300' },
  { Icon: FaCss3, name: 'CSS3', color: 'text-blue-300' },
  { Icon: FaJs, name: 'JavaScript', color: 'text-yellow-300' },
  { Icon: FaReact, name: 'React', color: 'text-blue-300' },
  { Icon: FaDatabase, name: 'Database', color: 'text-green-300' },
  { Icon: FaGit, name: 'Git', color: 'text-red-300' },
  { Icon: RiPhpLine, name: 'PHP', color: 'text-[#4C588F]' },
  { Icon: DiCodeigniter, name: 'CodeIgniter', color: 'text-[#F35948]' },
  { Icon: DiMysql, name: 'MySQL', color: 'text-[#009de6]' },
  { Icon: DiMsqlServer, name: 'SQL Server', color: 'text-[#ff4c49]' },
  { Icon: DiDotnet, name: '.NET', color: 'text-[#7146ff]' },
  { Icon: DiBootstrap, name: 'Bootstrap', color: 'text-[#ab56ff]' },
  { Icon: DiTrello, name: 'Trello', color: 'text-[#105FED]' },
];

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
            <a className="bg-gradient-to-r from-[#1f63c9] to-[#4d439f] text-white px-5 py-2 rounded-full font-bold text-lg" href="#contact">Reach Me</a>
          </div>

          <div className='flex flex-row flex-wrap gap-4 px-5 items-center justify-center p-3 rounded-2xl bg-white/10 backdrop-blur-md mt-10'>
            {iconData.map((item, index) => (
              <Tooltip key={index} content={item.name}>
                <div className="cursor-help hover:scale-110 transition-transform duration-200">
                  <item.Icon size={32} className={`text-2xl ${item.color}`} />
                </div>
              </Tooltip>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero