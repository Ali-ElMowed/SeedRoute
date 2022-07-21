import React from "react";
import { Button, Text, View } from "react-native";

interface loginScreenProps {
  navigation: any;
}

const MylandScreen = (props: loginScreenProps) => {
  const goHome = () => props.navigation.navigate("Home");

  return (
    <View>
      <Text>MylandScreen page</Text> 
    </View>
  );
};

export default MylandScreen;
