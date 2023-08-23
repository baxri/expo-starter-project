import React from 'react';
import { useTranslation } from 'react-i18next';

import { SafeAreaView } from 'Services/safeArea';

import { Button, LanguageSelector, Text } from 'Components/UI';
import { Column, Row } from 'Components/UI/View';
import WelcomeCarusel from 'Components/UI/WelcomeCarusel';

function WelcomeScreen({ navigation }: any) {
  const { t } = useTranslation();
  const handleGetStartedPress = () => {
    navigation.navigate('Login');
  };

  return (
    <Column bg="white" p={5} stretch>
      <SafeAreaView style={{ flex: 1 }} bottom top>
        <Row justifyEnd>
          <LanguageSelector />
        </Row>
        <Column stretch>
          <WelcomeCarusel />
        </Column>
        <Button title={t('getStarted')} onPress={handleGetStartedPress} />
        <Row alignCenter justifyCenter>
          <Text>{t('alreadyHaveAnAccount')}</Text>
          <Button
            ml={2}
            title={t('login')}
            link
            onPress={handleGetStartedPress}
          />
        </Row>
      </SafeAreaView>
    </Column>
  );
}

export default WelcomeScreen;
