'use client'

import { motion } from 'motion/react';
// import { Badge } from './ui/badge';
import { Search, Code, Database, Layout, Smartphone } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      icon: Search,
      color: ['text-blue-500', 'bg-blue-500/10'],
      title: 'SEO & Optimization',
      description: 'Improving the visibility of a website in search engine results pages (SERPs).',
      skills: ['SEO', 'Google Analytics', 'Google Search Console']
    },
    {
      icon: Code,
      color: ['text-purple-500', 'bg-purple-500/10'],
      title: 'Frontend Development',
      description: 'Building the user interface of a website. Ensure the UI remains good on various devices',
      skills: ['HTML', 'CSS', 'JavaScript', 'ReactJs', 'Tailwind CSS', 'Bootstrap']
    },
    {
      icon: Database,
      color: ['text-pink-500', 'bg-pink-500/10'],
      title: 'Backend Development',
      description: 'Building the server-side of a website / ERP system. Ensure all business processes run smoothly',
      skills: ['C#', 'ASP .NET Core', 'PHP', 'Laravel', 'CodeIgniter']
    },
    {
      icon: Database,
      color: ['text-green-500', 'bg-green-500/10'],
      title: 'Database',
      description: 'Storing and retrieving data.',
      skills: ['SQL', 'MySQL', 'SQL Server']
    },
    {
      icon: Layout,
      color: ['text-orange-500', 'bg-orange-500/10'],
      title: 'Design',
      description: 'Creating the user interface of a website.',
      skills: ['Responsive Design']
    }
  ];

  const allSkills = [
    'SEO', 'HTML', 'CSS', 'JavaScript', 'ReactJs',
    'C#', 'ASP .NET Core', 'PHP', 'Laravel', 'SQL'
  ];

  return (
    <section id="skills" className="py-20 page-center mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl text-center mb-4">
          My <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Skills</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">Technologies and tools I work with</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="p-6 bg-card/50 backdrop-blur border border-gray-700 rounded-2xl hover:border-blue-500/50 transition-colors flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 ${category.color[1]} rounded-lg`}>
                    <Icon className={`w-5 h-5 ${category.color[0]}`} />
                  </div>
                  <h3>{category.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground flex-1">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div key={skill} className="bg-white/10 rounded-lg py-1 px-2">
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 justify-center"
        >
          {allSkills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20 hover:border-blue-500/50 transition-colors">
                {skill}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
