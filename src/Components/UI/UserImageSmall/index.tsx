import React from 'react';
// @ts-ignore
import FastImage from 'expo-fast-image';

import { AvatarContainer, Circle, UserName } from './styles';

function UserImageSmall({ name, avatar, onPress }: any) {
  return (
    <AvatarContainer onPress={onPress}>
      <Circle>
        {avatar ? (
          <FastImage
            source={{
              uri: avatar,
            }}
            style={{ width: 32, height: 32 }}
          />
        ) : (
          <UserName>{name?.charAt(0)}</UserName>
        )}
      </Circle>
    </AvatarContainer>
  );
}

export default UserImageSmall;
