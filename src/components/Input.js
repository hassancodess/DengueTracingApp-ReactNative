import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {colors} from '../utils/Constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Input = ({
  title,
  placeholder,
  variant,
  icon,
  secure,
  value,
  setValue,
}) => {
  const [showPassword, setShowPassword] = useState(true);
  if (variant == 'simple') {
    return (
      <View style={styles.inputContainer}>
        {/* Head */}
        <Text style={styles.inputHeading}>{title}</Text>
        {/* Input */}
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={colors.dark}
          value={value}
          onChangeText={text => setValue(text)}
        />
      </View>
    );
  } else if (variant == 'icon') {
    return (
      <View style={styles.inputContainer}>
        {/* Head */}
        <Text style={styles.inputHeading}>{title}</Text>
        {/* Input */}
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={styles.input}
            secureTextEntry={secure ? true : false}
            placeholder={placeholder}
            placeholderTextColor={colors.dark}
            value={value}
            onChangeText={text => setValue(text)}
          />
          <MaterialIcons
            name={icon}
            color={colors.light}
            size={32}
            style={styles.passwordIcon}
          />
        </View>
      </View>
    );
  } else if (variant == 'passwordIcon') {
    return (
      <View style={styles.inputContainer}>
        {/* Head */}
        <Text style={styles.inputHeading}>{title}</Text>
        {/* Input */}
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={styles.input}
            secureTextEntry={showPassword ? true : false}
            placeholder={placeholder}
            placeholderTextColor={colors.dark}
            value={value}
            onChangeText={text => setValue(text)}
          />
          <MaterialIcons
            name={icon}
            color={colors.light}
            size={32}
            style={styles.passwordIcon}
            onPress={() => setShowPassword(!showPassword)}
          />
        </View>
      </View>
    );
  }
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
  },
  inputHeading: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: '700',
  },
  input: {
    borderBottomWidth: 1.5,
    borderBottomColor: colors.light,
    height: 40,
    fontSize: 14,
    width: '100%',
    color: colors.dark,
  },
  passwordInputContainer: {
    flexDirection: 'row',
  },
  passwordIcon: {
    position: 'absolute',
    right: 10,
  },
});
