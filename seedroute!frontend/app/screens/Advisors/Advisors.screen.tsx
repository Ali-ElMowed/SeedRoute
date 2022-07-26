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
const Advisors = (props: homeScreenProps) => {
  const goAdvInfo = () => props.navigation.navigate("");

  return (
    <View style={styles.container}>
      <Pressable style={styles.advisor_card}>
        <Image
          source={require("../../../assets/images/avatar.jpg")}
          style={styles.advisor_img}
        />
        <Text style={styles.advisor_name}>Advisor name</Text>
        <Text style={styles.advisor_ex}>Expreience: 10 years</Text>
        <Text style={styles.advisor_ex}>Job: agriculture engineer</Text>
        <Text style={styles.advisor_ex}>Bio: Some Bio</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  advisor_card: {
    borderWidth: 2,
    padding: 20,
    width: 170,
    margin: 10,
    borderRadius: 6,
    backgroundColor: "white",
    borderColor: "#0D9B81",
  },
  advisor_img: {
    width: 100,
    height: 100,
    alignSelf: "center",
    borderColor: "#0D9B81",
    borderWidth: 1,
    borderRadius: 50,
  },
  advisor_ex: {
    textAlign: "center",
    marginBottom: 1,
    fontSize: 13,
  },
  advisor_name: {
    textAlign: "center",
    marginBottom: 5,
    fontWeight: "bold",
  },
});
export default Advisors;
