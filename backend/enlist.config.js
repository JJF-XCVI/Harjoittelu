import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "module",
      ecmaVersion: "latest",
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off"
    }
  }
];
