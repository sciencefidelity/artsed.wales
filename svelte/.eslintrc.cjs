module.exports = {
  root: true,
  env: {
    browser: true,
    es2017: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  plugins: ["svelte3", "@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020
  },
  ignorePatterns: ["*.cjs"],
  overrides: [{ files: ["*.svelte"], processor: "svelte3/svelte3" }],
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "never"]
  },
  settings: {
    "svelte3/typescript": () => require("typescript"),
    "svelte3/ignore-styles": attributes =>
      attributes.lang && attributes.lang.includes("scss")
  }
}
