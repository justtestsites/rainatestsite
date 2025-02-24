import Link from 'next/link'
import Image from 'next/image'
import { Instagram, LinkedinIcon } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThreads } from '@fortawesome/free-brands-svg-icons'

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'Legal', href: '/legal' },
  ],
  social: [
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/raaaaiina/' },
    { 
      name: 'Threads', 
      icon: () => <FontAwesomeIcon icon={faThreads} className="w-[30px] h-[30px]" />, 
      href: 'https://www.threads.net/@raaaaiina' 
    },
    { name: 'LinkedIn', icon: LinkedinIcon, href: 'https://www.linkedin.com/' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-white py-8 lg:py-4">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Mobile Layout (visible on small screens) */}
        <div className="flex flex-col space-y-8 lg:hidden">
          {/* Logo and Social */}
          <div className="flex flex-col items-center space-y-4">
            <Link href="/" className="relative w-20 h-20 sm:w-24 sm:h-24">
              <Image
                src="/images/home/logo.png"
                alt="RI Styling Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>
            <div className="flex gap-4">
              {navigation.social.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-neutral-600 hover:text-neutral-900 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${item.name} page`}
                  >
                    <span className="sr-only">{item.name}</span>
                    {item.name === 'Threads' ? (
                      <Icon />
                    ) : (
                      <Icon className="w-[23px] h-[23px]" />
                    )}
                  </a>
                )
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center">
            <span className="text-xs font-medium text-neutral-600 mb-4">
              NAVIGATION
            </span>
            <ul className="flex flex-col items-center gap-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center">
            <span className="text-xs font-medium text-neutral-600 block mb-4">
              CONTACT
            </span>
            <a
              href="mailto:styledbyrainai@gmail.com"
              className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors block mb-2"
            >
              styledbyrainai@gmail.com
            </a>
            <span className="text-sm text-neutral-600 block">
              +1 (323) 251-4438
            </span>
          </div>
        </div>

        {/* Desktop Layout (visible on large screens) */}
        <div className="hidden lg:flex lg:items-center lg:justify-between">
          {/* Left: Logo and Social */}
          <div className="flex items-center gap-8">
            <Link href="/" className="relative w-24 h-24">
              <Image
                src="/images/home/logo.png"
                alt="RI Styling Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>
            <div className="flex gap-2">
              {navigation.social.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-neutral-600 hover:text-neutral-900 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${item.name} page`}
                  >
                    <span className="sr-only">{item.name}</span>
                    {item.name === 'Threads' ? (
                      <Icon />
                    ) : (
                      <Icon className="w-[23px] h-[23px]" />
                    )}
                  </a>
                )
              })}
            </div>
          </div>

          {/* Center: Navigation */}
          <div className="flex flex-col items-center">
            <span className="text-xs font-medium text-neutral-600 mb-2">
              NAVIGATION
            </span>
            <ul className="flex gap-6">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Contact */}
          <div className="text-right">
            <span className="text-xs font-medium text-neutral-600 block mb-2">
              CONTACT
            </span>
            <a
              href="mailto:styledbyrainai@gmail.com"
              className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors block"
            >
              styledbyrainai@gmail.com
            </a>
            <span className="text-sm text-neutral-600 block">
              +1 (323) 251-4438
            </span>
          </div>
        </div>

        {/* Copyright - centered below */}
        <div className="text-center mt-8 pt-6 lg:mt-4 lg:pt-4 border-t border-neutral-200">
          <p className="text-xs text-neutral-600">
            © 2025 Raina I. Styling. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 