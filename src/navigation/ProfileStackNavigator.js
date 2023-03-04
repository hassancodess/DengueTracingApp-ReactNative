import React from 'react';
import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
// Screens
import UserProfile from '../screens/Profile/UserProfile';
import AdminProfile from '../screens/Profile/AdminProfile';
import ViewHealthInspector from '../screens/Profile/ViewHealthInspector';
import AddHealthInspector from '../screens/Profile/AddHealthInspector';
import {MaterialCommunityIcons} from 'react-native-vector-icons/MaterialCommunityIcons';
import {IconButton} from 'react-native-paper';
const {Navigator, Screen} = createNativeStackNavigator();
import {colors} from '../utils/Constants';
const MainStackNavigator = () => {
  const navigation = useNavigation();
  return (
    <Navigator
      initialRouteName="AdminProfile"
      screenOptions={{headerShown: false}}>
      <Screen name="UserProfile" component={UserProfile} />
      <Screen name="AdminProfile" component={AdminProfile} />
      <Screen
        name="ViewHealthInspector"
        component={ViewHealthInspector}
        options={{
          headerShown: true,
          headerTitle: 'Health Inspectors',
          headerTitleAlign: 'center',
          headerBackground: () => (
            <View style={{backgroundColor: colors.accent, flex: 1}} />
          ),
          headerTitleStyle: {
            color: colors.primary,
          },
          headerRight: () => (
            <IconButton
              icon="plus"
              mode="contained"
              iconColor={colors.light}
              style={{backgroundColor: colors.primary}}
              size={20}
              onPress={() => navigation.navigate('AddHealthInspector')}
            />
            // <View style={{width: 50, height: 50}}>
            //   <MaterialCommunityIcons icon={'plus'} size={18} color={'black'} />
            // </View>
          ),
        }}
      />
      <Screen name="AddHealthInspector" component={AddHealthInspector} />
    </Navigator>
  );
};

export default MainStackNavigator;
