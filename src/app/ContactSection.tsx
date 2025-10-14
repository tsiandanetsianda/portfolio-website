import { Mail, LinkedinIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Inter, Playfair_Display } from 'next/font/google';

// Load Google Fonts
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfairDisplay = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair-display' });

const ContactSection = () => {
  return (
    <section className={`min-h-screen flex items-center justify-center bg-gradient-to-r from-white to-gray-50 ${inter.variable} ${playfairDisplay.variable}`}>
      <div className="w-full max-w-6xl mx-auto px-6 py-32">
        <div className="space-y-24">
          {/* Header */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className={`text-4xl md:text-6xl font-light text-gray-900 ${playfairDisplay.className}`}>
              Let's create something
              <span className="block mt-2">meaningful together</span>
            </h2>
          </motion.div>

          {/* Contact Links */}
          <div className="space-y-12">
            <motion.a 
              href="mailto:tsiandanetsianda@gmail.com"
              className="group block border-t border-gray-200 py-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <div className="flex items-center justify-between">
                <div className="space-y-4">
                  <span className="text-sm uppercase tracking-wide text-gray-500">
                    Email
                  </span>
                  <p className="text-2xl md:text-3xl text-gray-900 font-light group-hover:-translate-y-1 transition-transform duration-300">
                    tsiandanetsianda@gmail.com
                  </p>
                </div>
                <Mail className="w-6 h-6 text-gray-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </motion.a>

            <motion.a 
              href="https://www.linkedin.com/in/tsianda-netsianda-b07b41231/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block border-t border-gray-200 py-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              <div className="flex items-center justify-between">
                <div className="space-y-4">
                  <span className="text-sm uppercase tracking-wide text-gray-500">
                    LinkedIn
                  </span>
                  <p className="text-2xl md:text-3xl text-gray-900 font-light group-hover:-translate-y-1 transition-transform duration-300">
                    Connect with me
                  </p>
                </div>
                <LinkedinIcon className="w-6 h-6 text-gray-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </motion.a>
          </div>

          {/* Footer Text */}
          <motion.div 
            className="text-center pt-24 border-t border-gray-200"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <p className="text-lg text-gray-600 font-light">
              Looking forward to hearing from you
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;