import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {colors} from '../../utils/Constants';
const AddHealthInspector = () => (
  <View style={styles.container}>
    {/* Title */}
    <Text style={styles.title}>Add New Health Inspector</Text>
    {/* Email Input */}
    <Input
      title="Name"
      placeholder={'Health Inspector Name'}
      variant="simple"
    />
    <Input
      title="Email"
      placeholder={'Health Inspector email address'}
      variant="simple"
    />
    <Input
      title="Phone Number"
      placeholder={'Health Inspector phone number'}
      variant="simple"
    />
    {/* Password Input */}
    <Input
      title="Password"
      placeholder={'************'}
      variant="icon"
      icon="remove-red-eye"
    />
    <Input
      title="Repeat Password"
      placeholder={'************'}
      variant="icon"
      icon="remove-red-eye"
    />

    {/* Sign In Button */}
    <View style={styles.buttonContainer}>
      <Button title="Save" />
    </View>
  </View>
);

export default AddHealthInspector;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 50,
  },
  flexContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    textTransform: 'uppercase',
    textAlign: 'center',
    color: colors.dark,
    marginBottom: 30,
  },
});
