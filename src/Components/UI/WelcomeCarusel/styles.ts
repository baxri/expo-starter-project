import { Dimensions } from 'react-native';
import { themeGet } from '@styled-system/theme-get';
import styled, { css } from 'styled-components/native';
import { styleFn } from 'styled-system';

import { Column, Row } from '../View';

const SCREEN_WIDTH = Dimensions.get('window').width - 32;

const boxBackground: styleFn = ({ backgroundColor }: BoxProps) =>
  backgroundColor &&
  css`
    background-color: ${backgroundColor};
  `;

export type BoxProps = {
  backgroundColor?: string;
};

export const Box = styled.View<BoxProps>`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background-color: ${themeGet('colors.overlay')};

  ${boxBackground}
`;

export const SubTitle = styled.Text`
  margin-top: 40px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 25px;
  text-align: center;
  color: #555b6e;
`;

export const Title = styled.Text`
  margin-top: 8px;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  text-align: center;
`;

export const Description = styled.Text`
  margin-top: 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: #555b6e;
  text-align: center;
`;

export const ImageBox = styled.View`
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;

const activeIndicator: styleFn = ({ isActive }) =>
  isActive &&
  css`
    background: #657786;
  `;

export type IndicatorProps = {
  isActive?: boolean;
};

export const Indicator = styled.View<IndicatorProps>`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background: #bdbdbd;

  ${activeIndicator}
`;

export const IndicatorWraper = styled(Row)`
  margin-top: 30px;
  gap: 16px;
`;

export const ItemContainer = styled(Column)`
  padding-top: 65px;
  display: flex;
  flex-direction: column;
  width: ${SCREEN_WIDTH}px;
`;
