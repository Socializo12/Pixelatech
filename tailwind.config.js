// const { fontFamily } = require("tailwindcss/defaultTheme");

// module.exports = {
//   // content: [
//   //   "./pages/**/*.{js,ts,jsx,tsx}",
//   //   "./components/**/*.{js,ts,jsx,tsx}",
    
//   // ],
//   content: [
//   "./src/**/*.{js,ts,jsx,tsx}", // <- This is necessary for your current project structure
// ],

//   theme: {
//     extend: {
//       fontFamily: {
//         inter: ['var(--font-inter)', ...fontFamily.sans],
//         geist: ['var(--font-geist-sans)', ...fontFamily.sans],
//         mono: ['var(--font-geist-mono)', ...fontFamily.mono],
//       },

//     },
//   },
//   plugins: [],
// };


// tailwind.config.js

// const { fontFamily } = require("tailwindcss/defaultTheme");

// module.exports = {
//   // content: ["./src/**/*.{js,ts,jsx,tsx}"], // ✅ correct
//    content: [
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/**/*.{js,ts,jsx,tsx,mdx}", // If you have a src directory
//   ],

//   theme: {
//     extend: {
//       fontFamily: {
//         inter: ['var(--font-inter)', ...fontFamily.sans],
//         geist: ['var(--font-geist-sans)', ...fontFamily.sans],
//         mono: ['var(--font-geist-mono)', ...fontFamily.mono],
//       },
//     },
//   },
// plugins: [require('@tailwindcss/typography')],
// }


// New Code Added Code 
/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', ...fontFamily.sans],
        geist: ['var(--font-geist-sans)', ...fontFamily.sans],
        mono: ['var(--font-geist-mono)', ...fontFamily.mono],
      },
    },
  },
plugins: [require('@tailwindcss/typography')],
};

// New Code Added Code 
