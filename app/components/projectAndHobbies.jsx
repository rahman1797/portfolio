'use client'

import { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Music, Camera, Gamepad2, Book } from 'lucide-react';
import Image from 'next/image';

import popsImage from '@/app/assets/img/pops.png';
import lp_portfolioImage from '@/app/assets/img/lp_portfolio.png';
import epicorImage from '@/app/assets/img/epicor.png';
import applymedionImage from '@/app/assets/img/applymedion.png';

export function ProjectsAndHobbies() {

  const [activeTab, setActiveTab] = useState('projects');

  const projects = [
    {
      title: 'Pusat Operasi Penurunan Stunting (POPS)',
      description: 'Website for the Pusat Operasi Penurunan Stunting (POPS) to manage the operations of the center.',
      image: popsImage,
      tags: ['PHP', 'Laravel', 'MySQL', 'Git'],
      link: 'https://popskluwut.id/',
      github: ''
    },
    {
      title: 'Landing Page',
      description: 'more than 100 landing pages as marketing media, lead generator platforms, and payment gateways.',
      image: lp_portfolioImage,
      tags: ['SEO', 'Tailwind CSS', 'React JS', 'Git',],
      link: 'https://www.ruangguru.com/',
      github: ''
    },
    {
      title: 'Enterprise Resource Planning (ERP) System',
      description: 'Maintain end-to-end applications and B2B SaaS thats provides enterprise resource planning (ERP), customer relationship management (CRM), supply chain management (SCM), and human capital management (HCM) software to business customers in both software as a service (SaaS) and on-premises deployment models.',
      image: epicorImage,
      tags: ['C#', 'SQL Server', 'Crystal Report'],
      link: '',
      github: ''
    },
    {
      title: 'Recruitment Information System',
      description: 'Information system to assist the recruitment and selection process of prospective employees such as publication of job advertisements, psychological tests, to selection of applicant data',
      image: applymedionImage,
      tags: ['.NET core', 'SQL Server', 'C#'],
      link: 'https://applyonline.medionindonesia.com/',
      github: ''
    }
  ];

  const hobbies = [
    {
      icon: Gamepad2,
      name: 'Gaming',
      description: 'Enjoy strategy and adventure games, solve puzzles in the game to improve your logic and strategy skills.',
      color: 'pink'
    },
    {
      icon: Camera,
      name: 'Photography',
      description: 'Capturing moments and exploring creative photography',
      color: 'purple'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl text-center mb-4">
          Projects <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">& Hobbies</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">My work and interests</p>

        <div className="w-full flex flex-col gap-5">

          <div className="flex w-max mx-auto bg-white/20 px-3 py-2 rounded-full backdrop-blur border-border hover:border-blue-500/50 transition-all">
            <button className={`text-white px-4 py-2 rounded-full cursor-pointer ${activeTab === 'projects' ? 'bg-blue-500' : ''}`} onClick={() => setActiveTab('projects')}>My Projects</button>
            <button className={`text-white px-4 py-2 rounded-full cursor-pointer ${activeTab === 'hobbies' ? 'bg-purple-500' : ''}`} onClick={() => setActiveTab('hobbies')}>My Hobbies</button>
          </div>

          <div className={`${activeTab === 'projects' ? 'block' : 'hidden'}`}>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="overflow-hidden bg-white/5 rounded-2xl backdrop-blur border-border hover:border-blue-500/50 transition-all h-full group">
                    <div className="relative overflow-hidden h-[22rem]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        width={500}
                        height={500}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <div className="p-6">
                      <h3 className="mb-2 text-xl md:text-2xl font-bold">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <div key={tag} variant="secondary" className="bg-white/10 rounded-lg py-1 px-2 text-xs md:text-sm">
                            {tag}
                          </div>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        {project.link ?
                          <a
                            href={project.link}
                            className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors cursor-pointer"
                            target="_blank" rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>View Project</span>
                          </a> : ""
                        }
                        {project.github ?
                          <a
                            href={project.github}
                            className="flex items-center gap-2 text-purple-500 hover:text-purple-400 transition-colors"
                          >
                            <Github className="w-4 h-4" />
                            <span>Code</span>
                          </a> : ""
                        }
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className={`${activeTab === 'hobbies' ? 'block' : 'hidden'}`}>
            <div className="grid md:grid-cols-2 gap-6">
              {hobbies.map((hobby, index) => {
                const Icon = hobby.icon;
                return (
                  <motion.div
                    key={hobby.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="p-6 bg-card/50 backdrop-blur border-border hover:border-blue-500/50 transition-all group">
                      <div className="flex items-start gap-4">
                        <div className={`p-4 bg-${hobby.color}-500/10 rounded-lg group-hover:scale-110 transition-transform`}>
                          <Icon className={`w-8 h-8 text-${hobby.color}-500`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="mb-2 font-bold">{hobby.name}</h3>
                          <p className="text-muted-foreground">{hobby.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
