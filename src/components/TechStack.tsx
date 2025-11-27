'use client'

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Technology {
  name: string;
  subtitle?: string;
}

interface TechCategory {
  title: string;
  description: string;
  technologies: Technology[];
  emphasis: 'high' | 'medium' | 'low';
}

const techCategories: TechCategory[] = [
  {
    title: 'Production',
    description: 'Professional work',
    emphasis: 'high',
    technologies: [
      { name: 'TypeScript' },
      { name: 'Next.js' },
      { name: 'React' },
      { name: 'Tailwind CSS' },
      { name: 'tRPC' },
      { name: 'Supabase' },
      { name: 'Node.js' },
      { name: 'PostgreSQL' },
      { name: 'Git' },
      { name: 'Agile' },
      { name: 'TDD' },
    ],
  },
  {
    title: 'Projects',
    description: 'Personal projects & applications',
    emphasis: 'medium',
    technologies: [
      { name: 'React Native' },
      { name: 'Python' },
      { name: 'Flask' },
      { name: 'MySQL' },
      { name: 'MongoDB' },
      { name: 'SQLite' },
      { name: 'AWS' },
      { name: 'Docker' },
      { name: 'CI/CD' },
      { name: 'Rasa' },
      { name: 'YOLO' },
      { name: 'scikit-learn' },
      { name: 'TinyLlama' },
      { name: 'HTML' },
      { name: 'JavaScript' },
    ],
  },
  {
    title: 'Academic',
    description: 'Coursework & foundational skills',
    emphasis: 'low',
    technologies: [
      { name: 'Java' },
      { name: 'C/C++' },
      { name: 'Linux' },
      { name: 'Data Modeling' },
    ],
  },
];

const TechStack = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const categories = document.querySelectorAll('.tech-category');

    categories.forEach((category, index) => {
      gsap.from(category, {
        scrollTrigger: {
          trigger: category,
          start: 'top bottom-=100',
          end: 'top center',
          scrub: 1,
        },
        y: 60,
        opacity: 0,
      });
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  const getEmphasisStyles = (emphasis: 'high' | 'medium' | 'low') => {
    // All pills same size now
    return {
      pill: 'px-4 py-1.5 text-sm',
      gap: 'gap-2',
    };
  };

  return (
    <section ref={sectionRef} className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="space-y-4 mb-6">
            <div className="flex items-center space-x-4">
              <div className="h-[1px] bg-border-subtle w-16"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold font-['Playfair_Display'] leading-tight text-text-primary">
              Tech<br />Stack
            </h2>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            {techCategories.map((category, categoryIndex) => {
              const styles = getEmphasisStyles(category.emphasis);

              return (
                <div
                  key={category.title}
                  className="tech-category"
                >
                  {/* Category Header */}
                  <div className="mb-2">
                    <p className="text-sm text-text-secondary mb-1.5">
                      {category.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className={`flex flex-wrap ${styles.gap}`}>
                    {category.technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className={`tech-pill ${styles.pill} rounded-lg border border-border bg-white
                          font-medium text-text-primary transition-all duration-300
                          hover:border-text-tertiary hover:shadow-sm hover:-translate-y-0.5`}
                      >
                        <div className="flex flex-col">
                          <span>{tech.name}</span>
                          {tech.subtitle && (
                            <span className="text-xs text-text-secondary font-normal mt-0.5">
                              {tech.subtitle}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Divider (except for last category) */}
                  {categoryIndex < techCategories.length - 1 && (
                    <div className="mt-4 h-[1px] bg-border-subtle"></div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechStack;
