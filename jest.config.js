const nextJest = require("next/jest");

/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  // Load next.config.mjs and .env files into the test environment.
  dir: "./",
});

const config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  // Watchman times out on this machine; the node crawler is fine for a
  // project this size and avoids a noisy warning on every run.
  watchman: false,
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};

module.exports = createJestConfig(config);
