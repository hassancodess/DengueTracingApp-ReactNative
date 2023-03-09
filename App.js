import React, {useEffect} from 'react';
import MainStackNavigator from './src/navigation/MainStackNavigator';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <MainStackNavigator />;
};

export default App;


