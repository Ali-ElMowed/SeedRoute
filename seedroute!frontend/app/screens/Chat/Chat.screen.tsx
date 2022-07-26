import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import Btn from "../../Components/Btn";
interface homeScreenProps {
  navigation: any;
}
const Chats = (props: homeScreenProps) => {
  const goAskAdv = () => props.navigation.navigate("Advisors");
  const goToChat = () => props.navigation.navigate("ChatRoom");
  return (
    <ScrollView>
      <View >
        <Btn text="Ask Advisor" style={styles.btn} onPress={goAskAdv} />
        <Pressable onPress={goToChat} style={styles.chatBar}>
          <Image
            source={require("../../../assets/images/avatar.jpg")}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.uname}>User Name</Text>
            <Text style={styles.lmsg}>Hey, how are you doing?</Text>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 50,
    marginRight: 50,
  },
  avatar: {
    alignSelf: "flex-start",
    width: 60,
    height: 60,
    borderRadius: 50,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  chatBar: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flexDirection: "row",
  },
  uname: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  lmsg: {
    marginLeft: 20,
    marginBottom: 10,
  },
});
export default Chats;
