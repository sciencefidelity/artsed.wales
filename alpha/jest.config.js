const dotenv = require("dotenv");
const nextJest = require("next/jest");

dotenv.config({ path: ".env.local" });

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    "^@/components/(.*)$": "<rootDir>/components/$1",

    "^@/pages/(.*)$": "<rootDir>/pages/$1",
  },
  testEnvironment: "jest-environment-jsdom",
  globalSetup: "<rootDir>/globalSetup.js",
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
module.exports = createJestConfig(customJestConfig);
