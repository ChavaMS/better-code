module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    transformIgnorePatterns: [
        "node_modules/(?!(query-string|decode-uri-component|split-on-first|filter-obj)/)",
    ],
    moduleNameMapper: {
        '\\.(css|less)$': '<rootDir>/tests/__mocks__/styleMock.js',
    },
    setupFiles: ['./jest.setup.js']
}