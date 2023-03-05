import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors} from '../../utils/Constants';
import Avatar from '../../assets/avatar.jpg';
import {IconButton} from 'react-native-paper';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {Switch} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const UserProfile = () => {
  const navigation = useNavigation();
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isCamera, setIsCamera] = useState(true);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [location, setLocation] = useState('');
  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.flexContainer}>
        {/* Profile Avatar */}
        <View>
          <View style={styles.avatarContainer}>
            <Image source={Avatar} style={styles.avatar} />
          </View>
          <IconButton
            icon="camera"
            mode="contained"
            iconColor={colors.dark}
            style={styles.iconButton}
            size={20}
            onPress={() => setIsCamera(!isCamera)}
          />
          {isCamera && (
            <View style={styles.modalContainer}>
              <View style={styles.modalRow}>
                {/* Text */}
                <Text style={styles.modalRowText}>Camera</Text>
                {/* Icon */}
                <MaterialIcons
                  name={'camera'}
                  color={colors.dark}
                  size={24}
                  style={styles.passwordIcon}
                />
              </View>
              <View style={styles.modalRow}>
                {/* Text */}
                <Text style={styles.modalRowText}>Gallery</Text>
                {/* Icon */}
                <MaterialIcons
                  name={'insert-photo'}
                  color={colors.dark}
                  size={24}
                  style={styles.passwordIcon}
                />
              </View>
            </View>
          )}
        </View>
        {/* Name with chips */}
        <View style={styles.textContainer}>
          <Text style={styles.profileName}>Johanna</Text>
          {/* Chip */}
          <View style={styles.chipContainer}>
            <Text style={styles.chipText}>User</Text>
          </View>
        </View>
        {/* Email */}
        <Text style={styles.emailText}>johanna@gmail.com</Text>
      </View>
      {/* Simple Input */}
      <Input
        title="Name"
        placeholder={'Your name'}
        variant="simple"
        value={name}
        setValue={setName}
      />
      {/* Simple Input */}
      <Input
        title="Email"
        placeholder={'Your email address'}
        variant="simple"
        value={email}
        setValue={setEmail}
      />
      {/* Simple Input */}
      <Input
        title="Phone Number"
        placeholder={'Phone Number'}
        variant="simple"
        value={phoneNumber}
        setValue={setPhoneNumber}
      />
      {/* Icon Input */}
      <Input
        title="Password"
        placeholder={'Password'}
        variant="icon"
        icon="remove-red-eye"
        value={password}
        setValue={setPassword}
      />
      {/* Icon Input */}
      <Input
        title="Repeat Password"
        placeholder={'Repeat Password'}
        variant="icon"
        icon="remove-red-eye"
        value={repeatPassword}
        setValue={setRepeatPassword}
      />
      {/* Icon Input */}
      <Input
        title="Location"
        placeholder={'Location'}
        variant="icon"
        icon="location-pin"
        value={location}
        setValue={setLocation}
      />
      {/* Text with Switch */}
      <View style={styles.dengueContainer}>
        <Text style={styles.dengueText}>Do you have Dengue?</Text>
        <Switch
          value={isSwitchOn}
          onValueChange={onToggleSwitch}
          color={colors.primary}
        />
      </View>
      {/* Sign In Button */}
      <View style={styles.buttonContainer}>
        <Button title="Logout" />
      </View>
    </View>
  );
};

export default UserProfile;

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
  avatarContainer: {
    width: 100,
    height: 100,
    overflow: 'hidden',
    marginBottom: 10,
    borderRadius: 100,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  iconButton: {
    position: 'absolute',
    bottom: 0,
    right: -10,
    backgroundColor: colors.primary,
    elevation: 20,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  profileName: {
    fontSize: 16,
    marginHorizontal: 20,
  },
  emailText: {},

  chipContainer: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: colors.primary,
    borderRadius: 5,
  },
  chipText: {
    fontSize: 12,
    fontWeight: 700,
    color: colors.white,
  },
  buttonContainer: {
    marginVertical: 20,
  },
  dengueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dengueText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    height: 80,
    width: 110,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.primary,
    position: 'absolute',
    left: 110,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.dark,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  modalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalRowText: {},
});
