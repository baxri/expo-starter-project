import styled from 'styled-components/native';
import { margin, MarginProps } from 'styled-system';

import Utils from 'Utils';

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
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background: #f5cdff;
  ${margin}
`;

export const HeaderContainer = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-color: #d5ced8;
  padding: 16px;
`;

export const ShareButton = styled.TouchableOpacity.attrs({
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

export const UserName = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 25px;
  /* identical to box height, or 156% */

  letter-spacing: 0.35px;

  /* Secondary 1 */

  color: #242236;
`;
