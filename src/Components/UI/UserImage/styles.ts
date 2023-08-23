import styled from 'styled-components/native';

export const AvatarContainer = styled.TouchableOpacity`
  dispaly: flex;
  width: 94px;
  height: 94px;
  border-radius: 94px;
  background-color: #f5cdff;
  justify-content: center;
  align-items: center;
`;

export const Circle = styled.View`
  border-radius: 100px;
  width: 86px;
  height: 86px;
  overflow: hidden;
  dispaly: flex;
  justify-content: center;
  align-items: center;
`;

export const EditIconWrapper = styled.View`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #fff;
  width: 30px;
  height: 30px;
  dispaly: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  border-width: 1px;
  border-color: lightgrey;
`;

export const UserName = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  color: #242236;
`;
