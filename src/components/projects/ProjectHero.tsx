'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

interface ProjectHeroProps {
  name: string;
  tagline: string;
  heroImage: string;
  background?: string;
  brandColor: string;
}

export default function ProjectHero({
  name,
  tagline,
  heroImage,
  background,
  brandColor,
}: ProjectHeroProps) {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  // Convert hex color to RGB for gradient with opacity
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : { r: 0, g: 0, b: 0 };
  };

  const rgb = hexToRgb(brandColor);

  return (
    <motion.section
      style={{ opacity, scale }}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            background ||
            `linear-gradient(135deg, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.1) 0%, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.05) 100%)`,
        }}
      />

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1),transparent_50%)]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-6xl md:text-7xl font-bold tracking-tight mb-6"
            style={{ color: brandColor }}
          >
            {name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-neutral-600 max-w-lg"
          >
            {tagline}
          </motion.p>
        </motion.div>

        {/* Hero Image with Device Mockup Style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative w-full aspect-[9/16] max-w-md mx-auto"
          >
            {/* Shadow and glow effect */}
            <div
              className="absolute -inset-4 rounded-3xl blur-2xl opacity-30"
              style={{ backgroundColor: brandColor }}
            />

            {/* Image Container */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={heroImage}
                alt={`${name} preview`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 rounded-full flex items-start justify-center p-2"
          style={{ borderColor: brandColor }}
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: brandColor }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
