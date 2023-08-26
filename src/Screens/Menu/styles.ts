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

export const CLoseButton = styled.TouchableOpacity`
  position: absolute;
  left: 20px;
  top: 40px;
  justify-content: center;
  align-items: center;
`;
