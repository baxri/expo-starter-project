import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';

import { LoginScreen, RegisterScreen, WelcomeScreen } from 'Screens';

import { MainHeader } from 'Components/Headers';

const Stack = createNativeStackNavigator();

function AuthNavigator() {
  const { t } = useTranslation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        options={{
          title: 'Welcome',

          header: () => null,
        }}
      >
        {(props) => <WelcomeScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen
        name="Login"
        options={{
          title: '',
          header: (props) => <MainHeader {...props} back />,
        }}
      >
        {(props) => <LoginScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen
        name="Register"
        options={{
          title: '',
          header: (props) => <MainHeader {...props} back />,
        }}
      >
        {(props) => <RegisterScreen {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export default AuthNavigator;
