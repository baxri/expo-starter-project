import palette from './palette';

export default {
  inner: {
    height: 52,
    minWidth: 56,
    borderRadius: 100,

    backgroundColor: {
      secondary: palette.secondary4,
      default: '#2667FF',
    },
    pressed: {
      backgroundColor: {
        secondary: palette.primary2,
        default: '#2667FF',
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
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 700,

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
