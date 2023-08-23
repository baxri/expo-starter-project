import { StyleSheet } from 'react-native';
import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components/native';

export const Content = styled.View`
  max-height: 80%;
  background-color: ${themeGet('colors.background')};
  border-top-left-radius: ${themeGet('space.4')}px;
  border-top-right-radius: ${themeGet('space.4')}px;
`;

export default StyleSheet.create({
  modal: { justifyContent: 'flex-end', margin: 0 },
});
