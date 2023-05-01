import { Button, Image, StyleSheet, Text, View, FlatList, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserCircle, faPlus, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from './useContext';

const InboxScreen = () => {
  const value = useContext(AppContext)
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "message": value.globalData[0]?.["body"],
    "sender": value.globalData[0]?.["address"]
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  useEffect(() => {
    fetch("https://55e4-125-17-180-42.in.ngrok.io/api/v1/sms_recive", requestOptions)
    .then(response => response.text())
    .then(result => {
      let x = JSON.parse(result)
      responseaddress = x.sender
      value.setApiResult(responseaddress);
      console.log(responseaddress)
      value.globalData.forEach(element => {
        if (element.address == responseaddress) {
          Alert.alert('Alert title:', 'This is a Spam message')
          console.log(value.spamdata);
          value.spamdata.length == 0 ? value.setSpamdata([element]) : value.setSpamdata([...value.spamdata, element])
        }
      });
      // console.log(typeof(value.apiresult))
      // console.log(value.apiresult["sender"])
      // tempvar = value.apiresult.sender 
      // console.log('result',result)
      // console.log(value.apiresult)    
    })
    .catch(error => console.log('error', error));
  }, [])
  // value.globalData.forEach(value.apiresult.address => {

  // });

  // console.log(value.apiresult.sender)

  // console.log(value.globalData[0]["body"])

  // Function to read messages
  // function getSMS () {

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.headerImage} source={require('../img/shieldsquad.jpg')} />
          <Text style={styles.headerText}></Text>
        </View>
        <FlatList
          data={value.globalData}
          keyExtractor={(item) => item._id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.itemContainer}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faUserCircle} size={40} color="#50348b" />
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
    </>
  )

}
export default InboxScreen

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
    // shadowColor:'black',
    // shadowOffset: 5,
    // shadowOpacity:1
  },
  itemAddress: {
    paddingLeft: 5,
    fontSize: 18,
    color: '#50348b',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemBody: {
    height: 25,
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
    backgroundColor: '#50348b',
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
