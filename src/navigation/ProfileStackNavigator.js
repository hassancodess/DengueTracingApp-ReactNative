import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Screens
import UserProfile from '../screens/Profile/UserProfile';
import AdminProfile from '../screens/Profile/AdminProfile';
import ViewHealthInspector from '../screens/Profile/ViewHealthInspector';
import AddHealthInspector from '../screens/Profile/AddHealthInspector';

const {Navigator, Screen} = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Navigator
      initialRouteName="AdminProfile"
      //   screenOptions={{headerShown: false}}
    >
      <Screen name="UserProfile" component={UserProfile} />
      <Screen name="AdminProfile" component={AdminProfile} />
      <Screen name="ViewHealthInspector" component={ViewHealthInspector} />
      <Screen name="AddHealthInspector" component={AddHealthInspector} />
    </Navigator>
  );
};

export default MainStackNavigator;
