import fonts from './fonts';
import palette from './palette';

export default {
  inner: {
    height: 80,
    borderWidth: 1,
    borderRadius: 8,

    borderColor: {
      disabled: palette.antiFlashWhite2,
      default: palette.cultured,
    },
    backgroundColor: {
      disabled: palette.antiFlashWhite2,
      default: palette.gray6,
    },

    focused: {
      borderColor: palette.smashedPumpkin,
    },
    error: {
      borderColor: palette.coralRed,
    },
  },
  input: {
    paddingTop: 25,
    paddingBottom: 9,
    paddingLeft: {
      hasStartAccessory: 0,
      default: 16,
    },
    paddingRight: {
      hasEndAccessory: 0,
      default: 16,
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
  labelContainer: {
    translateX: 16,
    translateY: 17,
    scale: 1,

    active: {
      translateX: 21.5,
      translateY: 10,
      scale: 0.75,
    },
  },
  labelValue: {
    fontSize: 16,
    lineHeight: 20,

    color: {
      disabled: palette.philippineSilver,
      default: palette.cadetBlue,
    },
  },
  fieldHelper: {
    marginTop: 4,
    marginHorizontal: 8,
  },
  accessory: {
    paddingHorizontal: 16,
  },
};
