import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const {Navigator, Screen} = createNativeStackNavigator();

import Reports from '../screens/Stats/Reports';
import NewCases from '../screens/Stats/NewCases';
const StatsStackNavigator = () => {
  return (
    <Navigator initialRouteName="Reports" screenOptions={{headerShown: false}}>
      <Screen name="Reports" component={Reports} />
      <Screen name="NewCases" component={NewCases} />
    </Navigator>
  );
};

export default StatsStackNavigator;
