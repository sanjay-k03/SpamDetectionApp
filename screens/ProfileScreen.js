import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.headerImage} source={require('../img/shieldsquad.jpg')} />
        {/* <Text style={styles.headerText}>Spam</Text> */}
      </View>
      <View style={styles.itemContainer}>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#eee6ff',
  },
  header: {
    backgroundColor: '#50348b',
    flexDirection: 'row',
    width:'100%',
    justifyContent: 'center',
    height: "16%",
    borderBottomLeftRadius: 75,
    borderBottomRightRadius: 75
  },
  headerText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
  itemContainer: {
    backgroundColor: '#eee6ff',
    paddingVertical: 10,
    paddingHorizontal: 7.5,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    height:'84%',
    // shadowColor:'black',
    // shadowOffset: 5,
    // shadowOpacity:1
  },
  itemAddress: {
    fontSize: 18,
    color: '#50348b',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemBody: {
    height: 20,
    fontSize: 16,
    color: '#000',
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  itemDate: {
    fontSize: 12,
    color: 'black',
  },
  itemIcon: {
    marginLeft: 10,
  },
  emptyMessage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyMessageText: {
    fontSize: 18,
    color: '#808080',
    marginTop: 20,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#2E86C1',
    borderRadius: 30,
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fabIcon: {
    color: '#fff',
  },
  headerImage: {
    height: 100,
    width: 100
  }
});

export default ProfileScreen;
