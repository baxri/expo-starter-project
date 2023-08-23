import { themeGet } from '@styled-system/theme-get';
import styled, { css } from 'styled-components/native';
import { mapToTheme } from 'styled-map';
import { styleFn } from 'styled-system';

import Text from 'Components/UI/Text';

type ContainerProps = {
  active?: boolean;
};

const containerActiveCss: styleFn = ({ active }: ContainerProps) =>
  active &&
  css`
    transform: translateX(
        ${themeGet('dropdown.labelContainer.active.translateX')}px
      )
      translateY(${themeGet('dropdown.labelContainer.active.translateY')}px)
      scale(${themeGet('dropdown.labelContainer.active.scale')});
  `;

export const Container = styled.View<ContainerProps>`
  position: absolute;
  top: 0;
  left: -100%;
  width: 200%;
  padding-left: 50%;
  flex-direction: row;
  transform: translateX(${themeGet('dropdown.labelContainer.translateX')}px)
    translateY(${themeGet('dropdown.labelContainer.translateY')}px)
    scale(${themeGet('dropdown.labelContainer.scale')});

  ${containerActiveCss};
`;

type ValueProps = {
  disabled?: boolean;
};

export const Value = styled(Text).attrs({
  numberOfLines: 1,
})<ValueProps>`
  font-size: ${themeGet('dropdown.labelValue.fontSize')}px;
  line-height: ${themeGet('dropdown.labelValue.lineHeight')}px;
  color: ${mapToTheme('dropdown.labelValue.color')};
`;
