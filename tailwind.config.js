/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',],
  theme: {
    fontFamily: {
      display: ["Gilgan", "sans-serif"],
      // final: ["Audiowide","sans-serif"],
      final: ["Elemental End", "sans-serif"],
      instrument: ['Gilgan', "sans-serif"],
      rocket: ["Supersonic Rocketship", "sans-serif"],
      comicSansN: ["ComicNeueSansID", "sans-serif"]
    },
    extend: {
      animation: {
        blob: "blob 4s infinite",
        blurIn: "blurIn 2s cubic-bezier(.5,.05,.56,.97)",
        rotateInfinite: "spin360 60s linear infinite"
      },
      colors: {
        "text": "#000010",
        "background": "#ffffff",
        "secondary": "#C2C7F5",
        "accent": "#2E46CD",
        "gradient1": "#cf4255",
        "gradient2": "#cf4255",
        // flowbite-svelte
        primary: {
          50: '#FFF5F2',
          100: '#FFF1EE',
          200: '#FFE4DE',
          300: '#FFD5CC',
          400: '#FFBCAD',
          500: '#FE795D',
          600: '#EF562F',
          700: '#EB4F27',
          800: '#CC4522',
          900: '#A5371B',
        }
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(80px, -100px) scale(1.12)",
          },
          "66%": {
            transform: "translate(-50px, 50px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
        spin360: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          }
        },
        blurIn: {
          "0%": {
            filter: "blur(80px)",
            opacity: "0%",
            // transform: "scale(1.5)"
          },
          "100%": {
            filter: "none",
            opacity: "100%",
            // transform: "none"
          },
          
        },
      backgroundImage: {
        'hero': "url('/static/bg2.jpg')",
        'hero2': "url('/static/bg2.jpg')",
        'hero3': "url('/static/back.gif')",

      },
      extend: {
        screens: {
          'lg': '1250px',
          // => @media (min-width: 992px) { ... }
          'tablet': [
            {'min': '400px', 'max': '990px'},
          ]
        },

      },
      plugins: [
        require('flowbite/plugin'),
        require("daisyui"),
      ],
    },
  },
}}