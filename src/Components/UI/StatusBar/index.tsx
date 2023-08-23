import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components/native';

const StatusBar = styled.StatusBar.attrs((props) => ({
  barStyle:
    props.barStyle ?? themeGet('dark')(props)
      ? 'light-content'
      : 'dark-content',
  backgroundColor: themeGet('colors.statusBar')(props),
  translucent: true,
}))``;

export default StatusBar;
