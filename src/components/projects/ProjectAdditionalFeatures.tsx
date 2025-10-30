'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

interface ProjectAdditionalFeaturesProps {
  features: string[];
  screenshots: string[];
  brandColor: string;
}

export default function ProjectAdditionalFeatures({
  features,
  screenshots,
  brandColor,
}: ProjectAdditionalFeaturesProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-8 sm:mb-10 md:mb-12 text-neutral-900"
        >
          More Features
        </motion.h2>

        {/* Screenshots Gallery */}
        <div className="relative">
          <motion.div
            ref={scrollContainerRef}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 sm:gap-6 pb-6 sm:pb-8"
            style={{
              scrollBehavior: 'smooth',
              scrollSnapType: 'x mandatory',
            }}
          >
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-shrink-0 snap-center relative"
              >
                {/* Shadow/Glow */}
                <div
                  className="absolute -inset-1.5 sm:-inset-2 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl opacity-20"
                  style={{ backgroundColor: brandColor }}
                />

                {/* Screenshot Container */}
                <div className="relative h-[400px] sm:h-[500px] md:h-[600px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
                  <Image
                    src={screenshot}
                    alt={`Screenshot ${index + 1}`}
                    width={0}
                    height={600}
                    sizes="100vw"
                    className="w-auto h-full object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Custom CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
