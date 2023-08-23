import React, { memo } from 'react';
import { Pressable } from 'react-native';

import Utils from 'Utils';

import Text from 'Components/UI/Text';

import { Option } from '../types';
import { Inner } from './styles';

type Props = {
  item: Option;
  selected?: boolean;
  onPress?: () => void;
};

function OptionItem({ item, selected, onPress }: Props) {
  return (
    <Pressable onPress={() => onPress?.()}>
      {({ pressed }) => (
        <Inner active={pressed || selected}>
          <Text fontSize={2} numberOfLines={1} semiBold>
            {item.title}
          </Text>
        </Inner>
      )}
    </Pressable>
  );
}

export default memo(OptionItem, Utils.Data.arePropsEqual<Props>(['onPress']));
