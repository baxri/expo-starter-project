import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { UserDashboardScreen } from 'Screens';

import { MainHeader } from 'Components/Headers';

const Stack = createNativeStackNavigator();

function UserNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UserDashboard"
        options={{
          title: `Hello`,
          header: (props) => <MainHeader {...props} />,
        }}
      >
        {(props) => <UserDashboardScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen
        name="UserDashboard1"
        options={{
          title: `Hello 1`,
          header: (props) => <MainHeader {...props} />,
        }}
      >
        {(props) => <UserDashboardScreen {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export default UserNavigator;
