'use client'
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Instagram } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'maulanarahmannur67@gmail.com',
      href: 'mailto:maulanarahmannur67@gmail.com',
      color: 'blue'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+62 852-1812-4422',
      href: 'tel:+628521812442',
      color: 'purple'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'East Jakarta, Indonesia',
      href: '#',
      color: 'pink'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/maulana-rahman-nur-6529911a3/', label: 'LinkedIn', color: 'blue' },
    { icon: Github, href: 'https://github.com/rahman1797', label: 'GitHub', color: 'purple' },
    { icon: Instagram, href: 'https://www.instagram.com/m.rahmannur', label: 'Instagram', color: 'pink' }
  ];

  const [message, setMessage] = useState('');

  return (
    <section id="contact" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl text-center mb-4">
          Get In <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Let's work together on your next project
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6">Contact Information</h3>

            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 rounded-lg bg-card/50 backdrop-blur border border-border hover:border-blue-500/50 transition-colors"
                  >
                    <div className={`p-3 bg-${info.color}-500/10 rounded-lg`}>
                      <Icon className={`w-5 h-5 text-${info.color}-500`} />
                    </div>
                    <div>
                      <p className="text-muted-foreground">{info.label}</p>
                      <p>{info.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            <div>
              <h4 className="mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                      className={`p-3 bg-${social.color}-500/10 rounded-lg hover:bg-${social.color}-500/20 transition-colors`}
                      aria-label={social.label}
                    >
                      <Icon className={`w-6 h-6 text-${social.color}-500`} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="p-6 bg-white/5 rounded-2xl backdrop-blur border-border">
              <form className="space-y-4">
                <div>
                  <label htmlFor="message" className="block mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Tell me something..."
                    rows={5}
                    className="bg-background/50"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 text-white px-4 py-2 rounded-full font-bold cursor-pointer"
                  onClick={() => {
                    window.open('https://api.whatsapp.com/send?phone=6285218124422&text=' + message, '_blank');
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
