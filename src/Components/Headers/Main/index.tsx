import React from 'react';
import { DrawerActions, StackActions } from '@react-navigation/native';
import ArrowLeftIcon from 'assets/images/arrowLeft.svg';
import DentistFilterIcon from 'assets/images/dentistFilter.svg';
import MenuIcon from 'assets/images/menu.svg';
import { useDebouncedCallback } from 'use-debounce';

import { SafeAreaView } from 'Services/safeArea';

import { Column, Row } from 'Components/UI/View';

import { Edge, HeaderButton, RightButton, Title } from './styles';

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
  hasFilter,
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
        {!disableMenu && (
          <Edge>
            {back ? (
              <HeaderButton onPress={debouncedGoBack}>
                <Column alignCenter justifyCenter>
                  <ArrowLeftIcon fill="#242236" />
                </Column>
              </HeaderButton>
            ) : (
              <HeaderButton onPress={handleOpenMenu}>
                <Column size={24} alignCenter justifyCenter>
                  <MenuIcon fill="#086375" />
                </Column>
              </HeaderButton>
            )}
          </Edge>
        )}
        <Title>{options.title}</Title>
        {hasFilter ? (
          <RightButton onPress={handleFilterClick}>
            <DentistFilterIcon />
          </RightButton>
        ) : (
          <Edge />
        )}
      </Row>
    </Column>
  );
}

export default MainHeader;
