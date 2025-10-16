'use client';

import { motion } from 'framer-motion';

interface ProjectProblemProps {
  title: string;
  description: string;
  points: string[];
  brandColor: string;
}

export default function ProjectProblem({
  title,
  description,
  points,
  brandColor,
}: ProjectProblemProps) {
  return (
    <section className="min-h-screen py-24 px-6 flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-neutral-900"
        >
          {title}
        </motion.h2>

        {/* Text Content Only */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <p className="text-xl text-neutral-600 leading-relaxed">
            {description}
          </p>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3,
                },
              },
            }}
            className="space-y-4"
          >
            {points.map((point, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex items-start gap-3 text-lg text-neutral-600"
              >
                <span
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: brandColor }}
                />
                <span>{point}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
