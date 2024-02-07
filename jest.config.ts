/** @type {import('jest').Config} */
const config = {
  verbose: true,
  preset: "ts-jest",
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  modulePaths: ["<rootDir>"],
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js",
  },
  testEnvironment: "jsdom",
};

module.exports = config;
export {};
