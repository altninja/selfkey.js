module.exports = {
	globalSetup: '<rootDir>/test/jest-setup.js',
	globalTeardown: '<rootDir>/test/jest-teardown.js',
	setupFilesAfterEnv: ['<rootDir>/test/jest-setup-test-framework.js'],
	testPathIgnorePatterns: ['/node_modules/', '/dist/'],
	modulePaths: ['<rootDir>/src'],
	testMatch: ['**/src/**/*.spec.js', '**/src/**/*.steps.js'],
	verbose: true,
	testEnvironment: 'jsdom',
	testURL: 'http://localhost/',
	collectCoverageFrom: ['src/{main,common}/**/*.js'],
	coverageReporters: ['json', 'lcov', 'text'],
	coveragePathIgnorePatterns: ['src/main/(seed|assets|migrations)'],
	coverageDirectory: 'dist/coverage',
	coverageThreshold: {},
	transform: {
		'^.+\\.(js|jsx)$': 'babel-jest'
	},
	moduleNameMapper: {
		'\\.(css|less)$': '<rootDir>/test/styleMock.js',
		'\\.(png|gif|ttf|eot|svg)$': '<rootDir>/test/fileMock.js'
	}
};
