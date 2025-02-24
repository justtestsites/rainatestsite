'use client'

import { motion } from 'framer-motion'
import Header from '@/components/shared/Header'

export default function LegalPage() {
  return (
    <main className="min-h-screen pt-24 bg-[#F2EFED]">
      <Header />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl font-bold mb-12 text-[#2A2725]">Legal Information</h1>

            {/* Terms of Service */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-[#2A2725]">Terms of Service</h2>
              <div className="prose prose-neutral max-w-none">
                <p className="mb-4">
                  By accessing and using the services provided by Raina I. Styling, you agree to comply with and be bound by the following terms and conditions.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-4">1. Services</h3>
                <p className="mb-4">
                  Raina I. Styling provides personal styling, editorial styling, and commercial styling services. All services are subject to availability and professional assessment. We reserve the right to refuse service to anyone for any reason at any time.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-4">2. Appointments and Cancellations</h3>
                <p className="mb-4">
                  - Appointments must be scheduled in advance<br />
                  - 48-hour cancellation notice is required<br />
                  - Late cancellations or no-shows may result in a cancellation fee
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-4">3. Payment Terms</h3>
                <p className="mb-4">
                  - Payment is required at the time of booking for personal styling services<br />
                  - Commercial and editorial projects require a 50% deposit<br />
                  - All prices are subject to change without notice
                </p>
              </div>
            </div>

            {/* Privacy Policy */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-[#2A2725]">Privacy Policy</h2>
              <div className="prose prose-neutral max-w-none">
                <p className="mb-4">
                  Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-4">Information We Collect</h3>
                <p className="mb-4">
                  We collect information that you provide directly to us, including:<br />
                  - Name and contact information<br />
                  - Measurements and style preferences<br />
                  - Payment information<br />
                  - Photos and other content you share with us
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-4">How We Use Your Information</h3>
                <p className="mb-4">
                  We use your information to:<br />
                  - Provide and improve our services<br />
                  - Communicate with you about appointments and services<br />
                  - Process payments<br />
                  - Send you marketing communications (with your consent)
                </p>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-[#2A2725]">Intellectual Property</h2>
              <div className="prose prose-neutral max-w-none">
                <p className="mb-4">
                  All content on this website, including images, text, logos, and designs, is the property of Raina I. Styling and is protected by copyright and other intellectual property laws.
                </p>
                <p className="mb-4">
                  For editorial and commercial projects, specific usage rights will be outlined in individual contracts and agreements.
                </p>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-[#2A2725]">Disclaimer</h2>
              <div className="prose prose-neutral max-w-none">
                <p className="mb-4">
                  While we strive to provide the best possible service, we make no guarantees about the results or outcome of our styling services. Style is subjective, and results may vary based on individual preferences and circumstances.
                </p>
                <p className="mb-4">
                  We are not responsible for any damages or losses resulting from the use of our services or any purchases made based on our recommendations.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-[#2A2725]">Contact Information</h2>
              <div className="prose prose-neutral max-w-none">
                <p className="mb-4">
                  For any questions or concerns about these legal terms, please contact us at:
                </p>
                <p className="mb-4">
                  Raina I. Styling<br />
                  Los Angeles, CA<br />
                  Email: styledbyrainai@gmail.com<br />
                  Phone: +1 (323) 251-4438
                </p>
              </div>
            </div>

            {/* Last Updated */}
            <div className="mt-16 text-sm text-neutral-600">
              <p>Last Updated: January 2024</p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 