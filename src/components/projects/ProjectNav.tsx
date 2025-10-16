'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { HiChevronDown, HiArrowLeft } from 'react-icons/hi';
import { projectsList } from '@/data/projects';

interface ProjectNavProps {
  currentSlug: string;
}

export default function ProjectNav({ currentSlug }: ProjectNavProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { scrollY } = useScroll();

  // Show nav after scrolling past hero section
  const opacity = useTransform(scrollY, [300, 400], [0, 1]);
  const y = useTransform(scrollY, [300, 400], [-20, 0]);

  const currentProject = projectsList.find((p) => p.slug === currentSlug);
  const otherProjects = projectsList.filter((p) => p.slug !== currentSlug);

  return (
    <motion.nav
      style={{ opacity, y }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Back Button */}
        <Link href="/#projects">
          <motion.div
            whileHover={{ x: -3 }}
            className="flex items-center gap-2 text-neutral-700 hover:text-neutral-900 font-medium transition-colors"
          >
            <HiArrowLeft className="w-5 h-5" />
            <span>Back to Portfolio</span>
          </motion.div>
        </Link>

        {/* Project Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-neutral-100 transition-colors"
          >
            <span className="font-medium text-neutral-900">
              {currentProject?.name}
            </span>
            <HiChevronDown
              className={`w-5 h-5 transition-transform ${
                isDropdownOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-neutral-200 overflow-hidden"
            >
              <div className="py-2">
                <div className="px-4 py-2 text-sm text-neutral-500 font-medium">
                  Other Projects
                </div>

                {otherProjects.map((project) => (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <motion.div
                      whileHover={{ backgroundColor: 'rgba(0,0,0,0.05)' }}
                      className="px-4 py-3 cursor-pointer transition-colors"
                    >
                      <div className="font-medium text-neutral-900">
                        {project.name}
                      </div>
                      <div className="text-sm text-neutral-500 truncate">
                        {project.tagline}
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Click outside to close dropdown */}
      {isDropdownOpen && (
        <div
          className="fixed inset-0 -z-10"
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </motion.nav>
  );
}
