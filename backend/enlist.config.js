const js = require("@eslint/js");

module.exports = [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs", // Koska valitsit CommonJS
      ecmaVersion: "latest",
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off" // Sallitaan console.log, koska kyseessä on backend
    }
  }
];
