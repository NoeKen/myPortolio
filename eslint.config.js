const nextConfig = require("eslint-config-next");
const prettierConfig = require("eslint-config-prettier");

module.exports = [
  ...nextConfig,
  prettierConfig,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },
];
