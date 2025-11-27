'use client';

import { motion } from 'framer-motion';
import { SiApple, SiGoogleplay, SiGithub, SiYoutube, SiTiktok } from 'react-icons/si';
import { HiExternalLink, HiDocumentText } from 'react-icons/hi';

interface Links {
  appStore?: string;
  playStore?: string;
  github?: string;
  demo?: string;
  pdf?: string;
  youtube?: string;
  tiktok?: string;
}

interface ProjectCTAProps {
  projectName: string;
  links: Links;
  brandColor: string;
}

export default function ProjectCTA({
  projectName,
  links,
  brandColor,
}: ProjectCTAProps) {
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

  const linkButtons = [
    {
      key: 'appStore',
      url: links.appStore,
      icon: <SiApple className="w-6 h-6" />,
      label: 'App Store',
    },
    {
      key: 'playStore',
      url: links.playStore,
      icon: <SiGoogleplay className="w-6 h-6" />,
      label: 'Play Store',
    },
    {
      key: 'github',
      url: links.github,
      icon: <SiGithub className="w-6 h-6" />,
      label: 'GitHub',
    },
    {
      key: 'youtube',
      url: links.youtube,
      icon: <SiYoutube className="w-6 h-6" />,
      label: 'YouTube',
    },
    {
      key: 'tiktok',
      url: links.tiktok,
      icon: <SiTiktok className="w-6 h-6" />,
      label: 'TikTok',
    },
    {
      key: 'demo',
      url: links.demo,
      icon: <HiExternalLink className="w-6 h-6" />,
      label: 'Live Demo',
    },
    {
      key: 'pdf',
      url: links.pdf,
      icon: <HiDocumentText className="w-6 h-6" />,
      label: 'Case Study',
    },
  ].filter((link) => link.url); // Only show links that exist

  return (
    <section
      className="min-h-screen py-24 px-6 flex items-center"
      style={{
        background: `linear-gradient(135deg, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.95) 0%, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1) 100%)`,
      }}
    >
      <div className="max-w-5xl mx-auto w-full text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-semibold tracking-tight mb-6 text-center">
            Experience {projectName}
          </h2>
          <p className="text-xl font-normal mb-12 opacity-90 text-center ml-8">
            Explore the project and see it in action
          </p>

          {linkButtons.length > 0 ? (
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
              className="flex flex-wrap justify-center gap-4"
            >
              {linkButtons.map((button) => (
                <motion.a
                  key={button.key}
                  href={button.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-neutral-900 rounded-full font-semibold text-base shadow-xl hover:shadow-2xl transition-shadow"
                >
                  {button.icon}
                  <span>{button.label}</span>
                </motion.a>
              ))}
            </motion.div>
          ) : (
            <p className="text-lg opacity-75">
              Project links coming soon...
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
