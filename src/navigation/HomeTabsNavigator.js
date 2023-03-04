import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// Screens
import Map from '../screens/Home/Map';
import StatsStackNavigator from './StatsStackNavigator';
import AwarenessTabsNavigator from './AwarenessTabsNavigator';
import ProfileStackNavigator from './ProfileStackNavigator';
import {colors} from '../utils/Constants';
// import Awareness from '../screens/Home/Awareness';

const {Navigator, Screen} = createBottomTabNavigator();
const HomeTabsNavigator = () => {
  return (
    <Navigator
      initialRouteName="Stats"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 16,
          textAlign: 'center',
          marginBottom: 15,
        },
        tabBarIconStyle: {display: 'none'},

        tabBarActiveTintColor: colors.white,
        tabBarActiveBackgroundColor: colors.primary,
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
      <Screen name="Stats" component={StatsStackNavigator} />
      <Screen name="Awareness" component={AwarenessTabsNavigator} />
      <Screen name="Profile" component={ProfileStackNavigator} />
    </Navigator>
  );
};

export default HomeTabsNavigator;
