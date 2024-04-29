/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "#040D12":"#040D12",
        "#CBC6FD":"#CBC6FD",
        "#9F95FF":"#9F95FF",
        
      },
      margin:{
        "26px":"26px"
      },
      boxShadow:{
        "HeaderBtn":"0px 0px 25px 0px rgb(159, 149, 255)"
      },
      screens:{
        "860px":"860px",
        "1030px":"1030px"
      }
    },
  },
  plugins: [],
}