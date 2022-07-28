import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { IconButton, TextInput } from "react-native-paper";
import Btn from "../../Components/Btn";
import firestore from "@react-native-firebase/firestore";

interface AddRoomScreenProps {
  navigation: any;
}

export default function AddRoom(props: AddRoomScreenProps) {
  const goBack = () => props.navigation.goBack();
  const [roomName, SetRoomName] = useState("");
  const handleButtonPress = () => {
    
      firestore()
        .collection("THREADS")
        .add({
          name: roomName,
        })
        .then(() => {
          props.navigation.navigate("Chats");
        });
    
  };
  
  return (
    <View style={styles.rootContainer}>
      <View style={styles.closeButtonContainer}>
        <IconButton
          icon="close-circle"
          size={36}
          color="#6646ee"
          onPress={goBack}
        />
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.Text}>Create a new chat room</Text>
        <TextInput
          style={styles.input}
          label="Room Name"
          value={roomName}
          onChangeText={(text) => SetRoomName(text)}
          clearButtonMode="while-editing"
        />
        <Btn
          text="Create"
          style={styles.buttonLabel}
          onPress={ handleButtonPress}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {},
  rootContainer: {
    flex: 1,
  },
  closeButtonContainer: {
    position: "absolute",
    top: 30,
    right: 0,
    zIndex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  buttonLabel: {
    fontSize: 22,
  },
  Text: {},
  input: {
    width: 300,
  },
});
