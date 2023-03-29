import React,{useContext, useEffect, useState} from 'react';
import {View, Text} from 'react-native'
import Scan from './scan';
import SmsListener from 'react-native-android-sms-listener';
// import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SpamScreen from './InboxScreen';
import HamScreen from './SpamScreen';
import SmsAndroid from 'react-native-get-sms-android';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileScreen from './ProfileScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck, faBug, faUser } from '@fortawesome/free-solid-svg-icons';
import {AppContext, useArr} from './useContext'
import TabNavigation from './TabNavigation';
// import { AppContext, AppProvider } from './useContext';
// import CategoriesScreen from './CategoriesScreen';
// import { NavigationContainer } from '@react-navigation/native';


const TopTab = createMaterialTopTabNavigator();

function SendSMSContainer() {  
    
    const value = useContext(AppContext)
   const [listdata , setListdata] = useState([{}])

//   useEffect(() => {
//       SmsListener.addListener(message => {
//       console.log("gelen sms", message)
//     })
//   }, [])

    useEffect(()=> {
        let filter = {
          box: 'inbox', // 'inbox' (default), 'sent', 'draft', 'outbox', 'failed', 'queued', and '' for all
          read: 1, // 0 for unread SMS, 1 for SMS already read
         // _id: 1232, // specify the msg id (if specifically needed)
          indexFrom: 0, // start from index 0
          //maxCount: 25, // count of SMS to return each time
      }; 
      SmsAndroid.list(
          JSON.stringify(filter),
          (fail) => {
              console.log('Failed with this error: ' + fail);
          },
          (count, smsList) => {
              console.log('Count: ', count);//no. of messages fetched
              // console.log('smslist', smsList)
              var arr = JSON.parse(smsList);//{"_id": 3475, "address": "+919894107264", "black_type": 0, "block_sms_type": 0, "body": "hgfthx", "bubble": "{\"msgId\":\"3475\",\"date\":1679504307000,\"progress\":false,\"source\":0,\"body\":\"hgfthx\",\"number\":\"+919894107264\"}", "bubble_type": 1, "date": 1679504306950, "date_sent": 0, "dirty": 1, "error_code": 0, "is_encrypted": 0, "is_exec_trigger": 1, "locked": 0, "message_mode": 0, "parser_ver": 8589934596, "phone_id": -1, "priority": -1, "protocol": 0, "read": 1, "reply_path_present": 0, "risk_website": 2, "seen": 1, "service_center": "+917012075009", "sp_id": 3001, "status": -1, "sub_id": 1, "thread_id": 272, "time": 1679504307000, "type": 1, "verify_code": 0}]
              lastelement = arr[arr.length-1]
            //   console.log('ID:' + lastelement._id)

              setListdata(arr)
              // console.log('Body: '+ messagedata)
              // arr.forEach(function (object) {
              //     // console.log('ID: ' + object._id); //sender
              //     // console.log('Address:' + object.address)
              //     // console.log('Body: ' + object.body);
              // });
              value.setGlobalData(arr)
          },
      );}, [])
    
    return (
            // <Scan
            //     getSMS={getSMS}
            // />
            <TabNavigation />
            // <View>  
                // {/* {listdata.map(x=>{
                    // return (<Text> HIii {Object.values(x)}</Text>)
                // }) } */}
            // </View>
        //     <AppProvider>
        //     <TopTab.Navigator>
        //       {/* <TopTab.Screen name="Send SMS" component={SendSMSContainer} /> */}
        //       <TopTab.Screen name="Spam" component={SpamScreen} />
        //       <TopTab.Screen name="Ham" component={HamScreen} />
        //       <TopTab.Screen name="Profile" component={ProfileScreen} />
        //     </TopTab.Navigator>
        //   </AppProvider>
        );

}

export default SendSMSContainer;
