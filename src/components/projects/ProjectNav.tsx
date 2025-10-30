'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { HiChevronDown, HiArrowLeft } from 'react-icons/hi';
import { projectsList } from '@/data/projects';

interface ProjectNavProps {
  currentSlug: string;
}

export default function ProjectNav({ currentSlug }: ProjectNavProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const currentProject = projectsList.find((p) => p.slug === currentSlug);
  const otherProjects = projectsList.filter((p) => p.slug !== currentSlug);

  return (
    <>
      {/* Back Button - Top Left */}
      <Link href="/#projects">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.05, x: -2 }}
          className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50 flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full backdrop-blur-md bg-white/80 shadow-lg hover:shadow-xl transition-shadow border border-neutral-200/50"
        >
          <HiArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-700" />
          <span className="text-xs sm:text-sm font-medium text-neutral-900">Back</span>
        </motion.div>
      </Link>

      {/* Project Dropdown - Top Right */}
      <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full backdrop-blur-md bg-white/80 shadow-lg hover:shadow-xl transition-shadow border border-neutral-200/50"
        >
          <span className="text-xs sm:text-sm font-medium text-neutral-900 truncate max-w-[120px] sm:max-w-none">
            {currentProject?.name}
          </span>
          <HiChevronDown
            className={`w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-700 transition-transform flex-shrink-0 ${
              isDropdownOpen ? 'rotate-180' : ''
            }`}
          />
        </motion.button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-3 w-56 sm:w-64 bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden"
          >
            <div className="py-2">
              <div className="px-4 py-2 text-xs text-neutral-500 font-semibold uppercase tracking-wider">
                Other Projects
              </div>

              {otherProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <motion.div
                    whileHover={{ backgroundColor: 'rgba(0,0,0,0.04)' }}
                    className="px-3 py-2.5 sm:px-4 sm:py-3 cursor-pointer transition-colors"
                  >
                    <div className="font-semibold text-neutral-900 text-xs sm:text-sm">
                      {project.name}
                    </div>
                    <div className="text-[10px] sm:text-xs text-neutral-500 truncate mt-0.5">
                      {project.tagline}
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Click outside to close dropdown */}
      {isDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </>
  );
}
