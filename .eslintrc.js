module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['react', 'prettier', '@typescript-eslint', 'simple-import-sort'],
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.d.ts',
          '.android.js',
          '.android.jsx',
          '.android.ts',
          '.android.tsx',
          '.ios.js',
          '.ios.jsx',
          '.ios.ts',
          '.ios.tsx',
        ],
      },
    },
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  rules: {
    // -- Prettier
    'prettier/prettier': ['error'],
    // -- TypeScript
    'react-hooks/exhaustive-deps': 'off',
    'no-console': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-dupe-keys': 'off',
    'camelcase': 'off',
    'consistent-return': 'off',
    'default-case': 'off',
    '@typescript-eslint/camelcase': 'off',
    'react/no-unused-prop-types': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
    '@typescript-eslint/no-namespace': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'react/no-array-index-key': 'off',
    '@typescript-eslint/no-shadow': 'error',
    // -- React
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'function-declaration',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandLast: true,
      },
    ],
    'react/no-unstable-nested-components': ['off', { allowAsProps: true }],
    'react/prop-types': ['off', {}],
    // -- JSX A11y
    'jsx-a11y/anchor-is-valid': 'off',
    'no-restricted-syntax': 'off',
    'guard-for-in': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    // -- Import
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
        jsx: 'never',
        tsx: 'never',
      },
    ],
    'import/prefer-default-export': 'off',
    // -- ESLint
    'no-bitwise': 'off',
    'no-plusplus': 'off',
    'no-shadow': 'off',
    'no-use-before-define': 'off',
    // -- Simple import sort
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // Side effect imports
          ['^\\u0000'],
          // React and Packages
          ['^react$', '^react-native$', '^@?[a-zA-Z0-9]'],
          // "lodash" related packages
          ['^lodash'],
          // Internal packages
          ['^Assets(/.*|$)'],
          ['^Api(/.*|$)'],
          ['^Config(/.*|$)'],
          ['^Constants(/.*|$)'],
          ['^Services(/.*|$)'],
          ['^Utils(/.*|$)'],
          ['^Hooks(/.*|$)'],
          ['^Navigation(/.*|$)'],
          ['^Coordinators(/.*|$)'],
          ['^Theme(/.*|$)'],
          ['^Screens(/.*|$)'],
          [
            '^Components(/.*|$)',
            '^Components/Blocks(/.*|$)',
            '^Components/UI(/.*|$)',
          ],
          // Other relative imports
          [
            '^\\.\\.(?!/?$)',
            '^\\.\\./?$',
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)',
            '^\\./?$',
          ],
        ],
      },
    ],
  },
};
