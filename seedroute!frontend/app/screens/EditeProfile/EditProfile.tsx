import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
  TouchableOpacity,
  TextInput

} from "react-native";
interface homeScreenProps {
  navigation: any;
}
const EditProfile = (props: homeScreenProps) => {
  const [name, setName] = useState("12345678");
  const [email, setEmail] = useState("12345678");
  return (
    <ScrollView>
      <View>
        <Image
          source={require("../../../assets/images/avatar.jpg")}
          style={styles.img}
        />

        <Pressable>
          <Text style={styles.changetext}>Change Profile Picture</Text>
        </Pressable>
        <Text style={styles.titles}>Name</Text>
        <TextInput style={styles.input}/>
        <Text style={styles.titles}>Email</Text>
        <TextInput style={styles.input}/>
        <Pressable>
          <Text style={styles.changetext}>Update</Text>
        </Pressable>
        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  img: {
    maxHeight: 150,
    maxWidth: 150,
    alignSelf: "center",
    borderRadius: 100,
    marginTop: 100,
  },
  changetext: {
    margin: 10,
    marginTop: 30,
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    borderRadius: 6,
    padding: 6,
    backgroundColor: "#0D9B81",
  },
  imageContainer: {
    margin: 0,
  },
  input: {
    margin: 30,
    marginTop: 0,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 6,
    padding:6,
    backgroundColor: "white"
  },
  titles:{
    marginLeft:30,
    marginBottom:5
  },

});
export default EditProfile;
