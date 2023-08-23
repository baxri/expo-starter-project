import fonts from './fonts';
import palette from './palette';

export default {
  inner: {
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: palette.cultured,

    focused: {
      borderColor: palette.smashedPumpkin,
    },

    backgroundColor: {
      secondary: palette.white,
      default: palette.cultured,
    },
  },
  input: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: {
      hasStartAccessory: 0,
      default: 12,
    },
    paddingRight: {
      hasEndAccessory: 0,
      default: 12,
    },
    color: palette.yankeesBlue,
    selectionColor: palette.smashedPumpkin,
    placeholderTextColor: palette.cadetBlue,
    // fontFamily: fonts.primary,
    fontSize: 16,

    disabled: {
      color: palette.philippineSilver,
    },
  },
  accessory: {
    size: 16,
    marginHorizontal: 12,
  },
};
