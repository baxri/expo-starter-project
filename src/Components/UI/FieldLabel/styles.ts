import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components/native';
import { margin, MarginProps } from 'styled-system';

import Text from 'Components/UI/Text';

export type ContainerProps = MarginProps;

export const Container = styled.View<ContainerProps>`
  flex-direction: row;

  ${margin}
`;

type ValueProps = {
  disabled?: boolean;
};

export const Value = styled(Text).attrs({
  numberOfLines: 1,
})<ValueProps>`
  font-size: ${themeGet('fontSizes.2')}px;
  line-height: ${themeGet('lineHeights.2')}px;
  color: ${themeGet('colors.textClue')};
`;
