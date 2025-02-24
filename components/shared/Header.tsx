'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 right-0 py-.5 bg-white/80 backdrop-blur-md z-50">
      <div className="container mx-auto px-6 flex items-center">
        <Link href="/" className="relative w-24 h-24">
          <Image
            src="/images/home/logo.png"
            alt="RI Styling Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>
        <nav className="hidden md:flex items-center ml-auto space-x-8">
          <Link href="/" className="text-gray-900 hover:text-gray-700 transition-colors font-semibold text-lg">
            Home
          </Link>
          <Link href="/about" className="text-gray-900 hover:text-gray-700 transition-colors font-semibold text-lg">
            About
          </Link>
          <Link href="/portfolio" className="text-gray-900 hover:text-gray-700 transition-colors font-semibold text-lg">
            Portfolio
          </Link>
          <Link href="/services" className="text-gray-900 hover:text-gray-700 transition-colors font-semibold text-lg">
            Services
          </Link>
          <Link href="/contact" className="text-gray-900 hover:text-gray-700 transition-colors font-semibold text-lg">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 ml-auto"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-neutral-100 md:hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <Link
                href="/"
                className="block py-3 text-gray-900 hover:text-gray-700 transition-colors font-semibold text-lg"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block py-3 text-gray-900 hover:text-gray-700 transition-colors font-semibold text-lg"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/portfolio"
                className="block py-3 text-gray-900 hover:text-gray-700 transition-colors font-semibold text-lg"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/services"
                className="block py-3 text-gray-900 hover:text-gray-700 transition-colors font-semibold text-lg"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="block py-3 text-gray-900 hover:text-gray-700 transition-colors font-semibold text-lg"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header; 