module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "jest"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "prettier/@typescript-eslint",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript"
  ],
  rules: {
    indent: ["error", 2],
    complexity: ["error", 2],
    "@typescript-eslint/interface-name-prefix": [
      "error",
      {
        prefixWithI: "always"
      }
    ]
  }
};
