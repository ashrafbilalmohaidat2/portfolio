/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans:    ['"DM Sans"', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        ink:     '#0f172a',   /* midnight navy — primary text */
        ink2:    '#1e293b',   /* slightly lighter navy */
        green:   '#22c55e',   /* emerald accent */
        green2:  '#16a34a',   /* darker green */
        paper:   '#f8fafc',   /* off-white bg */
        paper2:  '#f1f5f9',   /* card bg tint */
        muted:   { DEFAULT: 'rgb(var(--muted) / <alpha-value>)', foreground: 'rgb(var(--muted-foreground) / <alpha-value>)' },
        /* shadcn-compat */
        background:  'rgb(var(--background) / <alpha-value>)',
        foreground:  'rgb(var(--foreground) / <alpha-value>)',
        card:        { DEFAULT: 'rgb(var(--card) / <alpha-value>)', foreground: 'rgb(var(--card-foreground) / <alpha-value>)' },
        primary:     { DEFAULT: 'rgb(var(--primary) / <alpha-value>)', foreground: 'rgb(var(--primary-foreground) / <alpha-value>)' },
        secondary:   { DEFAULT: 'rgb(var(--secondary) / <alpha-value>)', foreground: 'rgb(var(--secondary-foreground) / <alpha-value>)' },
        destructive: { DEFAULT: 'rgb(var(--destructive) / <alpha-value>)', foreground: 'rgb(var(--destructive-foreground) / <alpha-value>)' },
        border: 'rgb(var(--border) / <alpha-value>)',
        input:  'rgb(var(--input) / <alpha-value>)',
        ring:   'rgb(var(--ring) / <alpha-value>)',
      },
      animation: {
        'fade-up':   'fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards',
        'blink':     'blink 1s step-end infinite',
        'pulse-dot': 'pulseDot 2s infinite',
        'float':     'float 5s ease-in-out infinite',
      },
      keyframes: {
        fadeUp:   { from: { opacity:'0', transform:'translateY(28px)' }, to: { opacity:'1', transform:'translateY(0)' } },
        blink:    { '0%,100%':{ opacity:'1' }, '50%':{ opacity:'0' } },
        pulseDot: { '0%,100%':{ opacity:'1', transform:'scale(1)' }, '50%':{ opacity:'0.5', transform:'scale(1.4)' } },
        float:    { '0%,100%':{ transform:'translateY(0)' }, '50%':{ transform:'translateY(-8px)' } },
      },
    },
  },
  plugins: [],
}
