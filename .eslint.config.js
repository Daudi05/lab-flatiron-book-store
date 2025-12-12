module.exports [
  {
    ignores: ["node_modules/**", "dist/**", "coverage/**"]
  },
  {
    languageOptions: {
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly"
      }
    },
    env: {
      browser: true,
      node: true,
      es2021: true,
      jest: true
    },
    rules: {
      "no-undef": "error",
      "no-unused-vars": "warn",
      semi: ["error", "always"]
    }
  }
];