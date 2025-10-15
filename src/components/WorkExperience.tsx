'use client'

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Experience {
  id: string;
  company: string;
  role: string;
  type: string;
  duration: string;
  location: string;
  logo: string;
  description: string;
  achievements: string[];
  techStack: string[];
  current?: boolean;
}

const experiences: Experience[] = [
  {
    id: 'mohara',
    company: 'MOHARA',
    role: 'Software Engineer Intern',
    type: 'Internship',
    duration: 'Jul 2025 - Oct 2025 · 4 months',
    location: 'City of Cape Town, Western Cape, South Africa · Hybrid',
    logo: '/MOHARA-LOGO-2.png',
    description: 'Worked on an enterprise platform that tracks time and manages resources across teams.',
    achievements: [
      'Built a full-stack feature enabling teams to create, assign, and track client projects',
      'Improved user experience by implementing optimistic updates and state management patterns, making the interface feel instant even during server processing',
      'Developed secure role-based access control allowing different permission levels for Admins, Managers, and team Members'
    ],
    techStack: ['Next.js', 'TypeScript', 'React', 'PostgreSQL', 'tRPC', 'Tailwind CSS']
  },
  {
    id: 'moshal',
    company: 'Moshal Program',
    role: 'Career Champion',
    type: 'Full-time',
    duration: 'Jun 2025 - Present · 5 months',
    location: 'South Africa',
    logo: '/MOSHAL-LOGO.png',
    description: 'Supporting Moshal scholars by enhancing access to career development pathways and helping them make informed professional decisions.',
    achievements: [
      'Conduct continuous research and resource curation to identify high-quality opportunities',
      'Engage with industry networks to share opportunities for graduate programs, internships, and vacation work',
      'Support scholars in making informed professional decisions through personalized guidance'
    ],
    techStack: ['Research', 'Career Development', 'Industry Networking'],
    current: true
  }
];

const WorkExperience = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    const items = document.querySelectorAll('.timeline-item');

    items.forEach((item, index) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top bottom-=100',
          end: 'top center',
          scrub: 1,
        },
        y: 60,
        opacity: 0,
        scale: 0.95,
      });
    });

    // Animate timeline line
    gsap.from('.timeline-line', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
      scaleY: 0,
      transformOrigin: 'top',
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="space-y-16 mb-20">
            <div className="flex items-center space-x-4">
              <div className="h-[1px] bg-border-subtle w-16"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold font-['Playfair_Display'] leading-tight text-text-primary">
              Work<br/>Experience
            </h2>
          </div>

          {/* Timeline */}
          <div ref={timelineRef} className="relative">
            {/* Vertical line */}
            <div className="timeline-line absolute left-8 top-0 bottom-0 w-[2px] bg-border origin-top"></div>

            {/* Timeline items */}
            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="timeline-item relative pl-24">
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-brand border-4 border-background shadow-sm"></div>

                  {/* Company logo circle */}
                  <div className="absolute left-2 top-2 w-14 h-14 rounded-full bg-white border border-border overflow-hidden shadow-sm">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      width={56}
                      height={56}
                      className="object-contain p-2"
                    />
                  </div>

                  {/* Content card */}
                  <div className="bg-white border border-border rounded-2xl p-8 hover:border-text-tertiary hover:shadow-sm transition-all duration-300">
                    {/* Header */}
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-2xl font-semibold text-text-primary mb-2">
                            {exp.role}
                          </h3>
                          <div className="flex items-center gap-2 text-brand font-medium text-lg mb-3">
                            <span>{exp.company}</span>
                            {exp.current && (
                              <span className="px-3 py-1 bg-brand/10 text-brand text-xs font-semibold rounded-full">
                                Current
                              </span>
                            )}
                          </div>
                        </div>
                        <span className="tag text-xs">{exp.type}</span>
                      </div>

                      <div className="flex flex-col gap-2 text-sm text-text-secondary">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-text-secondary leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Expand/Collapse button */}
                    <button
                      onClick={() => toggleExpand(exp.id)}
                      className="flex items-center gap-2 text-brand hover:text-brand-light font-medium transition-colors duration-250 mb-4"
                    >
                      <span>{expandedId === exp.id ? 'Show less' : 'Show more'}</span>
                      {expandedId === exp.id ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>

                    {/* Expandable content */}
                    {expandedId === exp.id && (
                      <div className="space-y-6 pt-4 border-t border-border animate-fade-in">
                        {/* Key achievements */}
                        <div>
                          <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wide mb-3">
                            Key Contributions
                          </h4>
                          <ul className="space-y-3">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex gap-3">
                                <span className="text-brand mt-1.5">•</span>
                                <span className="text-text-secondary leading-relaxed flex-1">
                                  {achievement}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tech stack */}
                        <div>
                          <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wide mb-3">
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.techStack.map((tech, idx) => (
                              <span key={idx} className="tag text-xs">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
