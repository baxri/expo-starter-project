import merge from 'lodash/merge';

import MainTheme from 'Theme/Main';

export default merge({}, MainTheme, {
  name: 'Dark Theme',
  dark: true,
});
