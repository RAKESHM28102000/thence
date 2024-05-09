/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      keyframes: {
        rightoleft: {
        "from": { transform: "translateX(-300px)" },
        "to": { transform: "translateX(0)"},
               },
        lefttoright: {
                "from": { transform: "translateX(300px)" },
                "to": { transform: "translateX(0)"},
                       },
        righttoleftinfinite:{
          "from":{transform:"translateX(3000px)"},
          "to":{transform:"translateX(-3000px)"}
        }
             },
        animation: {
             rightoleft: "rightoleft 2s ease-in-out ",
             lefttoright: "lefttoright 2s ease-in-out  ",
             righttoleftinfinite:"righttoleftinfinite 30s linear  infinite alternate "
                        },
      fontFamily: {
        manrope:['Manrope', 'sans-serif'],
        grace:['"Covered By Your Grace"','sans-serif']
      },
      colors: {
        'primary': "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        "bg1":"url('assets/images/')",
        "bg2":"url('assets/images/')",
        "bg3":"url('assets/images/')",
        "bg4":"url('assets/images/')",
        "bg5":"url('assets/images/')",
        "bg-1":"url('assets/images/')",
        "bg-2":"url('assets/images/')",
        "bg-3":"url('assets/images/')",
        "bg-4":"url('assets/images/')",
        "bg-5":"url('assets/images/')",
        "bg-6":"url('assets/images/')",
        "bg-7":"url('assets/images/')",
        "bg-8":"url('assets/images/')",
        "bg-9":"url('assets/images/')",
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}
