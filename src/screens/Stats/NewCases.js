import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {Avatar} from 'react-native-paper';
import {colors} from '../../utils/Constants';

const NewCases = () => {
  data = [
    {name: 'user244', hasDengue: true, time: '23 mins ago'},
    {name: 'RedAlert: Sector244', time: '23 mins ago', isRedAlert: true},
    {name: 'user244', hasDengue: true, time: '23 mins ago'},
    {name: 'user244', hasDengue: true, time: '23 mins ago'},
  ];
  const renderItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.flexContainer}>
          <Avatar.Icon
            size={56}
            icon="alert"
            color={colors.white}
            style={{backgroundColor: colors.primary}}
          />
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              {item.name}{' '}
              <Text style={{fontWeight: '100'}}>
                {item.hasDengue && 'hasDengue'}
              </Text>
            </Text>
            <Text>{item.time}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index}
        renderItem={renderItem}
      />
    </View>
  );
};

export default NewCases;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  itemContainer: {
    backgroundColor: colors.light,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginVertical: 5,
  },
  flexContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  textContainer: {},
  text: {
    color: colors.dark,
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
