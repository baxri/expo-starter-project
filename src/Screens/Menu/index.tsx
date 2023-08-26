import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import {
  DrawerContentComponentProps,
  useDrawerStatus,
} from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import Cross from 'assets/images/cross.svg';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { signOut } from 'firebase/auth';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { SafeAreaView } from 'Services/safeArea';
import { clear } from 'Services/Store/session';

import { auth } from 'Utils/firebase';

import useUser from 'Hooks/useUser';

import { MainHeader } from 'Components/Headers';
import { Button, Column, ScrollView, Text } from 'Components/UI';

import { CLoseButton } from './styles';

type Props = DrawerContentComponentProps;

function MenuScreen({ navigation }: Props) {
  const { t } = useTranslation();
  const isDrawerOpen = useDrawerStatus() === 'open';
  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const [lastScannedUrl, setLastScannedUrl] = useState<string | null>(null);

  const requestCameraPermission = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasCameraPermission(status === 'granted');
  };

  const handleBarCodeRead = (result: { data: string }) => {
    if (result.data !== lastScannedUrl) {
      setLastScannedUrl(result.data);
    }

    navigation.dispatch(DrawerActions.closeDrawer());
    Alert.alert(JSON.stringify(result.data));
  };

  const handleLogout = async () => {
    await signOut(auth);
    clear();
  };

  useEffect(() => {
    if (isDrawerOpen) {
      setLastScannedUrl(null);
      requestCameraPermission();
    }
  }, [isDrawerOpen]);

  return (
    <Column
      backgroundColor="black"
      position="relative"
      alignCenter
      justifyCenter
      stretch
    >
      <SafeAreaView top />

      {!hasCameraPermission ? (
        <Text color="white">Requesting for camera permission</Text>
      ) : (
        <BarCodeScanner
          style={StyleSheet.absoluteFillObject}
          onBarCodeScanned={lastScannedUrl ? undefined : handleBarCodeRead}
        />
      )}

      <CLoseButton
        onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}
      >
        <Column height={40} width={40} alignCenter justifyCenter>
          <Cross fill="white" />
        </Column>
      </CLoseButton>
    </Column>
  );
}

export default MenuScreen;
