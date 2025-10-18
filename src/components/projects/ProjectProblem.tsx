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
      <div className="max-w-5xl mx-auto w-full text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-semibold tracking-tight mb-16 text-neutral-900"
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
          <p className="text-xl font-normal text-neutral-600 leading-relaxed max-w-3xl mx-auto">
            {description}
          </p>

          <motion.div
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
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {points.map((point, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-left"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold"
                    style={{ backgroundColor: brandColor }}
                  >
                    {index + 1}
                  </div>
                  <p className="text-lg font-normal text-neutral-700 leading-relaxed">{point}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
