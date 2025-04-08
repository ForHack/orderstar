/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  safelist: ['rounded-full', 'rounded-lg'],
  theme: {
    extend: {
      colors: {
        'main-page': 'var(--main-page)',
        muted: 'var(--muted)',
        accent: 'var(--accent)',
        info: 'var(--info)',
        success: 'var(--success)',
      },
    },
  },
  plugins: [],
};
