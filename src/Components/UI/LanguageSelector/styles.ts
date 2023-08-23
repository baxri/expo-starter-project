import themeGet from '@styled-system/theme-get';
import ChevronDownIcon from 'assets/images/chevronDown.svg';
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
    border-color: ${themeGet('dropdown.inner.error.borderColor')};
  `;

export const Inner = styled.View<InnerProps>`
  flex-direction: row;
  height: ${themeGet('dropdown.inner.height')}px;
  border-width: ${themeGet('dropdown.inner.borderWidth')}px;
  border-color: ${mapToTheme('dropdown.inner.borderColor')};
  border-radius: ${themeGet('dropdown.inner.borderRadius')}px;
  background-color: ${mapToTheme('dropdown.inner.backgroundColor')};

  ${innerErrorCss}
`;

export const ValueContainer = styled.View`
  flex: 1;
  padding-top: ${themeGet('dropdown.valueContainer.paddingTop')}px;
  padding-bottom: ${themeGet('dropdown.valueContainer.paddingBottom')}px;
  padding-horizontal: ${themeGet(
    'dropdown.valueContainer.paddingHorizontal',
  )}px;
`;

export const Value = styled(Text)``;

export const ChevronContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;

export const Chevron = styled(ChevronDownIcon).attrs((props) => ({
  stroke: themeGet('dropdown.chevron.stroke')(props),
}))``;

export const StyledFieldHelper = styled(FieldHelper)`
  margin-top: ${themeGet('dropdown.fieldHelper.marginTop')}px;
`;
