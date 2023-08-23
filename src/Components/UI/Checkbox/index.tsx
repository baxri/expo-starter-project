import React from 'react';
// @ts-ignore
import { pick } from '@styled-system/props';

import { Box, Checkmark, Container, ContainerProps, Label } from './styles';

type Props = ContainerProps & {
  disabled?: boolean;
  error?: boolean | string;
  label?: string;
  value: boolean;
  onChange?: (value: boolean) => void;
};

function Checkbox({
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
        {checked && <Checkmark disabled={disabled} />}
      </Box>

      {!!label && (
        <Label disabled={disabled} error={error} ml={3}>
          {label}
        </Label>
      )}
    </Container>
  );
}

export default Checkbox;
