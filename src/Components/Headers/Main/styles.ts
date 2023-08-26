import styled from 'styled-components/native';
import { margin, MarginProps } from 'styled-system';

import Utils from 'Utils';

export const RightButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
  hitSlop: Utils.Presentational.getHitSlop(12),
})<HeaderButtonProps>`
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  ${margin}
`;

export const Edge = styled.View`
  width: 24px;
`;

export const Title = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 19px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.41px;
  color: #242236;
  text-align: center;
`;

type HeaderButtonProps = MarginProps;

export const HeaderButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
  hitSlop: Utils.Presentational.getHitSlop(12),
})<HeaderButtonProps>`
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  border: 1px;
  gap: 10px;
  border: 1px solid #e9efff;

  ${margin}
`;
