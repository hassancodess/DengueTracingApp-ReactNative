import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {colors} from '../../utils/Constants';
const AddHealthInspector = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Add New Health Inspector</Text>
      {/* Email Input */}
      <Input
        title="Name"
        placeholder={'Health Inspector Name'}
        variant="simple"
        value={name}
        setValue={setName}
      />
      <Input
        title="Email"
        placeholder={'Health Inspector email address'}
        variant="simple"
        value={email}
        setValue={setEmail}
      />
      <Input
        title="Phone Number"
        placeholder={'Health Inspector phone number'}
        variant="simple"
        value={phoneNumber}
        setValue={setPhoneNumber}
      />
      {/* Password Input */}
      <Input
        title="Password"
        placeholder={'************'}
        variant="passwordIcon"
        icon="remove-red-eye"
        value={password}
        setValue={setPassword}
      />
      <Input
        title="Repeat Password"
        placeholder={'************'}
        variant="passwordIcon"
        icon="remove-red-eye"
        value={repeatPassword}
        setValue={setRepeatPassword}
      />

      {/* Sign In Button */}
      <View style={styles.buttonContainer}>
        <Button title="Save" />
      </View>
    </View>
  );
};

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
