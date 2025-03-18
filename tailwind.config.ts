
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#64748b',
          foreground: '#ffffff'
        },
        secondary: {
          DEFAULT: '#93c5fd',
          foreground: '#1e293b'
        },
        accent: {
          DEFAULT: '#60a5fa',
          foreground: '#ffffff'
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        "slide-up": "slide-up 0.5s ease-out",
        "slide-down": "slide-down 0.5s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "float": "float 4s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s infinite",
        "rotate": "rotate 10s linear infinite",
        "bounce-subtle": "bounce-subtle 2s infinite",
      },
      keyframes: {
        "slide-up": {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        "slide-down": {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        "fade-in": {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        "float": {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        "pulse-glow": {
          '0%': { boxShadow: '0 0 0 0 rgba(96, 165, 250, 0.4)' },
          '70%': { boxShadow: '0 0 0 15px rgba(96, 165, 250, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(96, 165, 250, 0)' },
        },
        "rotate": {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        "bounce-subtle": {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
