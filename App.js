import * as React from 'react';
import { useEffect } from 'react';
import SendSMSContainer from './screens/SendSMSContainer';
import { PermissionsAndroid } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SpamScreen from './screens/InboxScreen';
import { AppContext, AppProvider } from './screens/useContext';
import TabNavigation from './screens/TabNavigation';

const App = () => {
  const requestMessagePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_SMS,
        {
          title: 'This app requires permission to read message',
          message:
            'App needs access to read your messages ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Permission Granted');
      } else {
        console.log('Permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    requestMessagePermission();
  }, []);

  return (
    // <AppProvider>
    // <NavigationContainer >
    //   <TabNavigation />
    // </NavigationContainer>
    // </AppProvider>
    <AppProvider>
      <NavigationContainer>
        <SendSMSContainer />
      </NavigationContainer>
    </AppProvider>
  );
};



export default App;