import React from 'react';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import { signOut } from 'firebase/auth';
import { useTranslation } from 'react-i18next';

import { SafeAreaView } from 'Services/safeArea';
import { clear } from 'Services/Store/session';

import { auth } from 'Utils/firebase';

import useUser from 'Hooks/useUser';

import { MainHeader } from 'Components/Headers';
import { Button, Column, ScrollView, Text } from 'Components/UI';

type Props = DrawerContentComponentProps;

function MenuScreen({ navigation }: Props) {
  const { t } = useTranslation();
  const handleCloseMenu = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
  };

  const handleLogout = async () => {
    await signOut(auth);
    clear();
  };

  return (
    <Column backgroundColor="background" stretch>
      <MainHeader
        options={{
          title: t('profile.title'),
        }}
        back
        onBackPress={handleCloseMenu}
      />
      <ScrollView px={5}>
        <Text>MENU</Text>
      </ScrollView>

      <Column p={5}>
        <Button title="Logout" onPress={handleLogout} />
      </Column>

      <SafeAreaView bottom />
    </Column>
  );
}

export default MenuScreen;
