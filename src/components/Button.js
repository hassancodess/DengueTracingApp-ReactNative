import {StyleSheet, Text, Pressable} from 'react-native';
import React from 'react';
import {colors} from '../utils/Constants';

const Button = ({title, onPress}) => {
  return (
    <Pressable style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

export const SmallButton = ({title, onPress}) => {
  return (
    <Pressable style={styles.smallButtonContainer} onPress={onPress}>
      <Text style={styles.smallButtonText}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    fontWeight: '700',
  },
  buttonContainer: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    borderRadius: 5,
  },
  smallButtonContainer: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  smallButtonText: {
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
    fontWeight: '700',
  },
});
