module.exports = {
  root: true,
  extends: [
    // "airbnb-typescript/base", // This's eslint-config-airbnb-base (no React support)
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:promise/recommended",
    "plugin:json/recommended"
  ],
  plugins: [
    "@typescript-eslint",
    "jest",
    "promise",
    "json",
    "import"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  rules: {
    // turn-off too-restrictive-rule(s): https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
    "quote-props": "off",
    "comma-dangle": "off",
    "operator-linebreak": "off",
    "import/prefer-default-export": "off",
    "import/order": "off",
    "import/no-extraneous-dependencies": "off",
    "implicit-arrow-linebreak": "off",
    "import/newline-after-import": "off",
    "class-methods-use-this": "off",
    "arrow-parens": "off",
    "arrow-body-style": "off",
    "no-restricted-syntax": "off",
    "no-restricted-properties": "off",
    "no-plusplus": "off",
    "newline-per-chained-call": "off",
    "no-case-declarations": "off",
    "@typescript-eslint/no-useless-constructor": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/prefer-interface": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/ban-types": "off",

    "max-len": [ "error", { "code": 120 } ],
    "no-console": 'off',
    "semi": [ "error", "always" ],
    "array-bracket-spacing": [ "error", "always" ],
    "object-curly-spacing": [ "error", "always" ],
    "object-curly-newline": [ "error", { "consistent": true, "minProperties": 9 } ],
    "no-underscore-dangle": [ "error", { "allow": [ "_id" ] } ],
    "no-return-await": "warn",
    "no-await-in-loop": "warn",
    "@typescript-eslint/indent": [ "error", 2 ],
    "@typescript-eslint/explicit-function-return-type": [ "warn", {
      "allowExpressions": true,
      "allowTypedFunctionExpressions": true
    } ], // allowExpressions=true applies to closures only, not function declaration
    "@typescript-eslint/ban-ts-comment": "warn",
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "warn",
    "jest/no-identical-title": "error",
    "jest/valid-expect": "error",
    "jest/valid-expect-in-promise": "error",
    "jest/no-conditional-expect": "warn",
    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/always-return.md
    "promise/always-return": "warn",
    "prefer-destructuring": [ "error", { "VariableDeclarator": { "array": false, "object": true } } ],

    "quotes": "off",
    "@typescript-eslint/quotes": [ "error", "double" ],
  },
  overrides: [
    {
      "files": [ "**/__tests__/**/*.test.*" ],
      "rules": {
        "no-undef": "off",
        "jest/no-mocks-import": "off",
        "jest/no-try-expect": "off",
        "jest/no-jasmine-globals": "off",
        "jest/expect-expect": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "promise/always-return": "off"
      }
    }
  ],
  env: {
    "jest/globals": true,
  }
};
