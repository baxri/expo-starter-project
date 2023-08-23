import React from 'react';
// @ts-ignore
import { pick } from '@styled-system/props';

import { Container, ContainerProps, Indicator, Inner, Title } from './styles';

type Props = ContainerProps & {
  disabled?: boolean;
  link?: boolean;
  loading?: boolean;
  secondary?: boolean;
  title: string;
  onPress?: () => void;
};

function Button({
  disabled = false,
  link = false,
  title,
  loading = false,
  secondary = false,
  onPress,
  ...rest
}: Props) {
  return (
    <Container
      {...pick(rest)}
      activeOpacity={0.8}
      disabled={disabled || loading}
      onPress={onPress}
    >
      {({ pressed }: { pressed: boolean }) => (
        <Inner
          disabled={disabled}
          link={link}
          pressed={pressed}
          secondary={secondary}
        >
          {loading ? (
            <Indicator link={link} secondary={secondary} />
          ) : (
            <Title
              disabled={disabled}
              link={link}
              numberOfLines={2}
              pressed={pressed}
              secondary={secondary}
            >
              {title}
            </Title>
          )}
        </Inner>
      )}
    </Container>
  );
}

export default Button;
