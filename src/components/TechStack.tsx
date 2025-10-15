'use client'

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
}

const technologies: Technology[] = [
  // Frontend
  { name: 'React', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },

  // Backend
  { name: 'tRPC', category: 'backend' },
  { name: 'Node.js', category: 'backend' },

  // Database
  { name: 'PostgreSQL', category: 'database' },

  // Tools
  { name: 'Git', category: 'tools' },
  { name: 'GitHub', category: 'tools' },
];

const categoryConfig = {
  frontend: {
    label: 'Frontend',
    color: 'bg-brand/10 text-brand border-brand/20',
  },
  backend: {
    label: 'Backend',
    color: 'bg-accent-dark/10 text-text-primary border-accent-dark/20',
  },
  database: {
    label: 'Database',
    color: 'bg-surface text-text-secondary border-border',
  },
  tools: {
    label: 'Tools',
    color: 'bg-surface text-text-secondary border-border',
  },
};

const TechStack = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const techItems = document.querySelectorAll('.tech-item');

    techItems.forEach((item, index) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top bottom-=50',
          end: 'top center+=100',
          scrub: 1,
        },
        y: 30,
        opacity: 0,
        scale: 0.9,
      });
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  // Group technologies by category
  const groupedTech = technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech);
    return acc;
  }, {} as Record<string, Technology[]>);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="space-y-16 mb-20">
            <div className="flex items-center space-x-4">
              <div className="h-[1px] bg-border-subtle w-16"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold font-['Playfair_Display'] leading-tight text-text-primary">
              Tech<br/>Stack
            </h2>
          </div>

          {/* Technology Grid by Category */}
          <div className="space-y-12">
            {Object.entries(groupedTech).map(([category, techs]) => (
              <div key={category} className="space-y-6">
                {/* Category Label */}
                <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-[0.15em]">
                  {categoryConfig[category as keyof typeof categoryConfig].label}
                </h3>

                {/* Tech items for this category */}
                <div className="flex flex-wrap gap-3">
                  {techs.map((tech, index) => (
                    <div
                      key={`${tech.name}-${index}`}
                      className={`tech-item px-6 py-3 rounded-lg border font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-sm ${
                        categoryConfig[category as keyof typeof categoryConfig].color
                      }`}
                    >
                      {tech.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Optional: Summary text */}
          <div className="mt-16 pt-12 border-t border-border">
            <p className="text-text-secondary leading-relaxed text-center max-w-2xl mx-auto">
              Technologies used in professional work experience, with a focus on full-stack development and modern web frameworks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
