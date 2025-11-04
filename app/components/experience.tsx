'use client'
import { motion } from 'motion/react';
import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      company: 'Ruangguru',
      position: 'Senior Web & SEO Engineer',
      period: 'Aug 2022 - Present',
      current: true,
      responsibilities: [
        'Develop and maintain more than 100+ landing pages',
        'Create report generator to generate more than 1000+ reports per month',
        'Improve the SEO of the website to page 1 in the search engine results page (SERP)',
        'Maintain development tools to improve the development process',
        'Work with SQL databases to manage and optimize data operations'
      ]
    },
    {
      company: 'Intalogi (Inti Talenta Teknologi)',
      position: 'Web Developer',
      period: 'Apr 2020 - Aug 2022',
      current: false,
      responsibilities: [
        'Built and maintained web applications using PHP and Laravel framework',
        'Developed RESTful APIs for mobile and web applications',
        'Implemented frontend features using HTML, CSS, and JavaScript',
        'Managed MySQL databases and optimized query performance',
        'Collaborated with design team to implement pixel-perfect UI/UX'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 page-center mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl text-center mb-4">
          Work <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Experience</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">My professional journey</p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-6 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-background hidden md:block" />

                <div className="md:ml-20 p-6 bg-card/50 backdrop-blur border-border hover:border-blue-500/50 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase className="w-5 h-5 text-blue-500" />
                        <h3 className="text-lg md:text-2xl font-bold">{exp.position}</h3>
                        {exp.current && (
                          <span className="px-2 md:px-5 py-1 md:py-1 text-xs md:text-base bg-green-500/10 text-green-500 rounded-full border border-green-500/20">
                            Current
                          </span>
                        )}
                      </div>
                      <h4 className="text-blue-500 md:text-xl font-semibold">{exp.company}</h4>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm md:text-xl">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
