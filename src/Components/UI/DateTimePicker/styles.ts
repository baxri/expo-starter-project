import themeGet from '@styled-system/theme-get';
import CalendarIcon from 'assets/images/calendar.svg';
import ClockIcon from 'assets/images/clock.svg';
import styled, { css } from 'styled-components/native';
import { mapToTheme } from 'styled-map';
import { margin, MarginProps, styleFn } from 'styled-system';

import FieldHelper from 'Components/UI/FieldHelper';
import Text from 'Components/UI/Text';

export type ContainerProps = MarginProps & {
  stretch?: boolean;
};

const containerStretchCss: styleFn = ({ stretch }: ContainerProps) =>
  stretch &&
  css`
    flex: 1;
  `;

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})<ContainerProps>`
  overflow: hidden;

  ${margin}

  ${containerStretchCss}
`;

type InnerProps = {
  error?: boolean | string;
};

const innerErrorCss: styleFn = ({ error }: InnerProps) =>
  !!error &&
  css`
    border-color: ${themeGet('datePicker.inner.error.borderColor')};
  `;

export const Inner = styled.View<InnerProps>`
  flex-direction: row;
  align-items: center;
  height: ${themeGet('textField.inner.height')}px;
  border-width: ${themeGet('textField.inner.borderWidth')}px;
  border-radius: 16px;
  border-color: #fafafb;
  background-color: #fafafb;
  overflow: hidden;

  ${innerErrorCss}
`;

export const ValueContainer = styled.View`
  flex: 1;
  padding-horizontal: ${themeGet(
    'datePicker.valueContainer.paddingHorizontal',
  )}px;
`;

export const Value = styled(Text)`
  padding-top: 7px;
  padding-bottom: 5px;
  font-size: 16px;
  color: black;
`;

export const AccessoryContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding-horizontal: ${themeGet(
    'datePicker.accessoryContainer.paddingHorizontal',
  )}px;
`;

export const DateAccessory = styled(CalendarIcon).attrs((props) => ({
  fill: themeGet('datePicker.accessory.fill')(props),
}))``;

export const TimeAccessory = styled(ClockIcon).attrs((props) => ({
  width: 15,
  fill: themeGet('datePicker.accessory.fill')(props),
}))``;

export const StyledFieldHelper = styled(FieldHelper)`
  margin-top: ${themeGet('datePicker.fieldHelper.marginTop')}px;
`;
