/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: '#F4F0EC',      // Darker calm background (Linen/Isabelline)
          paper: '#FFFCFA',      // Very soft warm white
          softpink: '#FCEFF3',   // Sweet pale pink
          mauve: '#9D6B77',      // Darker elegant muted rose
          gold: '#C69966',       // Darker soft gold/apricot
          dark: '#4A3B3B',       // Warm dark grey/brown
          text: '#6D5E70',       // Soft body text
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Quicksand"', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fadeIn': 'fadeIn 1s ease-out forwards',
        'slideUp': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    }
  },
  plugins: [],
}