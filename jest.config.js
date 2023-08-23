module.exports = {
  preset: 'jest-expo',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.svg': '<rootDir>/svg-jest-starnsformer.tsx',
  },
  testPathIgnorePatterns: ['node_modules/'],
  setupFiles: ['<rootDir>/jest.setup.js'],
};
