import React, { ComponentProps } from 'react';
import { ViewStyle } from 'react-native';
// @ts-ignore
import { pick } from '@styled-system/props';

import { Column } from 'Components/UI/View';

import { Value } from './styles';

type Props = ComponentProps<typeof Column> & {
  error?: boolean | string;
  value?: string | string[];
  style?: ViewStyle;
};

function FieldHelper({ error = false, value = '', style, ...rest }: Props) {
  return (
    <Column {...pick(rest)} style={style}>
      <Value error={error}>{typeof error === 'string' ? error : value}</Value>
    </Column>
  );
}

export default FieldHelper;
