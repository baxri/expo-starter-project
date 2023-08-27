import { themeGet } from '@styled-system/theme-get';
import styled, { css } from 'styled-components/native';
import { mapToTheme } from 'styled-map';
import { styleFn } from 'styled-system';

import Text from 'Components/UI/Text';

type ContainerProps = {
  active?: boolean;
};

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
`;

type ValueProps = {
  disabled?: boolean;
};

export const Value = styled(Text).attrs({
  numberOfLines: 1,
})<ValueProps>`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #6d758e;
`;
