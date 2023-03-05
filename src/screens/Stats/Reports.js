import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../utils/Constants';
import {IconButton} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useNavigation} from '@react-navigation/native';
import {BarChart} from 'react-native-gifted-charts';

const Reports = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);
  const navigation = useNavigation();
  const barData = [
    {value: 400, label: 'M', frontColor: colors.primary},
    {value: 500, label: 'T', frontColor: colors.primary},
    {value: 700, label: 'W', frontColor: colors.primary},
    {value: 500, label: 'T', frontColor: colors.primary},
    {value: 800, label: 'F', frontColor: colors.primary},
    {value: 500, label: 'S', frontColor: colors.primary},
    {value: 100, label: 'S', frontColor: colors.primary},
  ];

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };
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
      <View style={styles.dateContainer}>
        <Text>{date.toLocaleDateString()}</Text>
        <IconButton
          icon="clipboard-text-clock-outline"
          mode="contained"
          iconColor={colors.dark}
          size={30}
          onPress={() => setShow(!show)}
        />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'date'}
          onChange={onChange}
          display={'inline'}
        />
      )}
      {/* Strip */}
      <View style={styles.stripContainer}>
        <Text style={styles.active}>Current Week</Text>
        <Text>Last Week</Text>
        <Text>Last Month</Text>
      </View>
      {/* Graph */}
      <View style={{marginTop: 30}}>
        <BarChart
          barWidth={30}
          noOfSections={4}
          barBorderRadius={4}
          frontColor="lightgray"
          data={barData}
          yAxisThickness={0}
          xAxisThickness={0}
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
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  stripContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  active: {
    paddingBottom: 10,
    borderBottomWidth: 3,
    borderBottomColor: colors.primary,
  },
});
