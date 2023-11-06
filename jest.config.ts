module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^.+\\.(css|png|jpg|jpeg)$': '<rootDir>/src/__mocks__/file-mock.cjs',
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.tsx'],
  coveragePathIgnorePatterns: ['/src/requests/moviesRequest.ts',
'/src/components/Error',
'src/components/Home',
'src/main.tsx',
'src/App.tsx',
'src/components/Header'
],
};
