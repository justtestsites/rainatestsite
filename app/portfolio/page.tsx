'use client'

import { motion } from 'framer-motion'
import Header from '@/components/shared/Header'
import { useState } from 'react'

// Portfolio items data
const portfolioItems = [
  // Editorial Items
  {
    title: 'Vogue September Issue',
    category: 'Editorial',
    image: '/images/portfolio/editorial-1.svg',
    backgroundColor: 'bg-gradient-to-b from-[#C2B3AB] via-[#A69389] to-[#695B55]'
  },
  {
    title: 'Elle Magazine Cover',
    category: 'Editorial',
    image: '/images/portfolio/editorial-2.svg',
    backgroundColor: 'bg-gradient-to-b from-[#C2B3AB] via-[#A69389] to-[#695B55]'
  },
  {
    title: 'Harper\'s Bazaar Spread',
    category: 'Editorial',
    image: '/images/portfolio/editorial-3.svg',
    backgroundColor: 'bg-gradient-to-b from-[#C2B3AB] via-[#A69389] to-[#695B55]'
  },

  // Celebrity Items
  {
    title: 'Zendaya - Met Gala',
    category: 'Celebrity',
    image: '/images/portfolio/celebrity-1.svg',
    backgroundColor: 'bg-gradient-to-b from-[#C2B3AB] via-[#A69389] to-[#695B55]'
  },
  {
    title: 'Ryan Gosling - Oscars',
    category: 'Celebrity',
    image: '/images/portfolio/celebrity-2.svg',
    backgroundColor: 'bg-gradient-to-b from-[#C2B3AB] via-[#A69389] to-[#695B55]'
  },
  {
    title: 'Florence Pugh - Premiere',
    category: 'Celebrity',
    image: '/images/portfolio/celebrity-3.svg',
    backgroundColor: 'bg-gradient-to-b from-[#C2B3AB] via-[#A69389] to-[#695B55]'
  },

  // Commercial Items
  {
    title: 'Nike - Just Do It',
    category: 'Commercial',
    image: '/images/portfolio/commercial-1.svg',
    backgroundColor: 'bg-gradient-to-b from-[#C2B3AB] via-[#A69389] to-[#695B55]'
  },
  {
    title: 'Gucci - Summer Campaign',
    category: 'Commercial',
    image: '/images/portfolio/commercial-2.svg',
    backgroundColor: 'bg-gradient-to-b from-[#C2B3AB] via-[#A69389] to-[#695B55]'
  },
  {
    title: 'Louis Vuitton - Fall',
    category: 'Commercial',
    image: '/images/portfolio/commercial-3.svg',
    backgroundColor: 'bg-gradient-to-b from-[#C2B3AB] via-[#A69389] to-[#695B55]'
  }
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory)

  return (
    <main className="min-h-screen pt-24 bg-neutral-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-[#f1ede9] relative overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_120%,#2A2725_0%,rgba(42,39,37,0)_70%)]" />
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#D4CBC0] blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#A69B8D] blur-3xl opacity-20 translate-x-1/2 translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl font-bold text-[#4A4745] leading-relaxed max-w-2xl mx-auto mb-4"
            >
              Elevating brands and personalities through distinctive styling. From A-list celebrities to global fashion campaigns and luxury brand collaborations.
            </motion.p>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block mb-4"
            >
              <div className="h-1 w-48 mx-auto bg-[#D4CBC0] rounded-full" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex gap-6 justify-center text-[#4A4745]"
            >
              <div className="flex items-center gap-2 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#312e2c]"></span>
                Celebrity Styling
              </div>
              <div className="flex items-center gap-2 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#312e2c]"></span>
                Commercial Projects
              </div>
              <div className="flex items-center gap-2 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#312e2c]"></span>
                Brand Partnerships
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex justify-center gap-4 mb-16">
            {['All', 'Editorial', 'Celebrity', 'Commercial'].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-3 rounded-full border-2 transition-all duration-300 text-neutral-600 hover:shadow-lg ${
                  activeCategory === category
                    ? 'bg-[#312e2c] border-[#312e2c] text-white'
                    : 'bg-white border-neutral-200 hover:border-[#312e2c] hover:bg-[#312e2c] hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className={`relative aspect-[3/4] overflow-hidden shadow-2xl border border-[#364846] ${item.backgroundColor}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-semibold mb-3 text-white">{item.title}</h3>
                    <p className="text-neutral-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 