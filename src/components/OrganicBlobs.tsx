'use client'

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface OrganicBlobsProps {
  colorScheme?: 'teal' | 'warm' | 'neutral' | 'cool';
  intensity?: 'subtle' | 'medium' | 'prominent';
  animated?: boolean;
}

const OrganicBlobs: React.FC<OrganicBlobsProps> = ({
  colorScheme = 'teal',
  intensity = 'subtle',
  animated = true
}) => {
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);
  const blob3Ref = useRef(null);

  useEffect(() => {
    if (!animated) return;

    // Slow, organic floating animation for each blob
    gsap.to(blob1Ref.current, {
      x: '20%',
      y: '-15%',
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    gsap.to(blob2Ref.current, {
      x: '-15%',
      y: '20%',
      duration: 25,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    gsap.to(blob3Ref.current, {
      x: '10%',
      y: '10%',
      duration: 30,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    // Subtle rotation
    gsap.to([blob1Ref.current, blob2Ref.current, blob3Ref.current], {
      rotation: 360,
      duration: 40,
      repeat: -1,
      ease: 'none',
    });
  }, [animated]);

  // Color schemes - increased opacity for visibility
  const colors = {
    teal: {
      blob1: 'rgba(15, 118, 110, 0.15)', // var(--brand)
      blob2: 'rgba(20, 184, 166, 0.12)', // var(--brand-light)
      blob3: 'rgba(17, 94, 89, 0.10)',   // var(--brand-dark)
    },
    warm: {
      blob1: 'rgba(232, 221, 213, 0.25)', // var(--accent)
      blob2: 'rgba(212, 196, 184, 0.20)', // var(--accent-dark)
      blob3: 'rgba(245, 245, 244, 0.15)', // var(--surface)
    },
    neutral: {
      blob1: 'rgba(168, 162, 158, 0.10)', // var(--text-tertiary)
      blob2: 'rgba(231, 229, 228, 0.12)', // var(--border)
      blob3: 'rgba(245, 245, 244, 0.10)', // var(--surface)
    },
    cool: {
      blob1: 'rgba(91, 155, 213, 0.12)', // Cool blue
      blob2: 'rgba(155, 187, 224, 0.10)', // Light blue
      blob3: 'rgba(15, 118, 110, 0.08)', // Teal
    },
  };

  // Intensity adjustments
  const opacityMultiplier = {
    subtle: 1,
    medium: 1.3,
    prominent: 1.8,
  };

  const selectedColors = colors[colorScheme];
  const multiplier = opacityMultiplier[intensity];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Blob 1 - Top Left */}
      <div
        ref={blob1Ref}
        className="absolute -top-1/4 -left-1/4 w-[1000px] h-[1000px] rounded-full"
        style={{
          background: `radial-gradient(circle, ${selectedColors.blob1} 0%, transparent 60%)`,
          filter: 'blur(60px)',
          opacity: multiplier,
        }}
      />

      {/* Blob 2 - Bottom Right */}
      <div
        ref={blob2Ref}
        className="absolute -bottom-1/4 -right-1/4 w-[900px] h-[900px] rounded-full"
        style={{
          background: `radial-gradient(circle, ${selectedColors.blob2} 0%, transparent 60%)`,
          filter: 'blur(70px)',
          opacity: multiplier,
        }}
      />

      {/* Blob 3 - Center */}
      <div
        ref={blob3Ref}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background: `radial-gradient(circle, ${selectedColors.blob3} 0%, transparent 60%)`,
          filter: 'blur(65px)',
          opacity: multiplier,
        }}
      />
    </div>
  );
};

export default OrganicBlobs;
