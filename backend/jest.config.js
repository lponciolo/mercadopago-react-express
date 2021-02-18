module.exports = {
  clearMocks: true,
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  roots: [
      "<rootDir>/__tests__/"
  ],
  setupFiles: ["<rootDir>/src/config.ts"],
  testEnvironment: "node",
  transform: {
      '^.+\\.tsx?$': 'ts-jest'
  },
};