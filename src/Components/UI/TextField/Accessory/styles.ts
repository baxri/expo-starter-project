import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components/native';

export const Container = styled.Pressable`
  padding-horizontal: ${themeGet('textField.accessory.paddingHorizontal')}px;
  justify-content: center;
`;
