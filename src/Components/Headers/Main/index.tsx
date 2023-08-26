import React from 'react';
import { DrawerActions, StackActions } from '@react-navigation/native';
import ArrowLeft from 'assets/icons/arrow-left.svg';
import Deposit from 'assets/icons/deposit.svg';
import QrScan from 'assets/icons/qr-scan.svg';
import Settings from 'assets/icons/settings.svg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDebouncedCallback } from 'use-debounce';

import { SafeAreaView } from 'Services/safeArea';

import { Text } from 'Components/UI';
import { Column, Row } from 'Components/UI/View';

import { Edge, HeaderButton } from './styles';

type Props = any & {
  disableMenu?: boolean;
  options: {
    title?: string;
  };
  rightIcon?: boolean;
};

function MainHeader({
  route,
  options,
  back,
  navigation,
  disableMenu,
  onBackPress,
  showSettings,
  showDeposit,
  showTitle,
}: Props) {
  const debouncedGoBack = useDebouncedCallback(() => {
    if (onBackPress) {
      onBackPress();
      return;
    }

    if (navigation.canGoBack()) {
      navigation.dispatch({ ...StackActions.pop(), source: route.key });
    }
  }, 50);

  const handleOpenMenu = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const handleFilterClick = () => {};

  return (
    <Column bg="white">
      <SafeAreaView top />

      <Row height="70px" px={5} alignCenter justifyBetween>
        <Row alignItems="center">
          {!disableMenu && (
            <Edge>
              {back ? (
                <HeaderButton onPress={debouncedGoBack}>
                  <Column alignCenter justifyCenter>
                    <ArrowLeft />
                  </Column>
                </HeaderButton>
              ) : (
                <HeaderButton onPress={handleOpenMenu}>
                  <Column size={24} alignCenter justifyCenter>
                    <QrScan />
                  </Column>
                </HeaderButton>
              )}
            </Edge>
          )}
          {showTitle && (
            <Text color="#0F1120" fontSize={2} fontWeight={1} ml={8}>
              {options.title}
            </Text>
          )}
        </Row>
        {showSettings && (
          <HeaderButton onPress={handleOpenMenu}>
            <Column size={24} alignCenter justifyCenter>
              <Settings />
            </Column>
          </HeaderButton>
        )}
        {showDeposit && (
          <TouchableOpacity>
            <Row alignItems="center">
              <Deposit />
              <Text color="#2667FF" fontSize={2} fontWeight={2} ml={3}>
                Deposit EUR
              </Text>
            </Row>
          </TouchableOpacity>
        )}
      </Row>
    </Column>
  );
}

export default MainHeader;
