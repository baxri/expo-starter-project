import themeGet from '@styled-system/theme-get';
import styled from 'styled-components/native';
import { mapToTheme } from 'styled-map';

import Text from 'Components/UI/Text';

export const Container = styled.View`
  flex-direction: row;
`;

type TabItemProps = {
  active?: boolean;
};

export const TabItem = styled.TouchableOpacity.attrs({
  activeOpacity: 0.75,
})<TabItemProps>`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: ${themeGet('tabBar.default.tabItem.paddingBottom')}px;
  padding-horizontal: ${themeGet('tabBar.default.tabItem.paddingHorizontal')}px;
  height: ${themeGet('tabBar.default.tabItem.height')}px;
  border-bottom-width: ${themeGet(
    'tabBar.default.tabItem.borderBottomWidth',
  )}px;
  border-bottom-color: ${mapToTheme(
    'tabBar.default.tabItem.borderBottomColor',
  )};
`;

type TabItemLabelProps = {
  active?: boolean;
};

export const TabItemLabel = styled(Text)<TabItemLabelProps>`
  color: ${mapToTheme('tabBar.default.tabItemLabel.color')};
  font-weight: ${themeGet('tabBar.default.tabItemLabel.fontWeight')};
`;
