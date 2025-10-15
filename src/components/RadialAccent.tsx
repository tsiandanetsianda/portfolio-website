'use client'

import React from 'react';

interface RadialAccentProps {
  position?: 'header' | 'center' | 'bottom' | 'custom';
  color?: 'teal' | 'warm' | 'neutral';
  intensity?: 'subtle' | 'medium';
  customPosition?: { top?: string; bottom?: string; left?: string; right?: string };
}

const RadialAccent: React.FC<RadialAccentProps> = ({
  position = 'header',
  color = 'teal',
  intensity = 'subtle',
  customPosition
}) => {
  // Color definitions - increased visibility
  const colors = {
    teal: 'rgba(15, 118, 110, 0.12)',      // var(--brand)
    warm: 'rgba(232, 221, 213, 0.20)',     // var(--accent)
    neutral: 'rgba(168, 162, 158, 0.08)',  // var(--text-tertiary)
  };

  // Position presets
  const positions = {
    header: { top: '10%', left: '50%', transform: 'translateX(-50%)' },
    center: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
    bottom: { bottom: '10%', left: '50%', transform: 'translateX(-50%)' },
    custom: customPosition || {}
  };

  // Size based on intensity
  const sizes = {
    subtle: '900px',
    medium: '1200px',
  };

  const opacities = {
    subtle: 1,
    medium: 1.2,
  };

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        ...positions[position],
        width: sizes[intensity],
        height: sizes[intensity],
        background: `radial-gradient(circle, ${colors[color]} 0%, transparent 70%)`,
        opacity: opacities[intensity],
        zIndex: 0,
      }}
    />
  );
};

export default RadialAccent;
