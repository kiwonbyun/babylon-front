import type { Config } from 'tailwindcss';
import fs from 'node:fs';
import path from 'node:path';
import plaiceholder from '@plaiceholder/tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000000',
      green50: '#f0fdf4',
      green100: '#dcfce7',
      green200: '#bbf7d0',
      green300: '#86efac',
      green400: '#4ade80',
      green500: '#22c55e',
      green600: '#16a34a',
      green700: '#15803d',
      green800: '#166534',
      green900: '#14532d',
      gray50: '#f9fafb',
      gray100: '#f3f4f6',
      gray200: '#e5e7eb',
      gray300: '#d1d5db',
      gray400: '#9ca3af',
      gray500: '#6b7280',
      gray600: '#4b5563',
      gray700: '#374151',
      gray800: '#1f2937',
      gray900: '#111827',
      red50: '#fef2f2',
      red100: '#fee2e2',
      red200: '#fecaca',
      red300: '#fca5a5',
      red400: '#f87171',
      red500: '#ef4444',
      red600: '#dc2626',
      red700: '#b91c1c',
      red800: '#991b1b',
      red900: '#7f1d1d',
      yellow50: '#fffbeb',
      yellow100: '#fef3c7',
      yellow200: '#fde68a',
      yellow300: '#fcd34d',
      yellow400: '#fbbf24',
      yellow500: '#f59e0b',
      yellow600: '#d97706',
      yellow700: '#b45309',
      yellow800: '#92400e',
      yellow900: '#78350f',
      blue50: '#eff6ff',
      blue100: '#dbeafe',
      blue200: '#bfdbfe',
      blue300: '#93c5fd',
      blue400: '#60a5fa',
      blue500: '#3b82f6',
      blue600: '#2563eb',
      blue700: '#1d4ed8',
      blue800: '#1e40af',
      blue900: '#1e3a8a',
      sky50: '#f0f9ff',
      sky100: '#e0f2fe',
      sky200: '#bae6fd',
      sky300: '#7dd3fc',
      sky400: '#38bdf8',
      sky500: '#0ea5e9',
      sky600: '#0284c7',
      sky700: '#0369a1',
      sky800: '#075985',
      sky900: '#0c4a6e',
      pink50: '#fdf2f8',
      pink100: '#fce7f3',
      pink200: '#fbcfe8',
      pink300: '#f9a8d4',
      pink400: '#f472b6',
      pink500: '#ec4899',
      pink600: '#db2777',
      pink700: '#be185d',
      pink800: '#9d174d',
      pink900: '#831843',
      purple50: '#faf5ff',
      purple100: '#f3e8ff',
      purple200: '#e9d5ff',
      purple300: '#d8b4fe',
      purple400: '#c084fc',
      purple500: '#a855f7',
      purple600: '#9333ea',
      purple700: '#7e22ce',
      purple800: '#6b21a8',
      purple900: '#581c87',
      rose50: '#fff1f2',
      rose100: '#ffe4e6',
      rose200: '#fecdd3',
      rose300: '#fda4af',
      rose400: '#fb7185',
      rose500: '#f43f5e',
      rose600: '#e11d48',
      rose700: '#be123c',
      rose800: '#9f1239',
      rose900: '#881337',
      slate50: '#f8fafc',
      slate100: '#f1f5f9',
      slate200: '#e2e8f0',
      slate300: '#cbd5e1',
      slate400: '#94a3b8',
      slate500: '#64748b',
      slate600: '#475569',
      slate700: '#334155',
      slate800: '#1e293b',
      slate900: '#0f172a',
      indigo50: '#EEF2FF',
      indigo100: '#E0E7FF',
      indigo200: '#C7D2FE',
      indigo300: '#A5B4FC',
      indigo400: '#818CF8',
      indigo500: '#6366F1',
      indigo600: '#4F46E5',
      indigo700: '#4338CA',
      indigo800: '#3730A3',
      indigo900: '#312E81',
    },
    screens: {
      sm: { max: '767px' },
      md: { min: '768px', max: '1023px' },
      lg: { min: '1024px' },
    },
    fontSize: {
      xxs: ['0.625rem', { lineHeight: '1rem' }],
    },

    extend: {
      aspectRatio: {
        banner: '20 / 3',
      },
      borderWidth: {
        1: '1px',
      },
      backgroundImage: {
        login: "url('/login-bg.webp')",
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    plaiceholder({
      resolver: (src) => fs.readFileSync(path.join('./public', `${src}.jpg`)),
    }),
  ],
};

export default config;
