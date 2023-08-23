import React from 'react';

import { Container } from './styles';

type Props = {
  children?: React.ReactNode;
  onPress?: () => void;
};

function Accessory({ children, onPress, ...rest }: Props) {
  return (
    <Container {...rest} onPress={onPress}>
      {children}
    </Container>
  );
}

export default Accessory;
