import bar from './bar';
import button from './button';
import colors from './colors';
import datePicker from './datePicker';
import dropdown from './dropdown';
import fieldHelper from './fieldHelper';
import fonts from './fonts';
import iconButton from './iconButton';
import navigation from './navigation';
import tabBar from './tabBar';
import textField from './textField';
import userImage from './userImage';
import utilityTextField from './utilityTextField';

export default {
  name: 'Main Theme',
  dark: false,
  bar,
  button,
  colors,
  datePicker,
  dropdown,
  fieldHelper,
  fonts,
  iconButton,
  navigation,
  tabBar,
  textField,
  userImage,
  utilityTextField,

  // --   0  1  2  3  4   5   6   7   8   9
  space: [0, 2, 4, 8, 12, 16, 20, 24, 32, 64],
  // --       0   1   2   3    4   5   7   8   9
  fontSizes: [12, 14, 16, 18, 20, 22, 24, 28, 34],
  // --         0   1   2   3    4   5   7   8   9
  lineHeights: [15, 17, 19, 21, 23, 25, 27, 31, 37],
  // --         0    1    2    3
  fontWeights: [400, 500, 600, 700],
};
