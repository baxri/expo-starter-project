import React, { useEffect, useMemo, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from 'Utils/firebase';

import { LoadingScreen } from 'Screens';

import AuthNavigator from './Auth';
import MainNavigator from './Main';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  const [initializing, setInitializing] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setInitializing(false);
      if (user) {
        const { uid } = user;
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    });
  }, []);

  const routes = useMemo(() => {
    if (initializing) {
      return <Stack.Screen component={LoadingScreen} name="LoadingScreen" />;
    }

    if (!isAuth) {
      return (
        <Stack.Screen
          component={AuthNavigator}
          name="AuthNavigator"
          options={{
            animationTypeForReplace: 'pop',
          }}
        />
      );
    }

    return <Stack.Screen component={MainNavigator} name="MainNavigator" />;
  }, [isAuth, initializing]);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {routes}
    </Stack.Navigator>
  );
}

export default RootNavigator;
