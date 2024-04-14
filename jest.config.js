module.exports = {
  collectCoverage: false,
  collectCoverageFrom: [ "./src/**", "!./src/**/*.json" ],
  coveragePathIgnorePatterns: [
    "<rootDir>/src/index.ts"
  ],
  coverageDirectory: "coverage",
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    }
  },
  setupFilesAfterEnv: [ "<rootDir>/__tests__/helpers/setup-mocks.ts" ],
  testResultsProcessor: "./node_modules/jest-bamboo-formatter",
  reporters: [
    "default",
    [ "./node_modules/jest-html-reporter", {
      pageTitle: "Test Report"
    } ]
  ],
  testEnvironment: "node",
  testMatch: [ "**/__tests__/**/*.test.[jt]s?(x)" ],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/coverage/",
    "<rootDir>/dist/",
    "<rootDir>/__tests__/__mocks__",
    "<rootDir>/__tests__/mock-data/"
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  watchPathIgnorePatterns: [
    "<rootDir>/jest.json"
  ]
};
