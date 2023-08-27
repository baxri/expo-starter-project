import { themeGet } from '@styled-system/theme-get';
import { UIActivityIndicator } from 'react-native-indicators';
import styled, { css } from 'styled-components/native';
import { mapToTheme } from 'styled-map';
import { margin, MarginProps, styleFn } from 'styled-system';

import Text from 'Components/UI/Text';

export type ContainerProps = MarginProps;

export const Container = styled.Pressable<ContainerProps>`
  ${margin}
`;

type InnerProps = {
  disabled?: boolean;
  link?: boolean;
  pressed?: boolean;
  secondary?: boolean;
};

const innerLinkCss: styleFn = ({ link }: InnerProps) =>
  link &&
  css`
    background-color: ${themeGet('button.inner.link.backgroundColor')};
  `;

const innerPressedCss: styleFn = ({ pressed }: InnerProps) =>
  pressed &&
  css`
    background-color: ${mapToTheme('button.inner.pressed.backgroundColor')};
  `;

const innerDisabledCss: styleFn = ({ disabled }: InnerProps) =>
  disabled &&
  css`
    background-color: ${themeGet('button.inner.disabled.backgroundColor')};
  `;

export const Inner = styled.View<InnerProps>`
  height: ${themeGet('button.inner.height')}px;
  min-width: ${themeGet('button.inner.minWidth')}px;
  border-radius: ${themeGet('button.inner.borderRadius')}px;
  background-color: ${mapToTheme('button.inner.backgroundColor')};
  align-items: center;
  justify-content: center;

  ${innerPressedCss}
  ${innerDisabledCss}
  ${innerLinkCss}
`;

// elevation: 8; /* Android elevation */
// shadow-color: #2667ff; /* iOS shadow color */
// shadow-offset: { width: 0, height: 8 }; /* iOS shadow offset */
// shadow-opacity: 0.4; /* iOS shadow opacity */
// shadow-radius: 15; /* iOS shadow radius */

type TitleProps = {
  disabled?: boolean;
  pressed?: boolean;
  link?: boolean;
  secondary?: boolean;
};

const titleLinkCss: styleFn = ({ link }: InnerProps) =>
  link &&
  css`
    color: ${mapToTheme('button.title.link.color')};
  `;

const titleDisabledCss: styleFn = ({ disabled }: InnerProps) =>
  disabled &&
  css`
    color: ${themeGet('button.title.disabled.color')};
  `;

export const Title = styled(Text)<TitleProps>`
  color: ${mapToTheme('button.title.color')};
  font-size: ${themeGet('button.title.fontSize')}px;
  line-height: ${themeGet('button.title.lineHeight')}px;
  font-weight: ${themeGet('button.title.fontWeight')};
  text-align: center;

  ${titleLinkCss}
  ${titleDisabledCss}
`;

type IndicatorProps = {
  link?: boolean;
  secondary?: boolean;
};

export const Indicator = styled(UIActivityIndicator).attrs(
  (props: IndicatorProps) => ({
    color: mapToTheme('button.indicator.color')(props)(props),
    size: themeGet('button.indicator.size')(props),
  }),
)<IndicatorProps>``;
