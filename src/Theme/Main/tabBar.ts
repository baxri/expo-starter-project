import palette from './palette';

export default {
  default: {
    tabItem: {
      height: 46,
      borderBottomWidth: 2,
      paddingBottom: 8,
      paddingHorizontal: 8,

      borderBottomColor: {
        active: palette.smashedPumpkin,
        default: palette.platinum,
      },
    },
    tabItemLabel: {
      fontWeight: 700,

      color: {
        active: palette.smashedPumpkin,
        default: palette.cadetBlue,
      },
    },
  },
  pill: {
    tabItem: {
      height: 30,
      borderWidth: 1,
      borderRadius: 4,
      paddingHorizontal: 8,

      marginLeft: {
        first: 0,
        default: 8,
      },

      backgroundColor: {
        active: palette.smashedPumpkin,
        default: palette.clear,
      },
      borderColor: {
        active: palette.smashedPumpkin,
        default: palette.platinum,
      },
    },
    tabItemLabel: {
      fontWeight: 400,

      color: {
        active: palette.white,
        default: palette.americanBlue,
      },
    },
  },
};
