/** @type {import('tailwindcss').Config} */

// Keep in sync with ../dotenvx.github.io / ../radar design tokens.
// Only these four sizes — legacy text-* names alias onto them.
const compact = ['var(--design-text-compact)', { lineHeight: '1.35' }]
const size = ['var(--design-text-size)', { lineHeight: '1.5' }]
const title = ['var(--design-text-title)', { lineHeight: '1.25' }]
const display = ['var(--design-text-display)', { lineHeight: '1.1' }]

module.exports = {
  content: ['./src/**/*.{js,mjs,jsx,mdx}'],
  darkMode: 'class',
  theme: {
    fontSize: {
      // Prefer these
      compact,
      size,
      title,
      display,
      // Legacy aliases → collapsed onto the 4 tokens
      '2xs': compact,
      xs: compact,
      sm: compact,
      base: size,
      lg: size,
      xl: title,
      '2xl': title,
      '3xl': title,
      '4xl': display,
      '5xl': display,
      '6xl': display,
      '7xl': display,
      '8xl': display,
      '9xl': display,
    },
    // Match ../dotenvx.github.io / radar — only three weights in practice:
    // 400 body · 500 titles/labels · 600 strong/buttons. No 700+.
    fontWeight: {
      thin: '400',
      extralight: '400',
      light: '400',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '600',
      extrabold: '600',
      black: '600',
    },
    typography: require('./typography'),
    extend: {
      boxShadow: {
        glow: '0 0 4px rgb(0 0 0 / 0.1)',
      },
      maxWidth: {
        // Match ../dotenvx.github.io content shells (armor/feature/spec = 48rem)
        lg: '33rem',
        '2xl': '48rem',
        '3xl': '48rem',
        '5xl': '72rem', // radar-shell
      },
      opacity: {
        1: '0.01',
        2.5: '0.025',
        7.5: '0.075',
        15: '0.15',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
