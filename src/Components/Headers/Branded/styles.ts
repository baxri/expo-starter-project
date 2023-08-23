import styled from 'styled-components/native';
import { margin, MarginProps } from 'styled-system';

import Utils from 'Utils';

export const Edge = styled.View`
  width: 24px;
`;

type HeaderButtonProps = MarginProps;

export const HeaderButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
  hitSlop: Utils.Presentational.getHitSlop(12),
})<HeaderButtonProps>`
  flex-direction: row;
  align-items: center;

  ${margin}
`;
