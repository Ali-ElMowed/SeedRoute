import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/login/login.screen";
import Register from "./screens/register/Register.screen";
import HomeScreen from "./screens/Home/Home.screen";
import Sketch from "./screens/Sketch/Sketch.screen";
import Plant from "./screens/Plant/Plant.screen";

const { Navigator, Screen } = createNativeStackNavigator();

const AppNavigator = () => (
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
        options={{ title: "Home" }}
      ></Screen>
      <Screen name="Register" component={Register}></Screen>
      <Screen name="Plant" component={Plant}></Screen>
    </Navigator>
  </NavigationContainer>
);

export default AppNavigator;
