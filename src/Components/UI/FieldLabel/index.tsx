import React from 'react';
// @ts-ignore
import { pick } from '@styled-system/props';

import { Container, ContainerProps, Value } from './styles';

type Props = ContainerProps & {
  disabled?: boolean;
  label?: string;
  required?: boolean;
};

function FieldLabel({ disabled, label, required = false, ...rest }: Props) {
  return (
    <Container {...pick(rest)}>
      <Value disabled={disabled} numberOfLines={1}>
        {label}
        {required && '*'}
      </Value>
    </Container>
  );
}

export default FieldLabel;
