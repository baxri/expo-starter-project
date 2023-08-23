import { TextInputProps } from 'react-native';
import { themeGet } from '@styled-system/theme-get';
import styled, { css, DefaultTheme } from 'styled-components/native';
import { mapToTheme } from 'styled-map';
import {
  layout,
  LayoutProps,
  margin,
  MarginProps,
  styleFn,
} from 'styled-system';

import FieldHelper from 'Components/UI/FieldHelper';

export type ContainerProps = LayoutProps & MarginProps;

export const Container = styled.View<ContainerProps>`
  ${layout}
  ${margin}
`;

type InnerProps = {
  disabled?: boolean;
  error?: boolean | string;
  focused?: boolean;
};

const innerFocusedCss: styleFn = ({ focused }: InnerProps) =>
  focused &&
  css`
    border-color: ${themeGet('textField.inner.focused.borderColor')};
  `;

const innerErrorCss: styleFn = ({ error }: InnerProps) =>
  !!error &&
  css`
    border-color: ${themeGet('textField.inner.error.borderColor')};
    border-width: ${themeGet('textField.inner.borderWidth')}px;
  `;

export const Inner = styled.View<InnerProps>`
  flex-direction: row;
  align-items: center;
  height: ${themeGet('textField.inner.height')}px;
  border-radius: ${themeGet('textField.inner.borderRadius')}px;
  background-color: ${themeGet('textField.inner.backgroundColor.default')};
  overflow: hidden;

  ${innerErrorCss}
`;

type InputProps = TextInputProps & {
  disabled?: boolean;
  hasEndAccessory?: boolean;
  hasStartAccessory?: boolean;
  theme?: DefaultTheme;
};

const getInputColor = ({ theme, disabled }: InputProps): string =>
  disabled
    ? themeGet('textField.input.disabled.color')({ theme })
    : themeGet('textField.input.color')({ theme });

const getInputSelectionColor = ({ theme }: InputProps): string =>
  themeGet('textField.input.selectionColor')({ theme });

const getInputPlaceholderTextColor = ({ theme }: InputProps): string =>
  themeGet('textField.input.placeholderTextColor')({ theme });

export const Input = styled.TextInput.attrs((props: InputProps) => ({
  color: getInputColor(props),
  selectionColor: getInputSelectionColor(props),
  placeholderTextColor: getInputPlaceholderTextColor(props),
  editable: !props.disabled,
  allowFontScaling: false,
}))<InputProps>`
  flex: 1;
  padding-top: ${themeGet('textField.input.paddingBottom')}px;
  padding-bottom: ${themeGet('textField.input.paddingBottom')}px;
  padding-left: ${mapToTheme('textField.input.paddingLeft')}px;
  padding-right: ${mapToTheme('textField.input.paddingRight')}px;
  font-size: ${themeGet('textField.input.fontSize')}px;
`;
// font-family: ${themeGet('textField.input.fontFamily')};

export const StyledFieldHelper = styled(FieldHelper)`
  margin-top: ${themeGet('textField.fieldHelper.marginTop')}px;
  margin-horizontal: ${themeGet('textField.fieldHelper.marginHorizontal')}px;
`;

export const Stack = styled.View`
  flex-direction: row;
  overflow: hidden;
`;
