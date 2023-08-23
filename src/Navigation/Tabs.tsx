import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ClaimHistory from 'assets/images/Tabs/claimHistory.svg';
import Home from 'assets/images/Tabs/home.svg';
import Insurance from 'assets/images/Tabs/insurance.svg';
import PatientChart from 'assets/images/Tabs/patientChart.svg';
import { useTranslation } from 'react-i18next';

import { UserDashboardScreen } from 'Screens';

import { AuthHeader } from 'Components/Headers';
import { BottomTabBar } from 'Components/UI';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  const { t } = useTranslation();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={(props) => <BottomTabBar {...props} />}
    >
      <Tab.Screen
        component={UserDashboardScreen}
        initialParams={{ isOnboarding: false }}
        name="Home"
        options={{
          tabBarIcon: ({ color }) => <Home fill={color} />,
          title: t('bottomTabs.home') as string,
          header: (props) => <AuthHeader {...props} />,
        }}
      />
      <Tab.Screen
        component={UserDashboardScreen}
        name="Test"
        options={{
          tabBarIcon: ({ color }) => <ClaimHistory fill={color} />,
          title: t('bottomTabs.home') as string,
          header: (props) => <AuthHeader {...props} />,
        }}
      />
      <Tab.Screen
        component={UserDashboardScreen}
        name="PatientChart"
        options={{
          tabBarIcon: ({ color }) => <PatientChart fill={color} />,
          title: t('bottomTabs.home') as string,
          header: (props) => <AuthHeader {...props} />,
        }}
      />
      <Tab.Screen
        component={UserDashboardScreen}
        name="Insurance"
        options={{
          tabBarIcon: ({ color }) => <Insurance fill={color} />,
          title: t('bottomTabs.home') as string,
          header: (props) => <AuthHeader {...props} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
