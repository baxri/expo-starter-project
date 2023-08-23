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
        ${themeGet('datePicker.labelContainer.active.translateX')}px
      )
      translateY(${themeGet('datePicker.labelContainer.active.translateY')}px)
      scale(${themeGet('datePicker.labelContainer.active.scale')});
  `;

export const Container = styled.View<ContainerProps>`
  position: absolute;
  top: 0;
  left: -100%;
  width: 200%;
  padding-left: 50%;
  flex-direction: row;
  transform: translateX(${themeGet('datePicker.labelContainer.translateX')}px)
    translateY(${themeGet('datePicker.labelContainer.translateY')}px)
    scale(${themeGet('datePicker.labelContainer.scale')});

  ${containerActiveCss};
`;

type ValueProps = {
  disabled?: boolean;
};

export const Value = styled(Text).attrs({
  numberOfLines: 1,
})<ValueProps>`
  font-size: ${themeGet('datePicker.labelValue.fontSize')}px;
  line-height: ${themeGet('datePicker.labelValue.lineHeight')}px;
  color: ${mapToTheme('datePicker.labelValue.color')};
`;
