import styled from 'styled-components/native';
import { MarginProps, position } from 'styled-system';

import Text from '../Text';

export type ContainerProps = MarginProps;

export const TabTitle = styled(Text)`
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  text-align: center;
  letter-spacing: 0.001px;
`;

export const TabContainer = styled.View`
  display: flex
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 16.5px;
  align-items: center;
  position: relative;
  `;

export const TabButton = styled.TouchableOpacity`
  dispaly: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
`;

export const TransferContainer = styled.TouchableOpacity`
  position: absolute;
  top: -66px;
  left: 30%;
`;
export const BackgroundImage = styled.ImageBackground`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
`;
