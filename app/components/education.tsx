'use client'

import { motion } from 'motion/react';
import { GraduationCap, Award, Users } from 'lucide-react';

export function Education() {
  const organizations = [
    {
      name: 'BEM (Badan Eksekutif Mahasiswa)',
      position: 'Staff Departemen',
      responsibilities: [
        'Mengorganisir dan mengelola acara kemahasiswaan tingkat universitas',
        'Berkoordinasi dengan berbagai departemen untuk menjalankan program kerja',
        'Membantu dalam pengembangan soft skills dan leadership mahasiswa',
        'Mengelola administrasi dan dokumentasi kegiatan organisasi'
      ]
    },
    {
      name: 'DEFAULT',
      position: 'Anggota Aktif',
      responsibilities: [
        'Berpartisipasi dalam kegiatan pengembangan teknologi dan inovasi',
        'Mengadakan workshop dan seminar terkait IT dan programming',
        'Berbagi pengetahuan dan pengalaman dengan sesama anggota',
        'Berkontribusi dalam proyek-proyek teknologi kampus'
      ]
    }
  ];

  return (
    <section id="education" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl text-center mb-4">
          Education <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">& Organizations</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">Academic background and extracurricular activities</p>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="p-6 md:p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/20 rounded-lg">
                <GraduationCap className="w-8 h-8 text-blue-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl mb-2">Universitas Negeri Jakarta (UNJ)</h3>
                <div className="flex flex-wrap gap-4 items-center text-muted-foreground mb-3">
                  <span>Bachelor's Degree in Information Technology</span>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-yellow-500" />
                    <span>GPA: 3.21</span>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Completed comprehensive studies in software engineering, database systems, web development, and computer science fundamentals.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Organizations */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Users className="w-6 h-6 text-purple-500" />
            <h3 className="text-xl">Organizations & Activities</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {organizations.map((org, index) => (
              <motion.div
                key={org.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="p-6 bg-card/50 backdrop-blur border-border hover:border-purple-500/50 transition-colors h-full">
                  <div className="mb-4">
                    <h4 className="mb-1">{org.name}</h4>
                    <p className="text-purple-500">{org.position}</p>
                  </div>

                  <ul className="space-y-2">
                    {org.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-purple-500 mt-1">•</span>
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
