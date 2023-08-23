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
  height: ${themeGet('datePicker.inner.height')}px;
  border-width: ${themeGet('datePicker.inner.borderWidth')}px;
  border-color: ${mapToTheme('datePicker.inner.borderColor')};
  border-radius: ${themeGet('datePicker.inner.borderRadius')}px;
  background-color: ${mapToTheme('datePicker.inner.backgroundColor')};

  ${innerErrorCss}
`;

export const ValueContainer = styled.View`
  flex: 1;
  padding-top: ${themeGet('datePicker.valueContainer.paddingTop')}px;
  padding-bottom: ${themeGet('datePicker.valueContainer.paddingBottom')}px;
  padding-horizontal: ${themeGet(
    'datePicker.valueContainer.paddingHorizontal',
  )}px;
`;

export const Value = styled(Text)``;

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
