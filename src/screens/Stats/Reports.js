import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils/Constants';
import {IconButton} from 'react-native-paper';

const Reports = () => {
  return (
    <View style={styles.container}>
      {/* Flex Container */}
      <View style={styles.flexContainer}>
        <Text style={styles.title}>Reports</Text>
        <IconButton
          icon="bell-ring"
          mode="contained"
          iconColor={colors.dark}
          size={30}
          onPress={() => navigation.navigate('NewCases')}
        />
      </View>
    </View>
  );
};

export default Reports;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.dark,
  },
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
});
