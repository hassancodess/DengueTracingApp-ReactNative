import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Symptoms from '../screens/Awareness/Symptoms';
import Preventions from '../screens/Awareness/Preventions';

const {Navigator, Screen} = createMaterialTopTabNavigator();

const AwarenessTabsNavigator = () => {
  return (
    <Navigator initialLayout="Preventions">
      <Screen name="Preventions" component={Preventions} />
      <Screen name="Symptoms" component={Symptoms} />
    </Navigator>
  );
};

export default AwarenessTabsNavigator;
