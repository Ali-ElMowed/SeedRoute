import React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import Block from "../../Components/Block";
import Btn from "../../Components/Btn";
import Sketch from "../Sketch/Sketch.screen";

interface homeScreenProps {
  navigation: any;
}
const Profile = (props: homeScreenProps) => {
  const goToSketch = () => props.navigation.navigate("Sketch");

    const arr:any = []
    for(let i = 0 ; i <10 ; i++){
        arr.push(
            <Block id={i}/>
        )
    }
  return (
    <ScrollView>
      <View >
        <View style={styles.header}>
            
        <Image source={require('../../../assets/images/app-icon.jpg')} style={{width:70, height:70, borderRadius:100, margin:20}}/>
        <Text style={styles.userName}>User Name</Text>
        </View>
        <View style={styles.container}>{arr}</View>
        
        {/* <Button title="BACK" onPress={goBackk}></Button> */}
        <Btn text="Edit Sketch" onPress={goToSketch} style={styles.nxtBtn}/>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent:'center',
        alignContent:'center',
        marginBottom:7
    },
    nxtBtn:{
        marginLeft:100,
        marginRight:100,
        color:"white",
    },
    titleTxt:{
        margin:10,
        marginBottom:13,
        alignSelf:'center',
        fontSize:32,
        fontWeight:'bold',
        
    },
    header:{
      flexDirection:'row',

    },
    userName

  });

export default Profile;
