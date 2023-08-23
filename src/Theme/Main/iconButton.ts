import palette from './palette';

export default {
  inner: {
    backgroundColor: palette.smashedPumpkin,

    size: {
      small: 24,
      medium: 32,
      default: 56,
    },
    borderRadius: {
      small: 12,
      medium: 16,
      default: 28,
    },

    disabled: {
      backgroundColor: palette.antiFlashWhite2,
    },
    pressed: {
      backgroundColor: palette.mahogany,
    },
  },
  icon: {
    tintColor: palette.white,

    disabled: {
      tintColor: palette.philippineSilver,
    },
  },
};
