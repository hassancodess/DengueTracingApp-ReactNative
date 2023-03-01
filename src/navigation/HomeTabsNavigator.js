import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// Screens
import Map from '../screens/Home/Map';
import Stats from '../screens/Home/Stats';
import AwarenessTabsNavigator from './AwarenessTabsNavigator';
// import Awareness from '../screens/Home/Awareness';
import Profile from '../screens/Home/Profile';

const {Navigator, Screen} = createBottomTabNavigator();

const HomeTabsNavigator = () => {
  return (
    <Navigator
      initialRouteName="Map"
      screenOptions={{
        headerShown: false,
        tabBarIconStyle: {display: 'none'},
        tabBarLabelPosition: 'beside-icon',
        tabBarLabelStyle: {
          fontSize: 14,
        },
      }}>
      <Screen
        name="Map"
        component={Map}
        options={{
          tabBarStyle: {
            borderRightWidth: 2, // set border width here
          },
        }}
      />
      <Screen name="Stats" component={Stats} />
      <Screen name="Awareness" component={AwarenessTabsNavigator} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
};

export default HomeTabsNavigator;
