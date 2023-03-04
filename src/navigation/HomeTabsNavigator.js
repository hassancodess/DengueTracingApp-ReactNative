import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// Screens
import Map from '../screens/Home/Map';
import Stats from '../screens/Home/Stats';
import AwarenessTabsNavigator from './AwarenessTabsNavigator';
import ProfileStackNavigator from './ProfileStackNavigator';
// import Awareness from '../screens/Home/Awareness';

const {Navigator, Screen} = createBottomTabNavigator();

const HomeTabsNavigator = () => {
  return (
    <Navigator
      initialRouteName="Profile"
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
      <Screen name="Profile" component={ProfileStackNavigator} />
    </Navigator>
  );
};

export default HomeTabsNavigator;
