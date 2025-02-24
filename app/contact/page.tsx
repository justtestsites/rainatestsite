'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/shared/Header'

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission logic here
  }

  return (
    <main className="min-h-screen pt-24 bg-neutral-50">
      <Header />

      {/* Contact Form Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2A2725] to-[#4A4745]" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_120%,#F2EFED_0%,rgba(242,239,237,0)_50%)]" />
        <div className="container mx-auto px-4 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 bg-[#D4CBC4] p-4 md:p-8 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#2A2725] mb-1 md:mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 md:px-4 py-1.5 md:py-2 rounded-lg bg-white border border-[#B1A599] focus:outline-none focus:ring-2 focus:ring-[#2A2725] text-[#2A2725] placeholder-[#4A4745]/50 text-sm md:text-base"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#2A2725] mb-1 md:mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 md:px-4 py-1.5 md:py-2 rounded-lg bg-white border border-[#B1A599] focus:outline-none focus:ring-2 focus:ring-[#2A2725] text-[#2A2725] placeholder-[#4A4745]/50 text-sm md:text-base"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-[#2A2725] mb-1 md:mb-2">
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  required
                  className="w-full px-3 md:px-4 py-1.5 md:py-2 rounded-lg bg-white border border-[#B1A599] focus:outline-none focus:ring-2 focus:ring-[#2A2725] text-[#2A2725] text-sm md:text-base"
                >
                  <option value="">Select a budget range</option>
                  <option value="500-1000">$500 - $1,000</option>
                  <option value="1000-2500">$1,000 - $2,500</option>
                  <option value="2500-5000">$2,500 - $5,000</option>
                  <option value="5000+">$5,000+</option>
                </select>
              </div>

              <div>
                <label htmlFor="referral" className="block text-sm font-medium text-[#2A2725] mb-1 md:mb-2">
                  Where did you hear about Raina I Styling?
                </label>
                <textarea
                  id="referral"
                  name="referral"
                  required
                  rows={2}
                  className="w-full px-3 md:px-4 py-1.5 md:py-2 rounded-lg bg-white border border-[#B1A599] focus:outline-none focus:ring-2 focus:ring-[#2A2725] text-[#2A2725] placeholder-[#4A4745]/50 text-sm md:text-base"
                  placeholder="Please let us know how you found us..."
                />
              </div>

              <div>
                <label htmlFor="startDate" className="block text-sm font-medium text-[#2A2725] mb-1 md:mb-2">
                  When would you like to start?
                </label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  required
                  className="w-full px-3 md:px-4 py-1.5 md:py-2 rounded-lg bg-white border border-[#B1A599] focus:outline-none focus:ring-2 focus:ring-[#2A2725] text-[#2A2725] text-sm md:text-base"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#2A2725] mb-1 md:mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-3 md:px-4 py-1.5 md:py-2 rounded-lg bg-white border border-[#B1A599] focus:outline-none focus:ring-2 focus:ring-[#2A2725] text-[#2A2725] placeholder-[#4A4745]/50 text-sm md:text-base"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#2A2725] mb-1 md:mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-3 md:px-4 py-1.5 md:py-2 rounded-lg bg-white border border-[#B1A599] focus:outline-none focus:ring-2 focus:ring-[#2A2725] text-[#2A2725] placeholder-[#4A4745]/50 text-sm md:text-base"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 md:px-8 py-2.5 md:py-3 bg-white text-[#2A2725] rounded-full hover:bg-white/90 transition-colors font-semibold shadow-md text-sm md:text-base"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 