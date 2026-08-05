/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#080808',
          surface: '#0F0F0F',
          border: '#1E1E1E',
          muted: '#8E8E93',
          subtle: '#3A3A3C',
          light: '#F4F4F5',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        'tightest': '-0.04em',
        'tighter': '-0.02em',
        'widest-editorial': '0.25em',
        'super-wide': '0.35em',
      },
      lineHeight: {
        'editorial': '1.7',
        'tight-heading': '1.05',
      },
      animation: {
        'fade-in': 'fadeIn 800ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fadeUp 900ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [],
}

