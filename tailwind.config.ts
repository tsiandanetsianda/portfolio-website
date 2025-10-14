import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Professional Muted Base Colors
        background: "#FAFAF9", // Warm off-white
        surface: "#F5F5F4", // Subtle gray for cards

        // Text Colors (Warm Stone Palette)
        text: {
          primary: "#1C1917", // Warm near-black
          secondary: "#57534E", // Muted gray
          tertiary: "#A8A29E", // Lighter gray
        },

        // Brand Color (Teal - for CTAs only)
        brand: {
          DEFAULT: "#0F766E", // Deep teal
          light: "#14B8A6", // Lighter teal for hovers
          dark: "#115E59", // Darker teal for active states
        },

        // Muted Accent Color (Terracotta - for highlights)
        accent: {
          DEFAULT: "#E8DDD5", // Soft terracotta
          dark: "#D4C4B8", // Slightly darker for emphasis
        },

        // Semantic Colors
        border: {
          DEFAULT: "#E7E5E4", // stone-200
          light: "#F5F5F4", // stone-100
          subtle: "rgba(231, 229, 228, 0.5)", // semi-transparent
        },
      },

      // 8-Point Spacing System
      spacing: {
        '4.5': '1.125rem', // 18px
        '5.5': '1.375rem', // 22px
        '7.5': '1.875rem', // 30px
        '13': '3.25rem', // 52px
        '15': '3.75rem', // 60px
        '18': '4.5rem', // 72px
        '22': '5.5rem', // 88px
        '26': '6.5rem', // 104px
        '30': '7.5rem', // 120px
        '34': '8.5rem', // 136px
        '38': '9.5rem', // 152px
      },

      // Professional Typography Scale
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }], // 12px
        'sm': ['0.875rem', { lineHeight: '1.25rem' }], // 14px
        'base': ['1rem', { lineHeight: '1.6' }], // 16px - improved readability
        'lg': ['1.125rem', { lineHeight: '1.75rem' }], // 18px
        'xl': ['1.25rem', { lineHeight: '1.75rem' }], // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }], // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }], // 36px
        '5xl': ['3rem', { lineHeight: '1.1' }], // 48px - for hero
        '6xl': ['3.75rem', { lineHeight: '1.1' }], // 60px - largest
      },

      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },

      // Refined Border Radius
      borderRadius: {
        'sm': '0.25rem', // 4px
        'DEFAULT': '0.5rem', // 8px
        'md': '0.75rem', // 12px
        'lg': '1rem', // 16px
        'xl': '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
      },

      // Subtle Professional Shadows
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px -1px rgba(0, 0, 0, 0.08)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -2px rgba(0, 0, 0, 0.08)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.08)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.08)',
      },

      // Animation Timing
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
      },
    },
  },
  plugins: [],
} satisfies Config;
