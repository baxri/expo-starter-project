import palette from './palette';

export default {
  inner: {
    height: 56,
    borderWidth: 1,
    borderRadius: 8,

    borderColor: {
      disabled: palette.antiFlashWhite2,
      default: palette.cultured,
    },
    backgroundColor: {
      disabled: palette.antiFlashWhite2,
      default: palette.cultured,
    },

    error: {
      borderColor: palette.coralRed,
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
  valueContainer: {
    paddingTop: 25,
    paddingBottom: 9,
    paddingHorizontal: 16,
  },
  chevronContainer: {
    paddingHorizontal: 16,
  },
  chevron: {
    stroke: palette.yankeesBlue,
  },
  fieldHelper: {
    marginTop: 4,
  },
};
