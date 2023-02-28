module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ["html", "import", "prettier"],
  extends: ["eslint:recommended", "airbnb-base", "prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        trailingComma: "all",
        bracketSpacing: false,
        printWidth: 80,
        tabWidth: 2,
        semi: true,
        arrowParens: "avoid",
        endOfLine: "auto",
      },
      {
        usePrettierrc: false,
      },
    ],
    "no-unused-vars": "error",
    "no-console": "off",
    "class-methods-use-this": "off",
    "no-bitwise": "off",
    "no-param-reassign": "off",
    "no-undef": "off",
    "no-use-before-define": "off",
    radix: "off",
  },
  settings: {
    "import/resolver": {
      "babel-module": {
        root: ["."],
        allowExistingDirectories: true,
      },
    },
  },
};
