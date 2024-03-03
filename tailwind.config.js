/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    screens: {
      xxs: "380px",
      xs: "576px",
      sm: "768px",
      md: "992px",
      lg: "1200px",
      xl: "1400px",
      xxl: "1600px",
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xs: "540px",
        sm: "720px",
        md: "960px",
        lg: "1140px",
        xl: "1200px",
      },
    },
    extend: {
      fontFamily: {
        Poppins: ["Poppins, sans-serif"],
      },
      colors: {
        purplePrimary: "#F4F1FF", //used in hero-section
        purpleFont: "#2D1D61",
        purpleFont2: "#363049",
        purpleButton: "#7951F9", //used in button
      },
      backgroundImage: {
        "hero-img": "url('../Images/hero-img.png')",
        "service-img": "url('../Images/service-img.png')",
        "features-img": "url('../Images/bg-03.png')",
        "service-2-img": "url('../Images/mask-img.png')",
        "features-2-img": "url('../Images/feature-2-img.png')",
        "faq-img": "url('../Images/faq-img.png')",
        "cta-img": "url('../Images/CTA-bg.png')",
      },
    },
  },
  plugins: [],
};
