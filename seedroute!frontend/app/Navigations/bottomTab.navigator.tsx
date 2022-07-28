import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screens/Profile/Profile.screen";
import Notifications from "../screens/Notification/Notification.screen";
import Chats from "../screens/Chat/Chat.screen";
import Plants from "../screens/Plants/Plants.screen";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {faMessage, faSeedling, faBell,faTableCells, faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import Advisors from "../screens/Advisors/Advisors.screen";


const Tab = createBottomTabNavigator();


const BottomTabNavigator = () => (
    
    <Tab.Navigator 
    initialRouteName="Profile"
    >
        <Tab.Screen name="Plants" component={Plants} options={{headerShown:false, tabBarIcon:()=>(<FontAwesomeIcon icon={faSeedling} style={{color:'#0D9B81', padding:12}}/>)}} />
        <Tab.Screen name="Advisors" component={Advisors} options={{headerShown:false, tabBarIcon:()=>(<FontAwesomeIcon icon={faPersonDigging} style={{color:'#0D9B81', padding:12}}/>)}} />
        <Tab.Screen name="Chats" component={Chats} options={{headerShown:false, tabBarIcon:()=>(<FontAwesomeIcon icon={faMessage} style={{color:'#0D9B81', padding:12}}/>)}} />
        <Tab.Screen name="Notifications" component={Notifications} options={{headerShown:false, tabBarIcon:()=>(<FontAwesomeIcon icon={faBell} style={{color:'#0D9B81', padding:12}}/>)}}/>
        <Tab.Screen name="Profile" component={Profile} options={{headerShown:false, tabBarIcon:()=>(<FontAwesomeIcon icon={faTableCells} style={{color:'#0D9B81', padding:12}}/>) } } />
    </Tab.Navigator>
);

export default BottomTabNavigator;
