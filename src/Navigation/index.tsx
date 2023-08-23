import 'Translations';

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from 'styled-components/native';

import ToothyContextProvider from 'Services/context';
import { useLocale } from 'Services/Store/language';

import { ThemeID, THEMES } from 'Theme';

import RootNavigator from './Root';

function Navigation() {
  const { i18n } = useTranslation();
  const { locale } = useLocale();

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <ThemeProvider theme={THEMES[ThemeID.Main]}>
      <ToothyContextProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ToothyContextProvider>
    </ThemeProvider>
  );
}

export default Navigation;
