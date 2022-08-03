//ts
import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  TouchableOpacity,
  TextInput,
  Platform,
  Button,
  Image,
} from "react-native";
import { profile } from "../../Api/auth";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import { updateUser } from "../../Api/profile";

interface homeScreenProps {
  navigation: any;
}
const EditProfile = (props: homeScreenProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [_profile, setProfile]: any = useState(null);
  const [loading, setLoading] = useState(false);
  const [image, setImage]: any = useState(null);
  const [imageFile, setImageFile]: any = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const getProfile = await profile();
        setProfile(getProfile?.data);
        setLoading(true);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const handleUpdateUser = async (
    namet: string,
    emailt: string,
    imaget: any
  ) => {
    try {
      setLoading(true);

      const res = await updateUser(namet, emailt, imaget);
      props.navigation.goBack();
      return res;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const pickImage = async () => {
    let result: any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64:true
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
    console.log( result);

    const fileURL = result.uri;
    const cleanURL = fileURL.replace("file://", "");
    let formdata: any = new FormData();
    formdata.append("file", {
      uri: cleanURL,
      type: result.type,
      name: 'image'
    });
    setImageFile(formdata);

    const iimage =  File
  };

  return (
    <ScrollView>
      {image && (
        <Image
          source={{ uri: image }}
          style={{
            width: 200,
            height: 200,
            alignSelf: "center",
            borderRadius: 100,
            marginTop: 30,
          }}
        />
      )}
      <Pressable onPress={pickImage}>
        <Text style={styles.changetext}>Change Profile Picture</Text>
      </Pressable>
      <Text style={styles.titles}>Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        placeholder={_profile?.name}
      />
      <Text style={styles.titles}>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        placeholder={_profile?.email}
      />
      <Pressable onPress={() => handleUpdateUser(name, email, imageFile)}>
        <Text style={styles.changetext}>Update</Text>
      </Pressable>
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
    padding: 6,
    backgroundColor: "white",
    paddingLeft: 15,
  },
  titles: {
    marginLeft: 30,
    marginBottom: 5,
  },
});
export default EditProfile;
