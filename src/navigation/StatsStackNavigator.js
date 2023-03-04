import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const {Navigator, Screen} = createNativeStackNavigator();
import {View} from 'react-native';
import Reports from '../screens/Stats/Reports';
import NewCases from '../screens/Stats/NewCases';
import {colors} from '../utils/Constants';
const StatsStackNavigator = () => {
  return (
    <Navigator initialRouteName="Reports" screenOptions={{headerShown: false}}>
      <Screen name="Reports" component={Reports} />
      <Screen
        name="NewCases"
        component={NewCases}
        options={{
          headerShown: true,
          headerBackground: () => (
            <View style={{backgroundColor: colors.accent, flex: 1}} />
          ),
          headerTitleStyle: {
            color: colors.primary,
            fontSize: 18,
          },
        }}
      />
    </Navigator>
  );
};

export default StatsStackNavigator;
