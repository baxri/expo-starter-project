import palette from './palette';

export default {
  inner: {
    height: 50,
    minWidth: 56,
    borderRadius: 8,

    backgroundColor: {
      secondary: palette.secondary4,
      default: palette.primary3,
    },
    pressed: {
      backgroundColor: {
        secondary: palette.primary2,
        default: palette.primary3,
      },
    },
    disabled: {
      backgroundColor: palette.antiFlashWhite2,
    },
    link: {
      backgroundColor: palette.clear,
    },
  },
  title: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 600,

    color: {
      secondary: palette.secondary1,
      default: palette.white,
    },

    disabled: {
      color: palette.philippineSilver,
    },

    link: {
      color: {
        disabled: palette.antiFlashWhite2,
        pressed: palette.secondary1,
        default: palette.primary3,
      },
    },
  },
  indicator: {
    size: 24,

    color: {
      link: palette.smashedPumpkin,
      secondary: palette.yankeesBlue,
      default: palette.white,
    },
  },
};
