import type { Config } from "tailwindcss";


export default {
  darkMode: 'selector',
  
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  
  theme: {
    
    extend: {
      fontFamily: {
        font: ['Poppins', 'Helvetica', 'Arial', 'sans-serif'],
        rubik: ['Rubik', 'Helvetica', 'Arial', 'sans-serif'],
        montserrat: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
      },     

      textshadow: {
        sm: '0 2px 5px rgba(0, 0, 0, 0.5)',
        md: '0 4px 10px rgba(0, 0, 0, 0.5)',
        lg: '0 6px 15px rgba(0, 0, 0, 0.5)',
      },


      colors: {
        background: "#18181b",
        bluePage: "#1d4ed8",
        foreground: "var(--foreground)",
        nav: "#1d4ed8",
        customBlue: "#48e",
        
      },
    },
  },
  plugins: [
  ],

} satisfies Config;
