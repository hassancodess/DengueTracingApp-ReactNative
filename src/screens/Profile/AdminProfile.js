import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import {colors} from '../../utils/Constants';
import Avatar from '../../assets/avatar.jpg';
import {IconButton, Modal, Portal, Provider} from 'react-native-paper';
import Input from '../../components/Input';
import Button, {SmallButton} from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {Switch} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Slider from '@react-native-community/slider';

const AdminProfile = () => {
  const navigation = useNavigation();
  const [sliderValue, setSliderValue] = useState(0);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isCamera, setIsCamera] = useState(false);

  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <Provider>
      <View style={styles.container}>
        {/* Profile Section */}
        <View style={styles.flexContainer}>
          {/* Profile Avatar */}
          <View>
            <View style={styles.avatarContainer}>
              <Image source={Avatar} style={styles.avatar} />
            </View>
            {/* Settings Icon */}
            <IconButton
              icon="cog"
              mode="contained"
              iconColor={colors.primary}
              style={styles.settingsButton}
              size={20}
              onPress={showModal}
            />
            {/* Camera Button */}
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
              <Text style={styles.chipText}>Admin</Text>
            </View>
            {/* Chip */}
            <View
              style={[
                styles.chipContainer,
                {backgroundColor: colors.secondary, marginLeft: 8},
              ]}>
              <Text style={styles.chipText}>Health</Text>
            </View>
          </View>
          {/* Email */}
          <Text style={styles.emailText}>johanna@gmail.com</Text>
        </View>
        {/* Simple Input */}
        <Input title="Name" placeholder={'Your name'} variant="simple" />
        {/* Simple Input */}
        <Input
          title="Email"
          placeholder={'Your email address'}
          variant="simple"
        />
        {/* Simple Input */}
        <Input
          title="Phone Number"
          placeholder={'Phone Number'}
          variant="simple"
        />
        {/* Icon Input */}
        <Input
          title="Password"
          placeholder={'Password'}
          variant="icon"
          icon="remove-red-eye"
        />
        {/* Icon Input */}
        <Input
          title="Repeat Password"
          placeholder={'Repeat Password'}
          variant="icon"
          icon="remove-red-eye"
        />
        {/* Icon Input */}
        <Input
          title="Location"
          placeholder={'Location'}
          variant="icon"
          icon="location-pin"
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
        {/* Modal */}
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={styles.containerStyle}>
            <IconButton
              icon="close"
              mode="contained"
              iconColor={colors.dark}
              style={styles.closeButton}
              size={20}
              onPress={hideModal}
            />
            {/* Strip */}
            <View style={styles.stripContainer}>
              <Text style={styles.stripText}>Area Range of Users</Text>
            </View>
            {/* Slider Labels */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 10,
                marginHorizontal: 20,
              }}>
              <Text style={styles.darkText}>0 KM</Text>
              <Text style={styles.darkText}>10 KM</Text>
            </View>
            {/* Slider */}
            <Slider
              value={sliderValue}
              onValueChange={value => setSliderValue(value)}
              // style={{width: 200, height: 40}}
              minimumValue={0}
              maximumValue={10}
              minimumTrackTintColor={colors.primary}
              maximumTrackTintColor={colors.secondary}
            />
            {/* Strip */}
            <View style={styles.stripContainer}>
              <Text style={styles.stripText}>Threshold for Dengue cases</Text>
            </View>
            {/* Input */}
            <TextInput
              style={{borderWidth: 1, marginTop: 15, height: 45}}
              placeholder="100-10000"
              placeholderTextColor={colors.dark}
            />
            {/* Buttons */}
            <View style={styles.buttonsContainer}>
              <SmallButton
                title="View Health Inspector"
                onPress={() => navigation.navigate('ViewHealthInspector')}
              />
              <SmallButton title="Save" />
            </View>
          </Modal>
        </Portal>
      </View>
    </Provider>
  );
};

export default AdminProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
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
  settingsButton: {
    position: 'absolute',
    right: -120,
    backgroundColor: colors.light,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
  },
  profileName: {
    fontSize: 16,
    marginHorizontal: 20,
    color: colors.dark,
  },
  emailText: {
    color: colors.dark,
  },

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
    // fontWeight: 'bold',
    color: colors.dark,
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
  containerStyle: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 15,
    margin: 20,
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: 15,
    backgroundColor: colors.white,
  },
  stripContainer: {
    marginTop: 10,
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
  },
  stripText: {
    fontSize: 15,
    textTransform: 'uppercase',
    color: colors.light,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  darkText: {
    color: colors.dark,
  },
});
