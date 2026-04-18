const nextJest = require("next/jest.js");

const createJestConfig = nextJest({ dir: "./" });

/** @type {import('jest').Config} */
const config = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^next/image$": "<rootDir>/__mocks__/next-image.tsx",
  },
  testMatch: ["**/__tests__/**/*.test.{ts,tsx}"],
};

module.exports = createJestConfig(config);
