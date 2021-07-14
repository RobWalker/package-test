module.exports = {
  moduleFileExtensions: [
    'js',
    'ts',
    'json'
  ],

  extensionsToTreatAsEsm: [ ".ts" ],
  
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  
  modulePathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/dist',
    '<rootDir>/email.auctria-dev.xyz'    
  ],

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@client/(.*)$': '<rootDir>/../test-client/src/$1',
    '^@core/(.*)$': '<rootDir>/../test-core/src/$1'
  },

  modulePaths: [
      '<rootDir>'
  ], 
}