import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';

import DrawerNaigator from './Drawer';

const Stack = createNativeStackNavigator();

const options = {
  header: () => null,
};

function MainNavigator() {
  const { t } = useTranslation();

  return (
    <Stack.Navigator>
      <Stack.Screen name="DrawerNaigator" {...{ options }}>
        {() => <DrawerNaigator />}
      </Stack.Screen>
      {/* <Stack.Screen
        name="SomeTextScreen"
        options={{
          title: "Screen Title",
          header: (props: any) => <MainHeader {...props} back />,
        }}
      >
        {() => <ScreenComponent />}
      </Stack.Screen> */}
    </Stack.Navigator>
  );
}

export default MainNavigator;
