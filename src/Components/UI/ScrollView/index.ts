import { ScrollViewProps } from 'react-native';
import styled from 'styled-components/native';
import {
  color,
  ColorProps,
  margin,
  MarginProps,
  padding,
  PaddingProps,
} from 'styled-system';

type Props = ColorProps &
  MarginProps &
  PaddingProps &
  ScrollViewProps & {
    contentStretch?: boolean;
  };

const contentStretchStyle = ({ contentStretch }: Props) =>
  contentStretch && {
    flexGrow: 1,
  };

const ScrollView = styled.ScrollView.attrs((props) => ({
  contentContainerStyle: {
    ...padding(props),
    ...contentStretchStyle(props),
  },
}))<Props>`
  ${color}
  ${margin}
`;

export default ScrollView;
