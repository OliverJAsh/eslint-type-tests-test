module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["eslint-plugin-expect-type"],
  rules: {
    "expect-type/expect": "error",
  },
};
