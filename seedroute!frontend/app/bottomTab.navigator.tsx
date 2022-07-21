import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "./screens/Profile/Profile.screen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
    <Tab.Navigator >
        {/* <Tab.Screen name="Sketch" component={Sketch} options={{headerShown:false}} /> */}
        {/* <Tab.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/> */}
        <Tab.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
        {/* <Tab.Screen name="Home" component={HomeScreen}/> */}
    </Tab.Navigator>
);

export default BottomTabNavigator;
