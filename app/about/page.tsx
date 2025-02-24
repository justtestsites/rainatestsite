'use client'

import { motion } from 'framer-motion'
import Header from '@/components/shared/Header'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThreads } from '@fortawesome/free-brands-svg-icons'

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 bg-[#F2EFED]">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="relative bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 p-8 md:p-12">
              {/* Profile Image Column */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-4 flex justify-center items-start"
              >
                <div className="w-[280px] h-[280px] md:w-[320px] md:h-[320px]">
                  <img
                    src="/images/about/profile.png"
                    alt="Raina I."
                    className="w-full h-full object-cover object-center border-2 border-[#364846] shadow-lg"
                  />
                </div>
              </motion.div>

              {/* Content Column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-8 flex flex-col justify-center"
              >
                <h1 className="text-5xl md:text-6xl font-semibold mb-6 text-[#2A2725]">
                  About <span className="text-[#364846]">Raina</span>
                </h1>
                
                <div className="space-y-6 text-lg text-[#4A4745]">
                  <p className="leading-relaxed">
                    Based in the vibrant fashion scene of Los Angeles, California, I am a passionate wardrobe stylist with over a decade of experience in transforming personal style narratives. My love for fashion stems from a deep-rooted belief that clothing is more than just fabric – it's a powerful form of self-expression that can transform how we feel and present ourselves to the world.
                  </p>
                  <p className="leading-relaxed">
                    What drives me is the thrill of helping individuals discover their authentic style and watching their confidence soar. My expertise spans across editorial styling, celebrity wardrobing, and personal style consultation, but what truly sets my heart on fire is the creative journey of bringing someone's vision to life. Whether I'm curating looks for high-profile events, directing editorial shoots, or working one-on-one with clients, I pour my heart into every detail, ensuring each styling choice tells a meaningful story.
                  </p>
                  <p className="leading-relaxed">
                    Growing up in LA's diverse fashion landscape has shaped my unique perspective on style, blending laid-back California cool with high-end sophistication. I thrive on the creative energy of this city and draw inspiration from its eclectic mix of cultures, street style, and artistic expression. My mission is to empower each client to embrace their individuality while feeling confident and authentic in every outfit.
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-[#2A2725] text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Link href="/portfolio">View Portfolio</Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-[#F2EFED] text-[#2A2725] px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Link href="/contact">Get in Touch</Link>
                  </motion.div>
                  
                  <div className="flex items-center gap-3 ml-2">
                    <motion.a
                      href="https://www.instagram.com/raaaaiina/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-2 rounded-full bg-[#F2EFED] hover:bg-[#2A2725] transition-colors duration-300 group"
                      aria-label="Instagram"
                    >
                      <svg
                        className="w-5 h-5 text-[#2A2725] group-hover:text-white transition-colors duration-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </motion.a>

                    <motion.a
                      href="https://www.threads.net/@raaaaiina"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-2 rounded-full bg-[#F2EFED] hover:bg-[#2A2725] transition-colors duration-300 group"
                      aria-label="Threads"
                    >
                      <FontAwesomeIcon 
                        icon={faThreads} 
                        className="w-5 h-5 text-[#2A2725] group-hover:text-white transition-colors duration-300"
                      />
                    </motion.a>

                    <motion.a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-2 rounded-full bg-[#F2EFED] hover:bg-[#2A2725] transition-colors duration-300 group"
                      aria-label="LinkedIn"
                    >
                      <svg
                        className="w-5 h-5 text-[#2A2725] group-hover:text-white transition-colors duration-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="pt-0 pb-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block">
              <h2 className="text-4xl font-bold mb-4 text-[#2A2725]">Areas of Expertise</h2>
              <div className="h-1 w-24 mx-auto bg-[#B1A599] rounded-full" />
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: 'Editorial Styling',
                description: 'Creating compelling visual narratives for fashion magazines and publications.',
              },
              {
                title: 'Celebrity Styling',
                description: 'Crafting memorable looks for red carpet events and public appearances.',
              },
              {
                title: 'Commercial Projects',
                description: 'Developing brand-aligned aesthetics for advertising campaigns.',
              },
            ].map((expertise, index) => (
              <motion.div
                key={expertise.title}
                initial={{ opacity: 0, y: 20, scale: .95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100 
                }}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="group relative h-[180px] w-full"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute -inset-0.5 bg-gradient-to-r from-[#2A2725] to-[#B1A599] opacity-0 group-hover:opacity-100 transition duration-300"
                />
                <div className="relative h-full p-6 bg-white border-2 border-[#364846] shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-[#F2EFED] z-10 flex flex-col">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#2A2725]/5 to-transparent rounded-bl-[100px] opacity-50 transition-opacity duration-300 group-hover:opacity-100" />
                  <h3 className="text-2xl font-semibold mb-2 text-[#2A2725] group-hover:text-[#2A2725] transition-colors duration-300">{expertise.title}</h3>
                  <p className="text-[#4A4745] text-lg relative z-10">{expertise.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 relative overflow-hidden bg-[#2A2725]">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_0%,#F2EFED_0%,rgba(242,239,237,0)_70%)]" />
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#B1A599] blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#4A4745] blur-3xl opacity-10 translate-x-1/2 translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-block mb-12">
                <h2 className="text-4xl font-bold mb-4 text-[#F2EFED]">Styling Philosophy</h2>
                <div className="h-1 w-24 mx-auto bg-[#B1A599] rounded-full" />
              </div>
              <div className="bg-[#F2EFED]/5 backdrop-blur-lg border-2 border-[#364846] p-10 md:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
                <p className="text-xl text-[#f2ede9] mb-8 leading-relaxed">
                  I believe that style is a powerful form of self-expression. My approach combines
                  current trends with timeless elements to create looks that are both contemporary
                  and enduring.
                </p>
                <p className="text-xl text-[#f2ede9] leading-relaxed">
                  Every client has a unique story to tell through their style, and I'm here to
                  help them tell it in the most authentic and impactful way possible.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
} 