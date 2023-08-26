import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';

import DepositScreen from 'Screens/User/Deposit';

import { MainHeader } from 'Components/Headers';

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
      <Stack.Screen
        name="Deposit"
        options={{
          title: 'Deposit',
          header: (props: any) => <MainHeader {...props} back showDeposit />,
        }}
      >
        {() => <DepositScreen />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export default MainNavigator;
