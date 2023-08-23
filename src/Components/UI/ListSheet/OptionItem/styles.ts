import { themeGet } from '@styled-system/theme-get';
import styled, { css } from 'styled-components/native';
import { styleFn } from 'styled-system';

type InnerProps = {
  active?: boolean;
};

const innerActiveCss: styleFn = ({ active }: InnerProps) =>
  active &&
  css`
    background-color: ${themeGet('colors.primaryLight')};
  `;

export const Inner = styled.View<InnerProps>`
  height: 48px;
  flex-direction: row;
  align-items: center;
  padding-horizontal: ${themeGet('space.5')}px;
  border-radius: ${themeGet('space.3')}px;
  overflow: hidden;

  ${innerActiveCss}
`;
