module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    node: true,
    browser: true,
    es6: true
  },
  ignorePatterns: [
    "node_modules/**/*.js",
    "build/**/*.js"
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: [
    "only-warn",
    "@typescript-eslint"
  ],
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "eslint:recommended"
  ],
  rules: {
    "react/prop-types": "off",
    "react/display-name": "off",
    "react/jsx-tag-spacing": ["warn", {
      "closingSlash": "never",
      "beforeSelfClosing": "always",
      "afterOpening": "never",
      "beforeClosing": "allow"
    }],
    "react-hooks/exhaustive-deps": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_.*", "varsIgnorePattern": "^_.*" }],
    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": ["warn"],
    "semi": "off",
    "@typescript-eslint/semi": ["error"]
  }
};
