import styled from 'styled-components/native';
import { MarginProps } from 'styled-system';

import Text from '../Text';

export type ContainerProps = MarginProps;

export const TabTitle = styled(Text)`
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  color: #555b6e;
  margin-top: 5px;
  text-align: center;
`;

export const TabContainer = styled.View`
  display: flex
  flex-direction: row;
  justify-content: space-between;
  border-top-width: 1px;
  border-top-color: #D5CED8;
  background-color: #fff;
  padding-top: 20px;
  padding-bottom: 16.5px;
  align-items: center;`;

export const TabButton = styled.TouchableOpacity`
  dispaly: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
`;
