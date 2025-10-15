'use client'

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GradientMesh = () => {
  const meshRef = useRef(null);

  useEffect(() => {
    // Subtle color shift on scroll
    gsap.to(meshRef.current, {
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 2,
      },
      background: 'radial-gradient(at 20% 80%, rgba(15, 118, 110, 0.05) 0%, transparent 50%), radial-gradient(at 80% 20%, rgba(232, 221, 213, 0.08) 0%, transparent 50%)',
    });
  }, []);

  return (
    <div
      ref={meshRef}
      className="fixed inset-0 pointer-events-none z-[-2]"
      style={{
        background: 'radial-gradient(at 80% 20%, rgba(15, 118, 110, 0.05) 0%, transparent 50%), radial-gradient(at 20% 80%, rgba(232, 221, 213, 0.08) 0%, transparent 50%)',
      }}
    />
  );
};

export default GradientMesh;
