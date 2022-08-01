import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { getSelectedBlocks } from "../../Api/blocks";
import Block from "../../Components/Block";
import Btn from "../../Components/Btn";
import Loading from "../../Components/Loading";
import ProfileBlocks from "../../Components/ProfileBlocks";

interface homeScreenProps {
  navigation: any;
}
const Profile = (props: homeScreenProps) => {
  const goToSketch = () => props.navigation.navigate("Sketch");
  const goEditProfile = () => {
    props.navigation.navigate("EditProfile");
  };
  const [user,setUser] = useState('')
  const [loading, setLoading] = useState(false);
  const [blocks, setBlocks]: any = useState([
    {
      name: 0,
      value: 0,
    },
    {
      name: 1,
      value: 0,
    },
    {
      name: 2,
      value: 0,
    },
    {
      name: 3,
      value: 0,
    },
    {
      name: 4,
      value: 0,
    },
    {
      name: 5,
      value: 0,
    },
    {
      name: 6,
      value: 0,
    },
    {
      name: 7,
      value: 0,
    },
    {
      name: 8,
      value: 0,
    },
    {
      name: 9,
      value: 0,
    },
    {
      name: 10,
      value: 0,
    },
    {
      name: 11,
      value: 0,
    },
    {
      name: 12,
      value: 0,
    },
    {
      name: 13,
      value: 0,
    },
    {
      name: 14,
      value: 0,
    },
    {
      name: 15,
      value: 0,
    },
    {
      name: 16,
      value: 0,
    },
    {
      name: 17,
      value: 0,
    },
    {
      name: 18,
      value: 0,
    },
    {
      name: 19,
      value: 0,
    },
    {
      name: 20,
      value: 0,
    },
    {
      name: 21,
      value: 0,
    },
    {
      name: 22,
      value: 0,
    },
    {
      name: 23,
      value: 0,
    },
    {
      name: 24,
      value: 0,
    },
    {
      name: 25,
      value: 0,
    },
    {
      name: 26,
      value: 0,
    },
    {
      name: 27,
      value: 0,
    },
  ]);
  const goToBlock = (blockName:number) => props.navigation.navigate("Block",{blockName});

  useEffect(() => {
    const getBlocks = async () => {
      try {
        setUser( JSON.parse(await AsyncStorage.getItem('user'||'')|| '').user.name )
        setLoading(true);
        const res = await getSelectedBlocks();

        setBlocks(
          blocks.map((block: any, index: number) => {
            return res?.data?.data.find(
              (selected: any) => selected.name == block.name
            )
              ? {
                  name: block.name,
                  value: 1,
                }
              : block;
          })
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getBlocks();
  }, []);

  return (
    <ScrollView>
      <View>
        <View style={styles.header}>
          <Image
            source={require("../../../assets/images/avatar.jpg")}
            style={{
              width: 70,
              height: 70,
              borderRadius: 100,
              margin: 20,
              marginRight: 0,
            }}
          />
          <Text style={styles.userName}>{user}</Text>
          <Btn text="Edit" onPress={goEditProfile} style={styles.editProBtn} />
        </View>
        <Btn text="Edit Sketch" onPress={goToSketch} style={styles.editBtn} />
        <View style={styles.container}>
          {loading?<Loading/>:blocks.map((block: any) => (
            <ProfileBlocks
              name={block.name}
              value={block.value}
              onPress={()=> goToBlock(block.name)}
            />
          ))}
        </View>

        {/* <Button title="BACK" onPress={goBackk}></Button> */}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    marginBottom: 7,
  },
  editBtn: {
    marginLeft: 100,
    marginRight: 42,
    marginBottom: 10,
    color: "white",
    alignSelf: "flex-end",
  },
  editProBtn: {
    maxWidth: 100,
    maxHeight: 45,
    margin: 10,
    marginTop: 30,
    marginLeft: 30,
  },
  titleTxt: {
    margin: 10,
    marginBottom: 13,
    alignSelf: "center",
    fontSize: 32,
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "space-between",
  },
  userName: {
    marginTop: 38,
    marginLeft: 10,
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Profile;
