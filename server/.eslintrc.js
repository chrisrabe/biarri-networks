module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "prettier/prettier": "error",
    "import/prefer-default-export": "off",
    "class-methods-use-this": "off",
    "no-underscore-dangle": "off",
    "no-param-reassign": "off",
  },
};
