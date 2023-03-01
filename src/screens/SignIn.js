import React from 'react';
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import Logo from '../assets/logo.png';
import {colors} from '../utils/Constants';
import Button from '../components/Button';
import Input from '../components/Input';

import {useNavigation} from '@react-navigation/native';

const SignIn = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image source={Logo} resizeMode={'cover'} style={styles.logo} />
        </View>
        {/* Title */}
        <Text style={styles.title}>Dengue Tracing Application</Text>
        {/* SignIn Section */}
        <View style={styles.signInContainer}>
          {/* Sign In Heading */}
          <Text style={styles.signInHeading}>Sign In</Text>
          {/* Some Description */}
          <Text style={styles.signInDescription}>
            Hi there! Nice to see you again.
          </Text>
          {/* Email Input */}
          <Input
            title="Email"
            placeholder={'example@gmail.com'}
            variant="simple"
          />
          {/* Password Input */}
          <Input
            title="Password"
            placeholder={'************'}
            variant="icon"
            icon="remove-red-eye"
          />

          {/* Sign In Button */}
          <View style={styles.buttonContainer}>
            <Button title="Sign in" />
          </View>
          {/* Strip */}
          <View style={styles.bottomStripContainer}>
            <Text
              style={styles.forgotPasswordText}
              onPress={() => navigation.navigate('ForgotPassword')}>
              Forgot Password?
            </Text>
            <Text
              style={styles.signUpText}
              onPress={() => navigation.navigate('SignUp')}>
              Sign Up
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignIn;

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
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 2,
    textTransform: 'uppercase',
    textAlign: 'center',
    color: colors.primary,
    marginBottom: 30,
  },
  signInContainer: {
    alignSelf: 'flex-start',
    width: '100%',
  },
  signInHeading: {
    fontSize: 20,
    color: colors.dark,
    fontWeight: '700',
    marginBottom: 10,
  },
  signInDescription: {
    fontSize: 16,
    color: colors.secondary,
    marginBottom: 30,
  },
  buttonContainer: {
    marginVertical: 20,
  },
  bottomStripContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  signUpText: {
    color: colors.primary,
    fontWeight: 'bold',
  },
});
