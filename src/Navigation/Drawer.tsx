import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { MenuScreen } from 'Screens';

import TabsNavigator from './Tabs';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <MenuScreen {...props} />}
      screenOptions={{
        swipeEnabled: false,
        headerShown: false,
        drawerStyle: {
          width: '100%',
        },
      }}
      detachInactiveScreens
    >
      <Drawer.Screen name="TabNavigator">
        {() => <TabsNavigator />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
