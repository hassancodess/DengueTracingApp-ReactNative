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
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);

  const toggleActivate = state => {
    if (state === 'active1') {
      setActive1(true);
      setActive2(false);
      setActive3(false);
    } else if (state === 'active2') {
      setActive1(false);
      setActive2(true);
      setActive3(false);
    } else if (state === 'active3') {
      setActive1(false);
      setActive2(false);
      setActive3(true);
    }
  };
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
        <Text style={styles.darkText}>{date.toLocaleDateString()}</Text>
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
        <Text
          style={[styles.darkText, active1 ? styles.active : null]}
          onPress={() => toggleActivate('active1')}>
          Current Week
        </Text>
        <Text
          style={[styles.darkText, active2 ? styles.active : null]}
          onPress={() => toggleActivate('active2')}>
          Last Week
        </Text>
        <Text
          style={[styles.darkText, active3 ? styles.active : null]}
          onPress={() => toggleActivate('active3')}>
          Last Month
        </Text>
      </View>
      {/* Graph */}
      <View style={{marginTop: 30}}>
        <BarChart
          barWidth={30}
          noOfSections={4}
          barBorderRadius={4}
          // frontColor="lightgray"
          data={barData}
          yAxisThickness={0}
          xAxisThickness={0}
          yAxisTextStyle={{
            color: colors.dark,
          }}
          xAxisLabelTextStyle={{
            color: colors.dark,
            fontSize: 14,
            textAlign: 'center',
          }}
          color={colors.primary}
          xAxisIndicesColor={colors.primary}
          yAxisColor={colors.primary}
          xAxisColor={colors.dark}
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
  darkText: {
    color: colors.dark,
  },
});
