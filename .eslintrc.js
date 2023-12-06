module.exports = {
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:sonarjs/recommended',
  ],
  plugins: ['unused-imports', 'sonarjs'],
  ignorePatterns: [
    'node_modules',
    'build/**',
    'backpack.config.js',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    'no-unused-vars': 'off',
    'max-len': 'off',
    'sonarjs/cognitive-complexity': 'error',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_|(ctx)|(evt)',
      },
    ],
  },
  overrides: [
    {
      files: ['src/modules/shared/infra/database/migrations/*'],
      rules: {
        camelcase: 'off',
      },
    },
    {
      files: 'errors.js',
      rules: {
        'max-classes-per-file': 'off',
      },
    },
  ],
};
