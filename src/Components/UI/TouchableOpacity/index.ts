import { TouchableOpacityProps } from 'react-native';
import { TouchableOpacity as TouchableOpacityRN } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native';
import {
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  styleFn,
} from 'styled-system';

type Props = LayoutProps &
  SpaceProps &
  PositionProps &
  TouchableOpacityProps & {
    alignCenter?: boolean;
    justifyCenter?: boolean;
  };

const alignCenterCss: styleFn = ({ alignCenter }: Props) =>
  alignCenter &&
  css`
    align-items: center;
  `;

const justifyCenterCss: styleFn = ({ justifyCenter }: Props) =>
  justifyCenter &&
  css`
    justify-content: center;
  `;

const TouchableOpacity = styled(TouchableOpacityRN).attrs({
  activeOpacity: 0.8,
})<Props>`
  ${layout}
  ${space}
  ${position}

  ${alignCenterCss}
  ${justifyCenterCss}
`;

export default TouchableOpacity;
