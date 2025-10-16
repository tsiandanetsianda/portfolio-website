'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';

interface ProjectGalleryProps {
  screenshots: string[];
  brandColor: string;
}

export default function ProjectGallery({
  screenshots,
  brandColor,
}: ProjectGalleryProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth - container.clientWidth;
      const percentage = (scrollLeft / scrollWidth) * 100;
      setScrollPercentage(percentage);
    }
  };

  return (
    <section className="py-24 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-neutral-900"
        >
          Screenshots
        </motion.h2>

        {/* Horizontal Scroll Container */}
        <motion.div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-6 pb-8"
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
              className="flex-shrink-0 snap-center w-80 h-[600px] relative"
            >
              {/* Shadow/Glow */}
              <div
                className="absolute -inset-2 rounded-2xl blur-xl opacity-20"
                style={{ backgroundColor: brandColor }}
              />

              {/* Screenshot Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow">
                <Image
                  src={screenshot}
                  alt={`Screenshot ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Progress Bar */}
        <div className="w-full bg-neutral-200 h-1.5 mt-6 rounded-full overflow-hidden">
          <div
            className="h-full transition-all duration-300 rounded-full"
            style={{
              width: `${scrollPercentage}%`,
              backgroundColor: brandColor,
            }}
          />
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
