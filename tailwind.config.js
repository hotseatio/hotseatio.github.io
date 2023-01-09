const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./layouts/**/*.html", "./content/**/*.md"],
  theme: {
    extend: {
      colors: {
        gray: colors.neutral,
      },
      lineHeight: {
        "extra-none": "0.75",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
