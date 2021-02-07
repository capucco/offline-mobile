module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'airbnb-typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'global-require': 0,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          assets: './src/assets',
          components: './src/components',
          navigations: './src/navigations',
          screens: './src/screens',
        },
      },
    },
  },
};
