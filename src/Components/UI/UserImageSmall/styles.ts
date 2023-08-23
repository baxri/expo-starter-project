import styled from 'styled-components/native';

export const AvatarContainer = styled.TouchableOpacity`
  dispaly: flex;
  width: 32px;
  height: 32px;
  border-radius: 32px;
  background-color: #f5cdff;
  justify-content: center;
  align-items: center;
`;

export const Circle = styled.View`
  border-radius: 100px;
  width: 30px;
  height: 30px;
  overflow: hidden;
  dispaly: flex;
  justify-content: center;
  align-items: center;
`;

export const UserName = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #242236;
`;
