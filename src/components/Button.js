import {StyleSheet, Text, Pressable} from 'react-native';
import React from 'react';
import {colors} from '../utils/Constants';

const Button = ({title}) => {
  return (
    <Pressable style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{title}</Text>
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
});
