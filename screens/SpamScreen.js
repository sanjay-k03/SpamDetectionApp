import { Button, Image,  StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, {useEffect, useState, useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserCircle, faPlus, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from './useContext';

const SpamScreen = () => {
  const value =useContext(AppContext)
  return (
  <View style={styles.container}>
  <View style={styles.header}>
    <Image style={styles.headerImage} source={require('../img/shieldsquad.jpg')} />
    {/* <Text style={styles.headerText}>Spam</Text> */}
  </View>
    <FlatList
            data={value.spamdata}
            keyExtractor={(item) => item._id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.itemContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <FontAwesomeIcon icon={faUserCircle} size={40} color="red" />
                  <Text style={styles.itemAddress}>{item.address}</Text>
                </View>
                <Text style={styles.itemBody}>{item.body}</Text>

                <View style={styles.itemFooter}>
                  <Text style={styles.itemDate}>{new Date(item.date).toLocaleString()}</Text>
                  {/* <FontAwesomeIcon
                    icon={item.read === 1 ? faEnvelopeOpen : faEnvelope}
                    size={20}
                    color="#808080"
                    style={styles.itemIcon} /> */}
                </View>
              </TouchableOpacity>

            )}
            ListEmptyComponent={() => (
              <View style={styles.emptyMessage}>
                <FontAwesomeIcon icon={faEnvelopeOpen} size={50} color="#808080" />
                <Text style={styles.emptyMessageText}>No messages found</Text>
              </View>
            )} />
          <TouchableOpacity style={styles.fab}>
            <FontAwesomeIcon icon={faPlus} size={30} style={styles.fabIcon} />
          </TouchableOpacity>
  </View>
  )
}

export default SpamScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#eee6ff',
    },
    header: {
      backgroundColor: '#50348b',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: 100,
      borderBottomLeftRadius:75,
      borderBottomRightRadius:75
    },
    headerText: {
      fontSize: 22,
      color: '#fff',
      fontWeight: 'bold',
    },
    itemContainer: {
      backgroundColor: '#FF8A8A',
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 10,
    },
    itemAddress: {
      fontSize: 18,
      color: 'white',
      fontWeight: 'bold',
      marginBottom: 5,
    },
    itemBody: {
      height: 20,
      fontSize: 16,
      color: 'white',
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
  