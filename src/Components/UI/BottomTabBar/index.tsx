import { View } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import Transfer from 'assets/images/Tabs/transfer.svg';

import map from 'lodash/map';

import { SafeAreaView } from 'Services/safeArea';

import { TabButton, TabContainer, TabTitle, TransferContainer } from './styles';

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
      <TabButton
        activeOpacity={0.9}
        key={index}
        onPress={() => handleTabPress(route)}
      >
        {isFocused && <View />}
        <View>
          {options.tabBarIcon({ color: isFocused ? '#101F48' : '#C5C8D2' })}
        </View>
        <TabTitle color={isFocused ? '#101F48' : '#6D758E'}>
          {options.title}
        </TabTitle>
      </TabButton>
    );
  });

  return (
    <View
      style={{
        backgroundColor: '#FBFCFF',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderTopWidth: 0.5,
        borderTopColor: '#EFF5FF',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
      }}
    >
      <TabContainer>
        {tabsEl}
        <TransferContainer
          activeOpacity={0.9}
          onPress={() => {
            navigation.navigate('Deposit');
          }}
        >
          <Transfer />
        </TransferContainer>
      </TabContainer>

      <SafeAreaView bottom />
    </View>
  );
}

export default BottomTabBar;
