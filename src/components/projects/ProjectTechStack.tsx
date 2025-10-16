'use client';

import { motion } from 'framer-motion';

interface TechItem {
  name: string;
  icon: string;
  category: 'Frontend' | 'Backend' | 'Infrastructure' | 'Tools';
}

interface ProjectTechStackProps {
  techStack: TechItem[];
  brandColor: string;
}

export default function ProjectTechStack({
  techStack,
  brandColor,
}: ProjectTechStackProps) {
  const categories = ['Frontend', 'Backend', 'Infrastructure', 'Tools'];

  const getTechsByCategory = (category: string) => {
    return techStack.filter((tech) => tech.category === category);
  };

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-neutral-900"
        >
          Built With
        </motion.h2>

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => {
            const techs = getTechsByCategory(category);
            if (techs.length === 0) return null;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                {/* Category Label */}
                <p className="text-sm text-neutral-500 mb-4">
                  {category}
                </p>

                {/* Technologies - Simple Pills */}
                <div className="flex flex-wrap gap-2.5">
                  {techs.map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + index * 0.03,
                      }}
                      whileHover={{
                        y: -2,
                        borderColor: brandColor,
                        transition: { duration: 0.2 },
                      }}
                      className="px-4 py-2 text-sm rounded-lg border border-neutral-200 bg-white
                        font-medium text-neutral-900 transition-all duration-300
                        hover:shadow-sm cursor-default"
                    >
                      {tech.name}
                    </motion.div>
                  ))}
                </div>

                {/* Divider (except for last category) */}
                {categoryIndex < categories.filter(cat => getTechsByCategory(cat).length > 0).length - 1 && (
                  <div className="mt-12 h-[1px] bg-neutral-200"></div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
