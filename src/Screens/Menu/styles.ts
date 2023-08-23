import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';
import { margin, MarginProps } from 'styled-system';

import Utils from 'Utils';

type HeaderButtonProps = MarginProps & TouchableOpacityProps;

export const HeaderButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
  hitSlop: Utils.Presentational.getHitSlop(12),
})<HeaderButtonProps>`
  flex-direction: row;
  align-items: center;

  ${margin}
`;
export const AvatarContainer = styled.View`
  dispaly: flex;
  width: 94px;
  height: 94px;
  border-radius: 94px;
  background-color: #f5cdff;
  justify-content: center;
  align-items: center;
`;

export const Circle = styled.View`
  border-radius: 100px;
  width: 86px;
  height: 86px;
  overflow: hidden;
`;

export const Name = styled.Text`
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  color: #242236;
  margin-top: 8px;
`;

export const Description = styled.Text`
  font-weight: 400;
  font-size: 12px;
  line-height: 25px;
  text-align: center;
  color: #555b6e;
  margin-bottom: 25px;
`;

export const LinkButton = styled.Text`
  font-weight: 500;
  font-size: 14px;
  line-height: 25px;
  color: #555b6e;
  margin-bottom: 10px;
`;
