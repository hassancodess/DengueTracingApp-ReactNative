import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {Avatar} from 'react-native-paper';
import {colors} from '../../utils/Constants';

const Symptoms = () => {
  const data = [
    {
      title: 'Headache',
      description: 'Description',
    },
    {
      title: 'Headache',
      description: 'Description',
    },
    {
      title: 'Headache',
      description: 'Description',
    },
    {
      title: 'Headache',
      description: 'Description',
    },
    {
      title: 'Headache',
      description: 'Description',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.flexContainer}>
          <Avatar.Icon size={56} icon="folder" />
          <View style={styles.textContainer}>
            <Text style={styles.text}>{item.title}</Text>
            <Text style={styles.text}>{item.description}</Text>
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

export default Symptoms;

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
    fontSize: 16,
    marginVertical: 10,
  },
});
