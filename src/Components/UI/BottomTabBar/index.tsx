import { useRef } from 'react';
import { View } from 'react-native';
import { CommonActions } from '@react-navigation/native';

import map from 'lodash/map';

import { SafeAreaView } from 'Services/safeArea';

import { TabButton, TabContainer, TabTitle } from './styles';

function BottomTabBar({ state, descriptors, navigation }: any) {
  const handleTabPress = (route: any) => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!event.defaultPrevented) {
      navigation.dispatch({
        ...CommonActions.navigate(route.name),
        target: state.key,
      });
    }
  };

  const tabsEl = map(state?.routes, (route, index) => {
    const { options } = descriptors[route.key];
    const isFocused = state.index === index;

    return (
      <TabButton key={index} onPress={() => handleTabPress(route)}>
        {isFocused && <View />}
        <View>
          {options.tabBarIcon({ color: isFocused ? '#2B5CFF' : '#555B6E' })}
        </View>
        <TabTitle>{options.title}</TabTitle>
      </TabButton>
    );
  });
  return (
    <View style={{ backgroundColor: 'white' }}>
      <TabContainer>{tabsEl}</TabContainer>
      <SafeAreaView bottom />
    </View>
  );
}

export default BottomTabBar;
