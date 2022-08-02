import React, { useEffect, useState } from "react";
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
import { profile } from "../../Api/auth";
interface homeScreenProps {
  navigation: any;
}
const EditProfile = (props: homeScreenProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [_profile, setProfile]:any = useState(null)
  const [loading ,setLoading] = useState(false)
  const changeImg = () => {

  }

  useEffect(() => {
    const getData = async () => {
      try {
        const getProfile = await profile();
        setProfile(getProfile?.data);
        setLoading(true);
        console.log(getProfile?.data);
        
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);



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
        <TextInput style={styles.input} onChangeText={setName} value={_profile?.name }/>
        <Text style={styles.titles}>Email</Text>
        <TextInput style={styles.input} onChangeText={setEmail} value={_profile?.email}/>
        {/* <Text style={styles.titles}>Password</Text>
        <TextInput style={styles.input} onChangeText={setPassword} secureTextEntry />
        <Text style={styles.titles}>Verify Password</Text>
        <TextInput style={styles.input} onChangeText={setVerifyPassword} secureTextEntry/> */}
        <Pressable onPress={changeImg}>
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
    marginTop: 30,
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
    backgroundColor: "white",
    paddingLeft:15
  },
  titles:{
    marginLeft:30,
    marginBottom:5
  },

});
export default EditProfile;
