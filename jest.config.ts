import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({ dir: "./" });

const config: Config = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^next/image$": "<rootDir>/__mocks__/next-image.tsx",
  },
  testMatch: ["**/__tests__/**/*.test.{ts,tsx}"],
};

export default createJestConfig(config);
