import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Background from 'assets/images/Tabs/background.svg';
import Home from 'assets/images/Tabs/home.svg';
import Identity from 'assets/images/Tabs/identity.svg';
import Transfer from 'assets/images/Tabs/transfer.svg';
import Wallet from 'assets/images/Tabs/wallet.svg';
import { useTranslation } from 'react-i18next';
import { backgroundColor } from 'styled-system';

import { UserDashboardScreen, UserIdentityScreen } from 'Screens';

import { AuthHeader, MainHeader } from 'Components/Headers';
import { BottomTabBar } from 'Components/UI';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  const { t } = useTranslation();
  return (
    <Tab.Navigator
      initialRouteName="Wallet"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'transparent',
          position: 'absolute',
          elevation: 0,
        },
      }}
      tabBar={(props) => <BottomTabBar {...props} />}
    >
      <Tab.Screen
        component={UserDashboardScreen}
        initialParams={{ isOnboarding: false }}
        name="Wallet"
        options={{
          tabBarIcon: ({ color }) => <Wallet fill={color} />,
          title: 'Wallet',
          header: (props) => <MainHeader {...props} showSettings />,
        }}
      />
      <Tab.Screen
        component={UserIdentityScreen}
        name="Identity"
        options={{
          tabBarIcon: ({ color }) => <Identity fill={color} />,
          title: 'Identity',
          header: (props) => <MainHeader {...props} showSettings />,
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
