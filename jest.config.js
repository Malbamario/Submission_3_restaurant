const config = {
  testMatch: ['**/tests/**/*.test.[jt]s?(x)'],
  setupFiles: ['fake-indexeddb/auto'],
  testEnvironment: 'jsdom',
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
};

module.exports = config;
