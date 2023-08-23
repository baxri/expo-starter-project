import React from 'react';
import { Alert, Share } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import ShareIcon from 'assets/images/share.svg';

import { SafeAreaView } from 'Services/safeArea';

import useUser from 'Hooks/useUser';

import UserImageSmall from 'Components/UI/UserImageSmall';
import { Column } from 'Components/UI/View';

import { Edge, HeaderContainer, ShareButton } from './styles';

type Props = any & {
  disableMenu?: boolean;
  options: {
    title?: string;
  };
};

function AuthHeader({ options, navigation }: Props) {
  const { profileData } = useUser();
  const handleOpenMenu = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'https://example.com',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  return (
    <Column bg="white">
      <SafeAreaView top />
      <HeaderContainer>
        <Edge>
          <UserImageSmall
            avatar=""
            name={profileData?.name}
            onPress={handleOpenMenu}
          />
        </Edge>
        <ShareButton onPress={onShare}>
          <ShareIcon fill="#086375" />
        </ShareButton>
      </HeaderContainer>
    </Column>
  );
}

export default AuthHeader;
