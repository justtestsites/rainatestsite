'use client'

import { motion, useScroll, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import Header from '@/components/shared/Header'
import Link from 'next/link'
import localFont from 'next/font/local'

const chronicleDisplay = localFont({
  src: '../fonts/Chronicle-Display-Extra-Light.woff2',
  variable: '--font-chronicle-display'
})

// Services data
const services = [
  {
    title: 'The Edit',
    description: 'The full-service package is designed to maintain and update your wardrobe while aligning with your calendar of events and seasonal changes. We introduce new styles each month based on your latest needs and create outfits with your current wardrobe. With premier style support, we collaborate to apply your signature style to all aspects of your life: work, weekend, personal and professional events, and beyond.',
    features: [
      'Define your Style',
      'Evaluate your Current Wardrobe',
      'Receive Style Guidance',
      'Establish a Shopping Strategy',
      'Shop for a Customized New Wardrobe',
      'Style Presentation at your Home or Office',
      'Provide Expert Tailoring and Alterations',
      'Produce a Digital Gallery of your New Outfits'
    ],
    image: '/images/services/red-carpet.svg',
  },
  {
    title: 'The Event',
    description: 'Transform your special moments with personalized event styling that ensures you make a lasting impression. From red carpet appearances to milestone celebrations, we curate a complete look that captures the essence of the occasion while reflecting your personal style. Our comprehensive approach covers everything from outfit selection to accessories, ensuring you feel confident and camera-ready.',
    features: [
      '60-min virtual session',
      'Style questionnaire',
      'Body shape discovery and styling fundamentals',
      'Curated mood board with recommended brands',
      'Item sourcing online or in-store',
      '3 fully styled outfits OR 8-12 curated items',
      '2-hour fitting (in-person or virtual)'
    ],
    image: '/images/services/signature.svg',
  },
  {
    title: 'Personalized 1:1 Styling',
    description: 'Embark on a transformative style journey with our intensive one-on-one styling experience. This comprehensive service is designed for those seeking a complete wardrobe revolution. Through personalized consultations and expert guidance, we\'ll develop your signature style, optimize your existing wardrobe, and create a curated collection that perfectly aligns with your lifestyle and aspirations.',
    features: [
      '2 x 75 min video calls',
      'Style questionnaire and preferences discussion',
      'Body shape discovery and styling fundamentals',
      'Curated mood-board with brand recommendations',
      'Wardrobe refresh & Re-style OR New style direction',
      '6 styled outfits OR 12-18 new items',
      '2-hour fitting (in-person or virtual)',
      'WhatsApp support during office hours'
    ],
    image: '/images/services/intensive.svg',
  },
  {
    title: 'Seasonal Style Journey',
    description: 'Experience year-round style excellence with our comprehensive seasonal transformation service. We guide you through each season\'s transitions, ensuring your wardrobe remains current, versatile, and perfectly adapted to changing weather and trends. This long-term partnership includes quarterly updates, style refinements, and ongoing support to maintain and evolve your personal style throughout the year.',
    features: [
      '4 x 90 min video calls',
      'Comprehensive style questionnaire and consultation',
      'Body shape analysis and styling fundamentals',
      'Seasonal mood-boards and brand curation',
      'Spring/Summer & Fall/Winter wardrobe planning',
      '10 styled outfits OR 20-25 new items',
      '2-hour fitting sessions',
      'WhatsApp support during office hours'
    ],
    image: '/images/services/seasonal.svg',
  },
]

// Pricing packages
const packages = [
  {
    name: 'Essential',
    price: 'From $500',
    description: 'Perfect for individuals looking to refresh their personal style.',
    features: [
      '2-hour style consultation',
      'Wardrobe assessment',
      'Basic styling guide',
      'Shopping recommendations',
    ],
  },
  {
    name: 'Professional',
    price: 'From $1,500',
    description: 'Comprehensive styling service for professionals and public figures.',
    features: [
      '4-hour style consultation',
      'Complete wardrobe overhaul',
      'Personal shopping session',
      'Seasonal style updates',
      'Event styling',
    ],
  },
  {
    name: 'Custom',
    price: 'Custom Quote',
    description: 'Tailored solutions for editorial and commercial projects.',
    features: [
      'Project-based pricing',
      'Full creative direction',
      'Team coordination',
      'Multiple styling sessions',
      'Exclusive attention',
    ],
  },
]

export default function ServicesPage() {
  const journeyRef = useRef(null)
  const pricingRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: journeyRef,
    offset: ["start end", "end start"]
  })

  // Add state for current slide
  const [currentSlide, setCurrentSlide] = useState(0)

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? services.length - 1 : prev - 1))
  }

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === services.length - 1 ? 0 : prev + 1))
  }

  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className={`min-h-screen pt-24 bg-[#F5F5F5] ${chronicleDisplay.variable}`}>
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
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block mb-4"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-4 text-[#2A2725] leading-tight">
                What I Offer
              </h1>
              <div className="h-1 w-48 mx-auto bg-[#D4CBC0] rounded-full mt-4" />
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-[#4A4745] leading-relaxed max-w-2xl mx-auto font-semibold"
            >
              Personalized styling services designed to transform your look and boost your confidence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 overflow-hidden">
        <div className={`container mx-auto transition-colors duration-500 ${currentSlide === 1 || currentSlide === 3 ? 'bg-[#f2edea]' : ''}`}>
          <div className="relative px-16">
            <div className="max-w-6xl mx-auto">
              {/* Previous Button */}
              <button
                onClick={handlePrevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-4 text-[#2A2725] hover:text-[#4A4745] transition-colors duration-300"
                aria-label="Previous slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Next Button */}
              <button
                onClick={handleNextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-4 text-[#2A2725] hover:text-[#4A4745] transition-colors duration-300"
                aria-label="Next slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-start py-12`}
                >
                  {/* Text Content */}
                  <div>
                    <div className="mb-8">
                      <div className="inline-block">
                        <h3 className="text-4xl mb-3 font-[500] font-chronicle-display tracking-wide">{services[currentSlide].title}</h3>
                        <div className="h-0.5 w-full bg-gray-400"></div>
                      </div>
                      <div className="uppercase tracking-widest text-sm font-medium text-gray-500 mt-6 mb-4">PREMIER STYLE SUPPORT</div>
                      <p className="text-gray-800 leading-relaxed text-base">{services[currentSlide].description}</p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-xl font-serif italic">Features and Benefits:</h4>
                      <div className="space-y-2.5">
                        {services[currentSlide].features.map((feature) => (
                          <div key={feature} className="flex items-start">
                            <span className="block w-1 h-1 bg-gray-400 rounded-full mt-2 mr-3" />
                            <p className="text-gray-800 leading-relaxed text-base">{feature}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div>
                    <div className="aspect-[3/4] w-11/12 mx-auto overflow-hidden border border-[#364846]">
                      <img 
                        src={services[currentSlide].image} 
                        alt={services[currentSlide].title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slide Indicators */}
              <div className="flex justify-center gap-3 mt-8">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index 
                        ? 'bg-[#D4CBC0] ring-2 ring-[#2A2725]' 
                        : 'bg-[#D4CBC0]'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="-mt-11 pt-0 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl italic font-serif leading-relaxed px-8 py-6 border-2 border-[#364846] text-[#364846]">
              Note: Each package is designed to provide personalized guidance, support, and transformation, ensuring that you not only look your best but also feel empowered and confident in your personal style journey.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={journeyRef} className="py-24 relative overflow-hidden bg-[#F5F1EE]">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_0%,#E5DED8_0%,rgba(229,222,216,0)_70%)]" />
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#E5DED8] blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#D4CBC0] blur-3xl opacity-30 translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-block">
              <h2 className="text-5xl font-bold mb-4 text-[#2A2725]">
                How It Works
              </h2>
              <div className="h-1 w-48 mx-auto bg-[#D4CBC0] rounded-full mt-2" />
            </div>
          </motion.div>

          <div className="relative">
            <motion.div 
              className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#364846] hidden lg:block"
              style={{
                scaleY: scrollYProgress,
                transformOrigin: "top"
              }}
            />
            
            <div className="space-y-16 relative">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="group relative lg:w-1/2 lg:ml-auto lg:pl-16"
              >
                <div className="hidden lg:block absolute left-0 top-1/2 w-12 h-[1px] bg-[#364846]" />
                <div className="hidden lg:flex absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#D4CBC0] rounded-full items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500 ring-1 ring-[#312e2c]">
                  <span className="text-2xl font-bold text-white">01</span>
                </div>
                <div className="bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_30px_rgba(0,0,0,0.08)] transition-all duration-300 relative h-full flex flex-col border border-[#364846]">
                  <div className="relative flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold mb-2 text-[#2A2725]">Style Vision Questionnaire</h3>
                    <div className="h-0.5 w-full bg-[#364846]"></div>
                  </div>
                  <p className="text-[#4A4745] leading-relaxed mt-4 font-semibold">Begin your transformation with our comprehensive style assessment, designed to understand your unique aesthetic goals and lifestyle needs.</p>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="group relative lg:w-1/2 lg:pr-16"
              >
                <div className="hidden lg:block absolute right-0 top-1/2 w-12 h-[1px] bg-[#364846]" />
                <div className="hidden lg:flex absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#D4CBC0] rounded-full items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500 ring-1 ring-[#312e2c]">
                  <span className="text-2xl font-bold text-white">02</span>
                </div>
                <div className="bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_30px_rgba(0,0,0,0.08)] transition-all duration-300 relative h-full flex flex-col border border-[#364846]">
                  <div className="relative flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold mb-2 text-[#2A2725]">Style Discovery Session</h3>
                    <div className="h-0.5 w-full bg-[#364846]"></div>
                  </div>
                  <p className="text-[#4A4745] leading-relaxed mt-4 font-semibold">Connect in a personalized video consultation where we align your style aspirations with your authentic energy and personality.</p>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="group relative lg:w-1/2 lg:ml-auto lg:pl-16"
              >
                <div className="hidden lg:block absolute left-0 top-1/2 w-12 h-[1px] bg-[#364846]" />
                <div className="hidden lg:flex absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#D4CBC0] rounded-full items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500 ring-1 ring-[#312e2c]">
                  <span className="text-2xl font-bold text-white">03</span>
                </div>
                <div className="bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_30px_rgba(0,0,0,0.08)] transition-all duration-300 relative h-full flex flex-col border border-[#364846]">
                  <div className="relative flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold mb-2 text-[#2A2725]">Aesthetic Direction</h3>
                    <div className="h-0.5 w-full bg-[#364846]"></div>
                  </div>
                  <p className="text-[#4A4745] leading-relaxed mt-4 font-semibold">Collaborate on a curated inspiration board that captures your desired style direction and serves as our creative compass.</p>
                </div>
              </motion.div>

              {/* Step 4 */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="group relative lg:w-1/2 lg:pr-16"
              >
                <div className="hidden lg:block absolute right-0 top-1/2 w-12 h-[1px] bg-[#364846]" />
                <div className="hidden lg:flex absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#D4CBC0] rounded-full items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500 ring-1 ring-[#312e2c]">
                  <span className="text-2xl font-bold text-white">04</span>
                </div>
                <div className="bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_30px_rgba(0,0,0,0.08)] transition-all duration-300 relative h-full flex flex-col border border-[#364846]">
                  <div className="relative flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold mb-2 text-[#2A2725]">Wardrobe Evolution</h3>
                    <div className="h-0.5 w-full bg-[#364846]"></div>
                  </div>
                  <p className="text-[#4A4745] leading-relaxed mt-4 font-semibold">Receive a carefully curated selection of wardrobe essentials and statement pieces that align with your lifestyle and style goals.</p>
                </div>
              </motion.div>

              {/* Step 5 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="group relative lg:w-1/2 lg:ml-auto lg:pl-16"
              >
                <div className="hidden lg:block absolute left-0 top-1/2 w-12 h-[1px] bg-[#364846]" />
                <div className="hidden lg:flex absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#D4CBC0] rounded-full items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500 ring-1 ring-[#312e2c]">
                  <span className="text-2xl font-bold text-white">05</span>
                </div>
                <div className="bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_30px_rgba(0,0,0,0.08)] transition-all duration-300 relative h-full flex flex-col border border-[#364846]">
                  <div className="relative flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold mb-2 text-[#2A2725]">Personal Shopping Experience</h3>
                    <div className="h-0.5 w-full bg-[#364846]"></div>
                  </div>
                  <p className="text-[#4A4745] leading-relaxed mt-4 font-semibold">Enjoy a guided shopping experience, whether virtual or in-person, to acquire your carefully selected wardrobe pieces.</p>
                </div>
              </motion.div>

              {/* Step 6 */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="group relative lg:w-1/2 lg:pr-16"
              >
                <div className="hidden lg:block absolute right-0 top-1/2 w-12 h-[1px] bg-[#364846]" />
                <div className="hidden lg:flex absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#D4CBC0] rounded-full items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500 ring-1 ring-[#312e2c]">
                  <span className="text-2xl font-bold text-white">06</span>
                </div>
                <div className="bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_30px_rgba(0,0,0,0.08)] transition-all duration-300 relative h-full flex flex-col border border-[#364846]">
                  <div className="relative flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold mb-2 text-[#2A2725]">Style Integration</h3>
                    <div className="h-0.5 w-full bg-[#364846]"></div>
                  </div>
                  <p className="text-[#4A4745] leading-relaxed mt-4 font-semibold">Master your new wardrobe with a personalized style guide and expert styling tips for creating effortless, confident looks.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section ref={pricingRef} className="py-32 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_0%,#E5DED8_0%,rgba(229,222,216,0)_70%)]" />
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#D4CBC0] blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#A69B8D] blur-3xl opacity-20 translate-x-1/2 translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-block">
              <h2 className="text-5xl font-bold mb-4 text-[#2A2725]">
                Pricing Packages
              </h2>
              <div className="h-1 w-48 mx-auto bg-[#D4CBC0] rounded-full mt-2" />
            </div>
            <p className="text-xl text-[#4A4745] mt-6 max-w-2xl mx-auto">
              Choose the perfect package that aligns with your style goals and aspirations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#D4CBC0]/20 to-transparent transform group-hover:scale-105 transition-transform duration-500" />
                <div className="bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-2xl transition-all duration-500 relative h-full flex flex-col border border-[#364846]">
                  <div className="relative flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold mb-2 text-[#2A2725]">{pkg.name}</h3>
                    <div className="text-3xl font-bold text-[#A69B8D] mb-4 group-hover:text-[#8C8177] transition-colors duration-300">
                      {pkg.price}
                    </div>
                    <p className="text-[#4A4745] mb-8 min-h-[48px]">{pkg.description}</p>
                    
                    <ul className="space-y-4 mb-10 flex-grow">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-center text-[#4A4745]">
                          <span className="w-2 h-2 bg-[#D4CBC0] rounded-full mr-3 group-hover:bg-[#A69B8D] transition-colors duration-300" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link 
                        href="/contact"
                        className="block w-full py-4 px-8 bg-[#2A2725] text-white rounded-xl font-semibold hover:bg-[#4A4745] transition-colors duration-300 shadow-lg hover:shadow-xl"
                      >
                        Get Started
                      </Link>
                    </motion.div>
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