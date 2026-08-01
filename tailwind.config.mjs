/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#000000',
          white: '#FFFFFF',
          muted: '#8E8E93',
          darkMuted: '#1C1C1E',
        }
      },
      fontFamily: {
        display: ['Syncopate', 'Syne', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'Space Grotesk', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'tightest': '-0.05em',
        'super-wide': '0.3em',
        'ultra-wide': '0.4em',
      },
      animation: {
        'fade-hero': 'fadeHero 600ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-subtle': 'fadeSubtle 700ms cubic-bezier(0.16, 1, 0.3, 1) 150ms forwards',
        'badge-fade': 'badgeFade 500ms cubic-bezier(0.16, 1, 0.3, 1) 100ms forwards',
      },
      keyframes: {
        fadeHero: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeSubtle: {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        badgeFade: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
