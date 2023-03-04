import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Logo from '../assets/logo.png';
import {colors} from '../utils/Constants';
import Input from '../components/Input';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';

const ForgotPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image source={Logo} resizeMode={'cover'} style={styles.logo} />
        </View>
        {/* Heading */}
        <Text style={styles.title}>Forgot your Password?</Text>
        <Text style={styles.title}>We got your back.</Text>
        {/* Input */}
        <View style={styles.inputContainer}>
          <Input
            title="Email"
            placeholder={'Enter your email address'}
            variant="simple"
          />
        </View>
        {/* Button */}
        <View style={styles.buttonContainer}>
          <Button title={'Reset'} />
        </View>
        {/* Bottom Strip */}
        <View style={styles.bottomStripContainer}>
          <Text style={styles.darkText}>
            Back to Login?{' '}
            <Text
              style={styles.primaryText}
              onPress={() => navigation.navigate('SignIn')}>
              Sign In
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 50,
  },
  flexContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  logoContainer: {
    width: 200,
    height: 200,
    overflow: 'hidden',
    marginBottom: 10,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  title: {
    alignSelf: 'flex-start',
    fontSize: 24,
    letterSpacing: 1,
    color: colors.dark,
    marginBottom: 5,
  },
  inputContainer: {
    alignSelf: 'flex-start',
    width: '100%',
    marginTop: 30,
  },
  buttonContainer: {
    alignSelf: 'flex-start',
    width: '100%',
    marginBottom: 30,
  },
  bottomStripContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryText: {
    color: colors.primary,
    fontWeight: 'bold',
  },
  darkText: {
    color: colors.dark,
  },
});
