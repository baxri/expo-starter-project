import DarkTheme from './Dark';
import MainTheme from './Main';

enum ThemeID {
  Main = 'main',
  Dark = 'dark',
}

const THEMES: Record<ThemeID, any> = {
  [ThemeID.Main]: MainTheme,
  [ThemeID.Dark]: DarkTheme,
};

export { ThemeID, THEMES };
