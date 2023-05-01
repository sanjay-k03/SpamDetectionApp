import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProfileScreen from './ProfileScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck, faBug, faUser } from '@fortawesome/free-solid-svg-icons';
import SpamScreen from './InboxScreen';
import HamScreen from './SpamScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="ShieldTrack" component={SpamScreen}
                options={{
                    tabBarActiveBackgroundColor: '#eee6ff',
                    tabBarInactiveBackgroundColor: 'white',
                    headerShown: false,
                    tabBarLabel: "Inbox",
                    tabBarLabelStyle: { color: '#50348b' },
                    tabBarIcon: () => (
                        <FontAwesomeIcon icon={faCheck} size={25} color="black" />
                    )
                }} />
            <Tab.Screen name="Spam" component={HamScreen}
                options={{
                    tabBarActiveBackgroundColor: '#eee6ff',
                    tabBarInactiveBackgroundColor: 'white',
                    headerShown: false,
                    tabBarLabel: "Spam",
                    tabBarLabelStyle: { color: '#50348b' },                    // tabBarLabel: "home",
                    tabBarIcon: () => (
                        <FontAwesomeIcon icon={faBug} size={25} color="black" />
                    )
                }} />
            <Tab.Screen name="Profile" component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarActiveBackgroundColor: '#eee6ff',
                    tabBarInactiveBackgroundColor: 'white',
                    headerShown: false,
                    tabBarLabel: "Profile",
                    tabBarLabelStyle: { color: '#50348b' },
                    // tabBarLabel: "home",
                    tabBarIcon: () => (
                        <FontAwesomeIcon icon={faUser} size={25} color="black" />
                    )
                }} />
        </Tab.Navigator>
    )
}

export default TabNavigation

const styles = StyleSheet.create({})