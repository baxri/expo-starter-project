import { StyleSheet } from 'react-native';
import Picker, {
  AndroidNativeProps,
  BaseProps,
  IOSNativeProps,
} from '@react-native-community/datetimepicker';
import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components/native';
import { padding, PaddingProps } from 'styled-system';

export default StyleSheet.create({
  modal: { justifyContent: 'flex-end', width: '100%', margin: 0 },
});

type ContentProps = PaddingProps;

export const Content = styled.View<ContentProps>`
  background-color: ${themeGet('colors.background')};
  border-top-left-radius: ${themeGet('space.4')}px;
  border-top-right-radius: ${themeGet('space.4')}px;

  ${padding}
`;

type PickerProps = IOSNativeProps | AndroidNativeProps | BaseProps;

export const DateTimePicker = styled(Picker).attrs((props) => ({
  textColor: themeGet('colors.text')(props),
}))<PickerProps>`
  width: 100%;
`;
