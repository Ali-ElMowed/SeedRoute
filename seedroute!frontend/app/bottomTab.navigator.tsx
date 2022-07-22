import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "./screens/Profile/Profile.screen";
import Notifications from "./screens/Notification/Notification.screen";
import Chats from "./screens/Chat/Chat.screen";
import Plants from "./screens/Plants/Plants.screen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
    <Tab.Navigator 
    initialRouteName="Profile"
    >
        <Tab.Screen name="Plants" component={Plants} options={{headerShown:false}} />
        <Tab.Screen name="Chats" component={Chats} options={{headerShown:false}} />
        <Tab.Screen name="Notifications" component={Notifications} options={{headerShown:false}}/>
        <Tab.Screen name="Profile" component={Profile} options={{headerShown:false, } } />
    </Tab.Navigator>
);

export default BottomTabNavigator;
