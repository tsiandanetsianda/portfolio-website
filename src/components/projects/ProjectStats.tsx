'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

interface Stat {
  value: number;
  label: string;
}

interface ProjectStatsProps {
  stats: Stat[];
  brandColor: string;
}

const isWinnerStat = (label: string) => {
  return label.includes('🏆') || label.toLowerCase().includes('winner') || label.toLowerCase().includes('hackathon');
};

function NumberCounter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          let startTime: number | null = null;
          const startValue = 0;

          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(startValue + (end - startValue) * easeOutQuart);

            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={countRef as React.RefObject<HTMLSpanElement>}>
      {count.toLocaleString()}
    </span>
  );
}

// Parse achievement label for trophy section
const parseAchievement = (label: string) => {
  // Example: "🏆 InterVarsity Hackathon 2025 - FinTech Winner"
  const parts = label.split('-').map(s => s.trim());
  const event = parts[0]?.replace('🏆', '').trim() || '';
  const category = parts[1]?.replace('Winner', '').trim() || '';

  return { event, category };
};

export default function ProjectStats({
  stats,
  brandColor,
}: ProjectStatsProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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

  // Check if this is a winner achievement
  const hasWinner = stats.some(stat => isWinnerStat(stat.label));
  const winnerStat = stats.find(stat => isWinnerStat(stat.label));

  if (hasWinner && winnerStat) {
    const { event, category } = parseAchievement(winnerStat.label);

    return (
      <section
        className="h-screen py-16 px-6 flex items-center justify-center relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.05) 0%, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.1) 100%)`,
        }}
      >
        {/* Light rays from trophy - only render on client to avoid hydration mismatch */}
        {isMounted && [...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-1 origin-left"
            style={{
              height: '120vh',
              background: `linear-gradient(to bottom, rgba(255, 215, 0, 0.15), transparent)`,
              transform: `rotate(${i * 45}deg)`,
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Confetti particles - only render on client to avoid hydration mismatch */}
        {isMounted && [...Array(20)].map((_, i) => (
          <motion.div
            key={`confetti-${i}`}
            className="absolute w-3 h-3"
            style={{
              background: ['#FFD700', '#FFA500', '#FF6B6B', '#4ECDC4', '#FFE66D'][i % 5],
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              borderRadius: i % 2 === 0 ? '50%' : '0%',
            }}
            animate={{
              y: [0, -20, 20, 0],
              x: [0, Math.random() * 30 - 15, 0],
              rotate: [0, 360],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}

        <div className="max-w-5xl mx-auto w-full relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-8 sm:mb-12 text-neutral-900 text-center px-4"
          >
            Impact & Achievements
          </motion.h2>

          <div className="text-center flex flex-col items-center justify-center px-4">
            {/* Trophy emoji with glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0, y: -50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 150,
                delay: 0.2
              }}
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                y: {
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="relative mb-6 sm:mb-8"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 40px rgba(255, 215, 0, 0.4)',
                    '0 0 80px rgba(255, 215, 0, 0.6)',
                    '0 0 40px rgba(255, 215, 0, 0.4)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-7xl sm:text-8xl md:text-9xl lg:text-[180px] leading-none inline-block rounded-full"
              >
                🏆
              </motion.div>
            </motion.div>

            {/* #1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                type: "spring",
                stiffness: 120,
                delay: 0.4
              }}
              className="mb-4 sm:mb-6"
            >
              <motion.div
                animate={{
                  textShadow: [
                    '0 0 30px rgba(255, 215, 0, 0.4)',
                    '0 0 50px rgba(255, 215, 0, 0.6)',
                    '0 0 30px rgba(255, 215, 0, 0.4)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-[80px] sm:text-[100px] md:text-[120px] lg:text-[160px] font-black leading-none tracking-tighter bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent"
              >
                #<NumberCounter end={winnerStat.value} duration={1500} />
              </motion.div>
            </motion.div>

            {/* Category */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-3 sm:mb-4"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 tracking-tight">
                {category}
              </div>
            </motion.div>

            {/* Event name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-neutral-600 tracking-wide">
                {event}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  // Default rendering for non-winner stats
  return (
    <section
      className="min-h-screen py-16 sm:py-20 md:py-24 px-4 sm:px-6 flex items-center"
      style={{
        background: `linear-gradient(135deg, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.05) 0%, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.1) 100%)`,
      }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-10 sm:mb-12 md:mb-16 text-neutral-900 text-center"
        >
          Impact & Achievements
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
              },
            },
          }}
          className={`grid gap-6 sm:gap-8 max-w-4xl mx-auto ${
            stats.length === 1
              ? 'grid-cols-1 max-w-md justify-items-center'
              : stats.length === 2
              ? 'grid-cols-1 md:grid-cols-2'
              : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
          }`}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-shadow text-center w-full"
            >
              <div
                className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter mb-2 sm:mb-3"
                style={{ color: brandColor }}
              >
                <NumberCounter end={stat.value} />
                {stat.value >= 100 && stat.label !== '% Satisfaction' && '+'}
                {stat.label.includes('%') && '%'}
              </div>
              <div className="text-neutral-600 text-sm sm:text-base font-medium">
                {stat.label.replace('% ', '').replace('%', '')}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
