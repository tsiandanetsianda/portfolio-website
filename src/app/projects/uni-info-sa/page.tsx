'use client'

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import Image from 'next/image';

// Import Google Fonts
import { Inter, Poppins } from 'next/font/google';

// Load fonts
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'], variable: '--font-poppins' });

// Enhanced animations
const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Section transition animation
const sectionTransition = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

// Enhanced NumberCounter with smooth transitions
const NumberCounter = ({ end }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let current = 0;
          const step = end / 50;
          const timer = setInterval(() => {
            current += step;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 40);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [end]);

  return <span ref={countRef}>{count.toLocaleString()}</span>;
};

// Enhanced ScreenshotScroller with parallax effect
const ScreenshotScroller = () => {
  const containerRef = useRef(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const el = containerRef.current;
    const scrollLeft = el.scrollLeft;
    const scrollWidth = el.scrollWidth - el.clientWidth;
    setScrollPercentage((scrollLeft / scrollWidth) * 100);
  };

  return (
    <motion.div 
      className="relative"
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div 
        ref={containerRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6 pb-8"
      >
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            className="relative flex-none w-80 h-[600px] snap-center rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow"
            variants={{
              initial: { scale: 0.8, opacity: 0 },
              animate: { scale: 1, opacity: 1 }
            }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/UNIINFOSA1.jpg"
              alt={`App Screenshot ${i}`}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        ))}
      </div>
      <div className="w-full bg-neutral-200 h-1.5 mt-4 rounded-full">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 rounded-full"
          style={{ width: `${scrollPercentage}%` }}
        />
      </div>
    </motion.div>
  );
};

// Enhanced ProjectSection with gradient background and section transitions
const ProjectSection = ({ title, children, className = "" }) => (
  <motion.section 
    className={`py-32 px-6 ${className}`}
    variants={staggerContainer}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, margin: "-100px" }}
  >
    <motion.div 
      className="max-w-6xl mx-auto"
      variants={sectionTransition}
    >
      <motion.h2 
        variants={fadeInUp}
        className={`text-4xl font-bold mb-16 tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ${poppins.className}`}
      >
        {title}
      </motion.h2>
      {children}
    </motion.div>
  </motion.section>
);

// Enhanced StatCard with glowing effect
const StatCard = ({ value, label, delay = 0 }) => (
  <motion.div 
    className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
    variants={fadeInUp}
    transition={{ delay }}
    whileHover={{ scale: 1.05 }}
  >
    <div className={`text-5xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ${poppins.className}`}>
      <NumberCounter end={value} />+
    </div>
    <div className={`text-neutral-600 text-lg ${inter.className}`}>{label}</div>
  </motion.div>
);

// Enhanced TechItem with hover animation
const TechItem = ({ name, description, delay = 0 }) => (
  <motion.div 
    variants={fadeInUp}
    transition={{ delay }}
    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
    whileHover={{ y: -10 }}
  >
    <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ${poppins.className}`}>{name}</h3>
    <p className={`text-neutral-600 text-lg ${inter.className}`}>{description}</p>
  </motion.div>
);

const UniInfoRedesign = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <main className={`w-full bg-white ${inter.variable} ${poppins.variable}`}>
      <motion.section 
        style={{ opacity, scale }}
        className="h-screen flex items-center justify-center relative"
      >
        <div className="absolute inset-0">
          <Image
            src="/profile22.jpg"
            alt="University students"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={`text-7xl font-bold tracking-tight mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent ${poppins.className}`}
          >
            Find Your Perfect University Program
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={`text-xl text-neutral-200 ${inter.className}`}
          >
            Empowering students with intelligent program matching and personalized guidance.
          </motion.p>
        </div>
      </motion.section>

      <ProjectSection title="The Problem">
        <motion.div 
          className="grid md:grid-cols-2 gap-16 items-center"
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeInUp}
            className="space-y-6"
          >
            <p className={`text-xl text-neutral-600 ${inter.className}`}>
              South African students face significant challenges when choosing university programs:
            </p>
            <ul className={`space-y-4 text-neutral-600 ${inter.className}`}>
              <li>• Limited access to comprehensive program information</li>
              <li>• Complex admission requirements across universities</li>
              <li>• Lack of personalized guidance and recommendations</li>
              <li>• Time-consuming research process</li>
            </ul>
          </motion.div>
          <motion.div 
            variants={fadeInUp}
            className="relative h-96 rounded-xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/info1.jpg"
              alt="Students struggling with choices"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </ProjectSection>

      <ProjectSection title="App Preview" className="bg-gradient-to-r from-blue-50 to-purple-50">
        <ScreenshotScroller />
      </ProjectSection>

      <ProjectSection title="Impact">
        <motion.div 
          className="grid grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          <StatCard value={10000} label="Downloads" delay={0} />
          <StatCard value={8500} label="Active Users" delay={0.1} />
          <StatCard value={95} label="Success Rate" delay={0.2} />
        </motion.div>
      </ProjectSection>

      <ProjectSection title="Technology Stack" className="bg-gradient-to-r from-blue-50 to-purple-50">
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          <TechItem 
            name="Frontend"
            description="React Native, TypeScript, Tailwind CSS for a native mobile experience"
            delay={0}
          />
          <TechItem
            name="Backend"
            description="Node.js, Express, PostgreSQL for scalable data management"
            delay={0.1}
          />
          <TechItem
            name="AI/ML"
            description="TensorFlow, Python for intelligent program matching"
            delay={0.2}
          />
        </motion.div>
      </ProjectSection>

      <section className="py-32 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className={`text-4xl font-bold mb-8 ${poppins.className}`}>Start Your Journey Today</h2>
          <motion.a
            href="https://apps.apple.com/za/app/uni-info-sa/id6739985450"
            target="_blank"
            className={`inline-flex items-center px-8 py-4 bg-white text-black hover:bg-neutral-100 transition-colors rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl ${inter.className}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Now
          </motion.a>
        </motion.div>
      </section>
    </main>
  );
};

export default UniInfoRedesign;