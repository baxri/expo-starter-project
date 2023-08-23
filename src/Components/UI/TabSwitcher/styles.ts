import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  background: #e1e8ed;
  border-radius: 8px;
  height: 28px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 2px;
  gap: 2px;
`;

export const TabButtonActive = styled.TouchableOpacity`
  height: 24px;
  background: #ffffff;
  border-radius: 7px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TabButton = styled.TouchableOpacity`
  height: 24px;
  border-radius: 7px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TabText = styled.Text`
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.08px;
  color: #21202b;
`;
