'use client'

import Header from '@/components/shared/Header'
import ImageCarousel from '@/components/ImageCarousel'
import BrandCarousel from '@/components/BrandCarousel'
import { motion, useScroll, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function Home() {
  const journeyRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: journeyRef,
    offset: ["start end", "end start"]
  })

  return (
    <main className="min-h-screen bg-[#F2EFED] pt-24">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2A2725] to-[#4A4745]" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_120%,#F2EFED_0%,rgba(242,239,237,0)_50%)]" />
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-[#F2EFED]">
            </h1>
          </motion.div>
          <ImageCarousel />
        </div>
      </section>

      {/* Brand Section */}
      <section className="py-4 relative overflow-hidden bg-[#2A2725]">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_0%,#F2EFED_0%,rgba(242,239,237,0)_70%)]" />
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#B1A599] blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#4A4745] blur-3xl opacity-10 translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-0"
          >
            <div className="inline-block">
              <h2 className="text-4xl font-bold mb-1 text-[#F2EFED]">
                Featured In
              </h2>
              <div className="h-1 w-32 mx-auto bg-[#B1A599] rounded-full mt-1" />
            </div>
          </motion.div>
          <div className="pt-2">
            <BrandCarousel />
          </div>
        </div>
      </section>

      {/* Wardrobe Edits Section */}
      <section className="py-24 relative overflow-hidden bg-[#F2EFED]">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,#2A2725_0%,rgba(42,39,37,0)_70%)]" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-block">
              <h2 className="text-5xl font-bold mb-4 text-[#2A2725]">
                Raina's Passion
              </h2>
              <div className="h-1 w-48 mx-auto bg-[#D4CBC0] rounded-full mt-2" />
            </div>
          </motion.div>

          <div className="space-y-32">
            {/* First Edit */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:w-1/2 space-y-4"
              >
                <h3 className="text-3xl font-semibold text-[#2A2725]">Wardrobe Styling</h3>
                <p className="text-[#4A4745] leading-relaxed">
                  Experience the transformative power of a perfectly curated wardrobe. As your personal stylist, I'll help you discover and define your unique style identity, organizing and optimizing your existing pieces while thoughtfully introducing new elements. Together, we'll create a versatile, cohesive collection that reflects your personality, lifestyle, and aspirations. From decluttering to color coordination, every detail is considered to ensure your wardrobe works harmoniously, making daily dressing a joy rather than a challenge.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:w-1/2"
              >
                <div className="aspect-[4/5] bg-white shadow-lg overflow-hidden border border-[#364846]">
                  <Image
                    src="/images/home/wardrobe closet.webp"
                    alt="Wardrobe Styling"
                    width={500}
                    height={625}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>

            {/* Second Edit */}
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:w-1/2"
              >
                <div className="aspect-[4/5] bg-white shadow-lg overflow-hidden border border-[#364846]">
                  <Image
                    src="/images/home/red carpet.webp"
                    alt="Red Carpet"
                    width={500}
                    height={625}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:w-1/2 space-y-4"
              >
                <h3 className="text-3xl font-semibold text-[#2A2725]">Red Carpet</h3>
                <p className="text-[#4A4745] leading-relaxed">
                  Make every entrance unforgettable with our red carpet styling service. Whether it's a gala, awards ceremony, or special event, I'll help you command attention and exude confidence with a look that's both striking and sophisticated. From selecting the perfect statement piece to coordinating accessories and ensuring impeccable fit, we create moments that capture the spotlight. My expertise in formal wear and luxury fashion ensures you'll shine at your most important occasions, making memories that last a lifetime.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Work Section */}
      <section className="py-24 relative overflow-hidden bg-[#F5F1EE]">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_0%,#E5DED8_0%,rgba(229,222,216,0)_70%)]" />
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block">
              <h2 className="text-5xl font-bold mb-4 text-[#2A2725]">
                Latest Work
              </h2>
              <div className="h-1 w-48 mx-auto bg-[#D4CBC0] rounded-full mt-2" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {/* Editorial Fashion - Tall Portrait */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-2 aspect-[3/4] group relative overflow-hidden border border-[#364846]"
            >
              <Image
                src="/images/home/gallery/fashion1.webp"
                alt="Fashion Editorial"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* Evening Wear - Wide Landscape */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-4 aspect-[16/9] group relative overflow-hidden border border-[#364846]"
            >
              <Image
                src="/images/home/gallery/fashion3.webp"
                alt="Evening Wear"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* Street Style - Regular Portrait */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-2 aspect-[4/5] group relative overflow-hidden border border-[#364846]"
            >
              <Image
                src="/images/home/gallery/fashion2.webp"
                alt="Street Style"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* Casual Style - Regular Portrait */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:col-span-2 aspect-[4/5] group relative overflow-hidden border border-[#364846]"
            >
              <Image
                src="/images/home/gallery/fashion5.webp"
                alt="Casual Style"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* Runway Show - Regular Portrait */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="md:col-span-2 aspect-[4/5] group relative overflow-hidden border border-[#364846]"
            >
              <Image
                src="/images/home/gallery/fashion4.webp"
                alt="Runway Show"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* Accessories - Regular Portrait */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="md:col-span-3 aspect-[4/5] group relative overflow-hidden border border-[#364846]"
            >
              <Image
                src="/images/home/gallery/fashion6.webp"
                alt="Accessories"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* Sportswear - Regular Portrait */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="md:col-span-3 aspect-[4/5] group relative overflow-hidden border border-[#364846]"
            >
              <Image
                src="/images/home/gallery/fashion7.webp"
                alt="Sportswear"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 relative overflow-hidden bg-[#2A2725]">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,#F2EFED_0%,rgba(242,239,237,0)_70%)]" />
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#B1A599] blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#4A4745] blur-3xl opacity-10 translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-3xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <h2 className="text-4xl font-bold text-[#F2EFED]">
              Stay in Style
            </h2>
            <p className="text-[#B1A599] text-lg">
              Subscribe to receive exclusive style tips and updates
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl bg-[#F2EFED] bg-opacity-10 border border-[#F2EFED] border-opacity-20 text-[#F2EFED] placeholder-[#B1A599] focus:outline-none focus:ring-2 focus:ring-[#D4CBC0] focus:ring-opacity-50 transition-all duration-300"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-[#D4CBC0] hover:bg-[#B1A599] text-[#2A2725] font-semibold rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 