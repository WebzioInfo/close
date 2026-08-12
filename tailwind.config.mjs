/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#050505',
          nearblack: '#0c0c0c',
          surface: '#121212',
          border: '#222222',
          muted: '#737373',
          subtle: '#333333',
          light: '#e5e5e5',
          white: '#ffffff',
        }
      },
      fontFamily: {
        display: ['Manrope', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        'tightest': '-0.04em',
        'tighter': '-0.025em',
        'editorial': '0.15em',
        'wide-editorial': '0.25em',
      },
      lineHeight: {
        'display': '0.92',
        'heading': '1.05',
        'body': '1.7',
      },
      animation: {
        'fade-in': 'fadeIn 800ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fadeUp 900ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slow-pulse': 'slowPulse 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
