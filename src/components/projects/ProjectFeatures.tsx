'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

interface Feature {
  title: string;
  description: string;
  video: string;
}

interface ProjectFeaturesProps {
  features: Feature[];
  brandColor: string;
}

export default function ProjectFeatures({
  features,
  brandColor,
}: ProjectFeaturesProps) {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Intersection Observer for video play/pause based on visibility
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    videoRefs.current.forEach((video) => {
      if (video) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
                video.play().catch(() => {});
              } else {
                video.pause();
              }
            });
          },
          {
            threshold: 0.3,
          }
        );

        observer.observe(video);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [features]);

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-20 text-neutral-900"
        >
          Key Features
        </motion.h2>

        {/* Vertical Stack of Features */}
        <div className="space-y-32">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* Text Content - Left Side */}
              <div className="space-y-6">
                <h3
                  className="text-3xl md:text-4xl font-bold"
                  style={{ color: brandColor }}
                >
                  {feature.title}
                </h3>
                <p className="text-xl text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Video - Right Side */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                {/* Glow Effect */}
                <div
                  className="absolute -inset-4 rounded-3xl blur-2xl opacity-20"
                  style={{ backgroundColor: brandColor }}
                />

                {/* Video Container with Device Frame Feel */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.2,
                  }}
                  className="relative aspect-[9/16] max-w-sm mx-auto rounded-3xl overflow-hidden shadow-2xl bg-black"
                >
                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    src={feature.video}
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
