/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  darkMode: "class",
  theme: {
    screens:{
      sm : "480px",
      md : "768px",
      lg : "1024px",
    },
    extend: {
      colors:{
        primaryColor: '#010a5e',
        primaryColorLight: 'hsl(216, 100%, 4%)',
        secondaryColor: '#FFCC00',
        paragraphColor: '#c0c0c0',      
        whiteColor: '#fff',
        blackColor: "#000",
        greenColor: "#007936",
        redColor: "#cc3433",
        darkColor: '#000',
        darkColorLight: "#171717",
        sectionColor: "hsl(209, 100%, 97%)",
        darkBodyColor: "hsl(216, 100%, 4%)",
        darkSectionColor: "hsl(211, 100%, 12%)",
        primaryColor: "hsl(209, 87%, 21%)",
        primaryColorLight: "hsl(209, 74%, 45%)",
        whiteColor: "#fff",
        textColor: "#DDD",
        secondaryColor: "red",
      },
      keyframes:{
        move:{
          "50%": {transform: 'translateY(-1rem)'}
        }
      },
      animation:{
        'movingY': 'move 2s linear infinite'
      }
    },
    container:{
      center:true,
      padding:{
        DEFAULT:'1rem',
        sm:'1.5rem',
      }
    },
    fontFamily:{
      dmsans:['DM Sans','sans-serif'],
      opensans:['Open Sans','sans-serif']
    }
  },
  plugins: [],
}

