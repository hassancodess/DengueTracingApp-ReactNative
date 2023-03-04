import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  DataTable,
  Searchbar,
  IconButton,
  Modal,
  Portal,
  Provider,
} from 'react-native-paper';
import {colors} from '../../utils/Constants';
import {SmallButton} from '../../components/Button';
const ViewHealthInspector = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const [visible, setVisible] = useState(false);
  const [currentItem, setcurrentItem] = useState({});

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const data = [
    {
      name: 'M. Ahmed',
      sectors: ['Satellite Town', 'Dhok Kashmerian', 'Saidpur', 'Pindora'],
    },
    {
      name: 'Grace Hopper',
      sectors: ['Saidpur', 'Satellite Town', 'Dhok Kashmerian', 'Pindora'],
    },
    {
      name: 'John Doe',
      sectors: ['Dhok Kashmerian', 'Saidpur', 'Pindora', 'Satellite Town'],
    },
    {
      name: 'Suzy Bae',
      sectors: ['Pindora', 'Satellite Town', 'Dhok Kashmerian', 'Saidpur'],
    },
  ];

  return (
    <Provider>
      <View style={styles.container}>
        <View>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </View>
        <View style={styles.dataTableContainer}>
          <DataTable style={styles.dataTable}>
            <DataTable.Header style={styles.dataTableHeader}>
              <DataTable.Title style={styles.row1}>
                <Text style={styles.titleText}>Name</Text>
              </DataTable.Title>
              <DataTable.Title style={styles.row2}>
                <Text style={styles.titleText}>Sector</Text>
              </DataTable.Title>
              <DataTable.Title style={styles.row3}>
                <Text style={styles.titleText}>Action</Text>
              </DataTable.Title>
            </DataTable.Header>

            {data.map((item, index) => (
              <DataTable.Row key={index}>
                <DataTable.Cell style={styles.row1}>
                  <Text style={styles.darkText}>{item.name}</Text>
                </DataTable.Cell>
                <DataTable.Cell style={styles.row2}>
                  <Text style={styles.darkText}>{item.sectors[0]}</Text>
                </DataTable.Cell>
                <DataTable.Cell style={styles.row3}>
                  <Text
                    style={styles.row3Text}
                    onPress={() => {
                      setcurrentItem(item);
                      showModal();
                    }}>
                    Edit
                  </Text>
                </DataTable.Cell>
              </DataTable.Row>
            ))}
            <CustomModal
              visible={visible}
              setVisible={setVisible}
              hideModal={hideModal}
              showModal={showModal}
              item={currentItem}
            />
          </DataTable>
        </View>
      </View>
    </Provider>
  );
};

const CustomModal = ({visible, setVisible, hideModal, showModal, item}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.containerStyle}>
        <View style={styles.modalFirstRow}>
          <Text style={{fontSize: 16, color: colors.dark}}>
            <Text style={{fontWeight: 'bold'}}>Health Inspector: </Text>
            {item.name}
          </Text>
          <IconButton
            icon="close"
            mode="contained"
            iconColor={colors.dark}
            style={styles.closeButton}
            size={20}
            onPress={hideModal}
          />
          {/* View */}
        </View>
        <View style={{marginVertical: 20}}>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            // style={{backgroundColor: colors.white}}
          />
        </View>
        {/* Data Table */}
        <DataTable style={styles.dataTable}>
          <DataTable.Header style={styles.dataTableHeader}>
            <DataTable.Title style={{flex: 2}}>
              <Text style={styles.darkText}>Name</Text>
            </DataTable.Title>
            <DataTable.Title>
              <Text style={[styles.darkText, {paddingLeft: 10}]}>Select</Text>
            </DataTable.Title>
          </DataTable.Header>
          {item.sectors &&
            item.sectors.map((sector, index) => (
              <DataTable.Row key={index} style={{borderBottomWidth: 3}}>
                <DataTable.Cell style={{flex: 2}}>
                  <Text style={styles.darkText}>{sector}</Text>
                </DataTable.Cell>
                <DataTable.Cell
                  style={{backgroundColor: 'blue'}}></DataTable.Cell>
              </DataTable.Row>
            ))}
        </DataTable>
        <View style={{width: '100%', marginTop: 10}}>
          <View style={{width: '30%', alignSelf: 'flex-end'}}>
            <SmallButton title={'Save'} />
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

export default ViewHealthInspector;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  dataTableContainer: {
    marginVertical: 20,
  },
  dataTable: {
    borderWidth: 1,
  },
  dataTableHeader: {
    backgroundColor: colors.light,
    color: colors.dark,
  },
  darkText: {
    color: colors.dark,
  },
  titleText: {
    color: colors.dark,
    fontSize: 16,
    fontWeight: 'bold',
  },
  dataTableRow: {},
  row1: {
    flex: 1.5,
    color: colors.dark,
  },
  row2: {
    flex: 1.5,
    color: colors.dark,
  },
  row3: {
    flex: 0.5,
    color: colors.dark,
  },
  row3Text: {
    textDecorationLine: 'underline',
    // textDecorationStyle: 'solid',
    color: colors.links,
    textDecorationColor: colors.primary,
  },
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
  modalFirstRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
