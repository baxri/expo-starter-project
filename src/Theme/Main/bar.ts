import palette from './palette';

export default {
  container: {
    padding: 10,
    borderLeftWidth: 2,

    borderLeftColor: {
      info: palette.frenchBlue,
      error: palette.ueRed,
      warning: palette.chineseGold,
      success: palette.laSalleGreen,
      default: palette.philippineSilver,
    },

    backgroundColor: {
      info: palette.aliceBlue,
      error: palette.linen,
      warning: palette.cosmicLatte,
      success: palette.antiFlashWhite,
      default: palette.antiFlashWhite2,
    },
  },
  title: {
    color: {
      info: palette.buttonBlue,
      error: palette.coralRed,
      warning: palette.mikadoYellow,
      success: palette.apple,
      default: palette.philippineSilver,
    },
  },
};
