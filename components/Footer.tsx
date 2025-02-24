'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-3 gap-8">
          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold mb-3">NAVIGATION</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm text-gray-600 hover:text-gray-900">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-600 hover:text-gray-900">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/legal" className="text-sm text-gray-600 hover:text-gray-900">
                  Legal
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold mb-3">SERVICES</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/personal-styling" className="text-sm text-gray-600 hover:text-gray-900">
                  Personal Styling
                </Link>
              </li>
              <li>
                <Link href="/services/editorial-styling" className="text-sm text-gray-600 hover:text-gray-900">
                  Editorial Styling
                </Link>
              </li>
              <li>
                <Link href="/services/commercial-styling" className="text-sm text-gray-600 hover:text-gray-900">
                  Commercial Styling
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-3">CONTACT</h4>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600">
                Los Angeles, CA
              </li>
              <li>
                <a href="mailto:styledbyrainai@gmail.com" className="text-sm text-gray-600 hover:text-gray-900">
                 styledbyrainai@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+15551234567" className="text-sm text-gray-600 hover:text-gray-900">
                  +1 (555) 123-4567
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://threads.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
                aria-label="Threads"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 192 192">
                  <path fill="currentColor" d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.2838 81.7233C74.9948 83.0954 59.1312 96.9879 60.0797 116.292C60.5473 126.084 65.5598 134.508 74.0193 140.011C81.4925 144.862 91.4147 147.01 101.702 146.465C116.003 145.696 127.895 139.134 134.997 127.324C139.882 119.236 142.711 109.276 142.805 97.8095C144.148 98.3857 145.445 98.9779 146.682 99.5862C150.937 101.537 154.378 103.959 156.796 106.811C160.126 110.713 161.758 115.945 161.596 122.214C161.359 131.188 157.615 139.456 150.759 146.312C143.297 153.774 133.611 158.384 122.619 159.803C120.751 160.06 118.873 160.185 117.014 160.185C106.735 160.185 97.3286 157.474 89.3345 152.349C80.2044 146.521 73.8579 137.663 71.0467 126.297C70.8615 125.459 70.6971 124.627 70.5535 123.799C69.7444 119.872 69.5615 116.045 69.5615 112.193C69.5615 110.116 69.6238 108.031 69.7488 105.943C70.3421 94.6882 73.8062 83.8221 79.9357 74.0112L66.3457 64.6796C58.9789 76.8423 54.8495 90.4117 54.1285 104.093C53.9896 106.368 53.9197 108.652 53.9197 110.923C53.9197 115.416 54.1431 119.879 54.5887 124.264C54.7532 125.207 54.9392 126.153 55.1464 127.099C58.5759 141.135 66.4956 152.088 77.9191 159.094C87.9251 165.262 99.3846 168.578 111.878 168.578C114.235 168.578 116.609 168.422 118.976 168.109C132.601 166.379 144.624 160.664 153.896 151.392C162.564 142.724 167.318 132.032 167.617 120.741C167.845 111.845 165.751 104.073 160.818 98.0985C157.057 93.6825 152.089 90.3275 146.112 87.6875C144.7 87.0054 143.159 86.3508 141.537 85.7294V88.9883ZM97.3726 129.472C88.2063 129.472 81.6566 125.275 81.0723 115.644C80.2479 102.072 91.7668 92.7397 107.838 91.7659C108.109 91.7476 108.381 91.7312 108.652 91.7166C115.732 91.3405 122.504 91.7148 128.841 92.8073C128.374 101.687 126.418 109.491 123.116 115.79C118.299 124.689 109.153 129.472 97.3726 129.472Z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 