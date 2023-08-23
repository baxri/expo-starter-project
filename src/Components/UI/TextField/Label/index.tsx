import React from 'react';

import { Container, Value } from './styles';

type Props = {
  active?: boolean;
  disabled?: boolean;
  label?: string;
  required?: boolean;
};

function Label({ active, label, disabled = false, required = false }: Props) {
  return (
    <Container active={active}>
      <Value disabled={disabled} numberOfLines={1}>
        {label}
        {required && '*'}
      </Value>
    </Container>
  );
}

export default Label;
