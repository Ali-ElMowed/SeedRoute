import React from "react";
import { Text, View, StyleSheet, Image, ScrollView, Pressable } from "react-native";
import { faFaucetDrip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

interface homeScreenProps {
  navigation: any;
}
const Notifications = (props: homeScreenProps) => {

  return (
    <ScrollView>
      <View >
        
        
        <Pressable  style={styles.chatBar}>
          <FontAwesomeIcon icon={faFaucetDrip} style={styles.icon} />
          <View>
          <Text style={styles.text}>Watering has just started.</Text>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  icon: {
    color: "#0D9B81",
    margin:25,
    padding: 14,
    
  },
  chatBar: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "gray",
    flexDirection: "row",
  },
  text:{
    fontSize: 22,
    marginTop: 25
  }
})
export default Notifications;