const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // Ensure this points to your setup file
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jsdom",
};

module.exports = createJestConfig(customJestConfig);
