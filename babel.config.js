module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          alias: {
            Services: './src/Services',
            Theme: './src/Theme',
            Utils: './src/Utils',
            Types: './src/Types',
            Components: './src/Components',
            assets: './src/assets',
            Navigation: './src/Navigation',
            Screens: './src/Screens',
            Hooks: './src/Hooks',
            Translations: './src/Translations',
            Api: './src/Api',
          },
        },
      ],
    ],
  };
};
