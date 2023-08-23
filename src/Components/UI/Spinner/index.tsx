import { UIActivityIndicator } from 'react-native-indicators';
import styled from 'styled-components/native';
import { color, ColorProps } from 'styled-system';

type Props = ColorProps;

const Spinner = styled(UIActivityIndicator).attrs((props: Props) => ({
  ...color(props),
}))<Props>``;

export default Spinner;
