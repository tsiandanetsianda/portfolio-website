import { Mail, LinkedinIcon, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { Inter, Playfair_Display } from 'next/font/google';
import MagneticButton from '@/components/MagneticButton';

// Load Google Fonts
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfairDisplay = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair-display' });

const ContactSection = () => {
  return (
    <section className={`min-h-screen flex items-center justify-center bg-background ${inter.variable} ${playfairDisplay.variable}`}>
      <div className="w-full max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="space-y-20">
          {/* Header */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className={`text-4xl md:text-5xl font-semibold text-text-primary leading-tight ${playfairDisplay.className}`}>
              Let's create something
              <span className="block mt-2">meaningful together</span>
            </h2>
          </motion.div>

          {/* Contact Links */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <MagneticButton strength={0.15}>
                <a
                  href="mailto:tsiandanetsianda@gmail.com"
                  className="group block border-t border-border py-10 hover:border-brand transition-colors duration-350"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="space-y-3 flex-1 min-w-0">
                      <span className="text-sm uppercase tracking-[0.15em] text-text-tertiary font-medium">
                        Email
                      </span>
                      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-brand font-medium group-hover:-translate-y-1 transition-transform duration-300 break-all sm:break-normal">
                        tsiandanetsianda@gmail.com
                      </p>
                    </div>
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-brand group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                  </div>
                </a>
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              <MagneticButton strength={0.15}>
                <a
                  href="https://www.linkedin.com/in/tsianda-netsianda-b07b41231/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border-t border-border py-10 hover:border-brand transition-colors duration-350"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="space-y-3 flex-1 min-w-0">
                      <span className="text-sm uppercase tracking-[0.15em] text-text-tertiary font-medium">
                        LinkedIn
                      </span>
                      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-brand font-medium group-hover:-translate-y-1 transition-transform duration-300">
                        Connect with me
                      </p>
                    </div>
                    <LinkedinIcon className="w-5 h-5 sm:w-6 sm:h-6 text-brand group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                  </div>
                </a>
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            >
              <MagneticButton strength={0.15}>
                <a
                  href="https://drive.google.com/uc?export=download&id=1KV5z_6K2_j9PseiC-fofNXN8jfdHRtzI"
                  download="Tsianda_Netsianda_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border-t border-border py-10 hover:border-brand transition-colors duration-350"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="space-y-3 flex-1 min-w-0">
                      <span className="text-sm uppercase tracking-[0.15em] text-text-tertiary font-medium">
                        Resume
                      </span>
                      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-brand font-medium group-hover:-translate-y-1 transition-transform duration-300">
                        Download my CV
                      </p>
                    </div>
                    <Download className="w-5 h-5 sm:w-6 sm:h-6 text-brand group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                  </div>
                </a>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Footer Text */}
          <motion.div
            className="text-left pt-20 border-t border-border"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          >
            <p className="text-lg text-text-secondary font-normal">
              Looking forward to hearing from you
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;