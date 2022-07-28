import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/login/login.screen";
import Register from "../screens/register/Register.screen";
import HomeScreen from "../screens/Home/Home.screen";
import Sketch from "../screens/Sketch/Sketch.screen";
import Plant from "../screens/Plant/Plant.screen";
import Block from "../screens/Block/Block.screen";
import Watering from "../screens/Watering/Watering.screen";
import { useAppSelector } from "../redux/hooks";
import Advisors from "../screens/Advisors/Advisors.screen";
import ChatRoom from "../screens/ChatRoom/ChatRoom.screen";
import AddRoom from "../screens/AddRoom/AddRoom.Screen";

const { Navigator, Screen } = createNativeStackNavigator();


const AppNavigator = () => {
  const user = useAppSelector(state=>state.user)
  
return (
  <NavigationContainer>
    <Navigator
      initialRouteName="login"
      
      screenOptions={{
        headerStyle: {
          backgroundColor: "#0D9B81",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
      
    >
      <Screen name="Login" component={LoginScreen}></Screen>
      <Screen name="Sketch" component={Sketch}></Screen>
      <Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Seed Route" }}
      ></Screen>
      <Screen name="Register" component={Register}></Screen>
      <Screen name="Plant" component={Plant}></Screen>
      <Screen name="Block" component={Block}></Screen>
      <Screen name="Watering" component={Watering}></Screen>
      <Screen name="ChatRoom" component={ChatRoom}></Screen>
      <Screen name="AddRoom" component={AddRoom}></Screen>
    </Navigator>
  </NavigationContainer>
)};

export default AppNavigator;
