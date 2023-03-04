import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Symptoms from '../screens/Awareness/Symptoms';
import Preventions from '../screens/Awareness/Preventions';
import {colors} from '../utils/Constants';
const {Navigator, Screen} = createMaterialTopTabNavigator();

const AwarenessTabsNavigator = () => {
  return (
    <Navigator
      initialLayout="Preventions"
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.dark,
        tabBarIndicatorStyle: {backgroundColor: colors.primary},
        tabBarStyle: {
          backgroundColor: colors.accent,
          paddingVertical: 5,
          marginHorizontal: 2,
          marginVertical: 3,
          borderRadius: 5,
          elevation: 0,
        },
      }}>
      <Screen name="Preventions" component={Preventions} />
      <Screen name="Symptoms" component={Symptoms} />
    </Navigator>
  );
};

export default AwarenessTabsNavigator;
