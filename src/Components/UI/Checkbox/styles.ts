import { themeGet } from '@styled-system/theme-get';
import CheckmarkIcon from 'assets/images/checkmark.svg';
import styled, { css } from 'styled-components/native';
import { space, SpaceProps, styleFn } from 'styled-system';

import Text from 'Components/UI/Text';

export type ContainerProps = SpaceProps;

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})<ContainerProps>`
  flex-direction: row;
  align-items: center;

  ${space}
`;

type BoxProps = {
  checked?: boolean;
  disabled?: boolean;
  error?: boolean | string;
};

const boxCheckedCss: styleFn = ({ checked }: BoxProps) =>
  checked &&
  css`
    background-color: ${themeGet('colors.primary')};
    border-color: ${themeGet('colors.primary')};
  `;

const boxErrorCss: styleFn = ({ error }: BoxProps) =>
  error &&
  css`
    border-color: ${themeGet('colors.error')};
  `;

const boxErrorCheckedCss: styleFn = ({ error, checked }: BoxProps) =>
  error &&
  checked &&
  css`
    background-color: ${themeGet('colors.error')};
  `;

const boxDisabledCss: styleFn = ({ disabled }: BoxProps) =>
  disabled &&
  css`
    background-color: ${themeGet('colors.backgroundDisabled')};
    border-color: ${themeGet('colors.backgroundDisabled')};
  `;

export const Box = styled.View<BoxProps>`
  width: 24px;
  aspect-ratio: 1;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: ${themeGet('colors.divider')};
  border-radius: ${themeGet('space.2')}px;

  ${boxCheckedCss}
  ${boxErrorCss}
  ${boxErrorCheckedCss}
  ${boxDisabledCss}
`;

type LabelProps = {
  disabled?: boolean;
  error?: boolean | string;
};

const labelErrorCss: styleFn = ({ error }: LabelProps) =>
  error &&
  css`
    color: ${themeGet('colors.error')};
  `;

const labelDisabledCss: styleFn = ({ disabled }: LabelProps) =>
  disabled &&
  css`
    color: ${themeGet('colors.textDisabled')};
  `;

export const Label = styled(Text).attrs({
  numberOfLines: 1,
})<LabelProps>`
  flex-shrink: 1;

  ${labelErrorCss}
  ${labelDisabledCss}
`;

type CheckmarkProps = {
  disabled?: boolean;
};

const checkmarkDisabledCss: styleFn = ({ disabled }: CheckmarkProps) =>
  disabled &&
  css`
    stroke: ${themeGet('colors.textDisabled')};
  `;

export const Checkmark = styled(CheckmarkIcon)`
  stroke: ${themeGet('colors.textContrast')};

  ${checkmarkDisabledCss}
`;
