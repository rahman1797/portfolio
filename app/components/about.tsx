'use client'

import React, { useState, useEffect } from 'react'
import { FaCode } from "react-icons/fa6";
import { FiBriefcase } from "react-icons/fi";
import { LuGraduationCap } from "react-icons/lu";



//image

const About = () => {

  return (
    <div className='py-10 md:py-20' id='about'>
      <div className='page-center flex flex-col gap-10'>
        <h2 className='text-4xl font-bold text-center'>
          About Me
        </h2>
        <div className='grid md:grid-cols-2 gap-20'>
          <div>
            Web developer with over 5 years of experience, specializing in C# (.NET) and PHP-based frameworks (Laravel, CodeIgniter). Focus on user experience, optimizing the work processes of other departments, saving time and resources. Utilizing SEO as an organic marketing tool for the company.
          </div>
          <div className='flex flex-col gap-3'>
            <div className='ring-2 ring-gray-700 hover:ring-blue-800 transition-all duration-300 rounded-2xl p-4 flex gap-5 items-start'>
              <div className='flex items-center justify-center p-2 rounded-md bg-[#071831]'>
                <FaCode className='text-2xl text-[#1f63c9]' />
              </div>
              <div className='flex flex-col gap-1'>
                <h3 className='text-lg font-bold'>
                  Web Development
                </h3>
                <p className='text-gray-500'>
                  Experienced in building complete web applications from frontend to backend
                </p>
              </div>
            </div>
            <div className='ring-2 ring-gray-700 hover:ring-purple-800 transition-all duration-300 rounded-2xl p-4 flex gap-5 items-start'>
              <div className='flex items-center justify-center p-2 rounded-md bg-[#1e083b]'>
                <FiBriefcase className='text-2xl text-purple-500' />
              </div>
              <div className='flex flex-col gap-1'>
                <h3 className='text-lg font-bold'>
                  5+ Years Experience
                </h3>
                <p className='text-gray-500'>
                  Experienced in building complete web applications from frontend to backend with React, Next.js, Tailwind CSS, and MongoDB.
                </p>
              </div>
            </div>
            <div className='ring-2 ring-gray-700 hover:ring-pink-800 transition-all duration-300 rounded-2xl p-4 flex gap-5 items-start'>
              <div className='flex items-center justify-center p-2 rounded-md bg-[#290628]'>
                <LuGraduationCap className='text-2xl text-pink-500' />
              </div>
              <div className='flex flex-col gap-1'>
                <h3 className='text-lg font-bold'>
                  Continuous Learning
                </h3>
                <p className='text-gray-500'>
                  I'm always learning new technologies and frameworks to improve my skills and stay up to date with the latest trends in the industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About