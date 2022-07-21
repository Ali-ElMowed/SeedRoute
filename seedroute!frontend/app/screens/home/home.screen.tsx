import React from "react";
import { Button, Text, View } from "react-native";
import BottomTabNavigator from "../../bottomTab.navigator";

interface loginScreenProps {
  navigation: any;
}

function HomeScreen(props: loginScreenProps) {
  const goSketch = () => props.navigation.navigate("Sketch");
  return (

    <BottomTabNavigator />

  );
}

export default HomeScreen;
