import { FlatListProps } from 'react-native';
import { FlatList as FlatListRN } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { margin, MarginProps, padding, PaddingProps } from 'styled-system';

type Props = MarginProps & PaddingProps & FlatListProps<any>;

const FlatList = styled(FlatListRN).attrs((props: Props) => ({
  contentContainerStyle: {
    ...(props.contentContainerStyle as Record<string, unknown>),
    ...padding(props),
  },
}))<Props>`
  ${margin}
`;

export default FlatList;
