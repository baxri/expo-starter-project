import React from 'react';
// @ts-ignore
import { pick } from '@styled-system/props';

import { Box, Container, ContainerProps, InnerCircle, Label } from './styles';

type Props = ContainerProps & {
  disabled?: boolean;
  error?: boolean | string;
  label?: string;
  value: boolean;
  onChange?: (value: boolean) => void;
};

function Radio({
  label,
  value,
  error = false,
  disabled = false,
  onChange,
  ...rest
}: Props) {
  const checked = !!value;

  return (
    <Container
      {...pick(rest)}
      disabled={disabled}
      onPress={() => onChange?.(!value)}
    >
      <Box checked={checked} disabled={disabled} error={error}>
        {checked && <InnerCircle disabled={disabled} error={error} />}
      </Box>

      {!!label && (
        <Label disabled={disabled} error={error} ml={3}>
          {label}
        </Label>
      )}
    </Container>
  );
}

export default Radio;
