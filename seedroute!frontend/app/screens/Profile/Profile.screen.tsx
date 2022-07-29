import React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import Block from "../../Components/Block";
import Btn from "../../Components/Btn";

interface homeScreenProps {
  navigation: any;
}
const Profile = (props: homeScreenProps) => {
  const goToSketch = () => props.navigation.navigate("Sketch");
  const goEditProfile = () =>{ props.navigation.navigate("Sketch")

};
  const goToBlock = () => props.navigation.navigate("Block");
  const user = JSON.parse(localStorage.getItem('user') || '').user_name.name
  


    const arr:any = []
    for(let i = 0 ; i <10 ; i++){
        arr.push(
            <Block
            //  navigation={"Block"}
             id={i}
              // onPress={ goToBlock}
              />
        )
    }
  return (
    <ScrollView>
      <View >
        <View style={styles.header}>
            
        <Image source={require('../../../assets/images/avatar.jpg')} style={{width:70, height:70, borderRadius:100, margin:20, marginRight:0}}/>
        <Text style={styles.userName}>{user}</Text>
        <Btn text="Edit" onPress={goEditProfile} style={styles.editProBtn}/>
        </View>
        <Btn text="Edit Sketch" onPress={goToSketch} style={styles.editBtn}/>
        <View style={styles.container}>{arr}</View>
        
        {/* <Button title="BACK" onPress={goBackk}></Button> */}
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
    editBtn:{
        marginLeft:100,
        marginRight:42,
        marginBottom:10,
        color:"white",
        alignSelf:'flex-end'
    },
    editProBtn:{
      maxWidth:100,
      maxHeight:45,
      margin:10,
      marginTop:30,
      marginLeft:30
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
      marginBottom:10,
      justifyContent:'space-between'

    },
    userName:{
      marginTop:38,
      marginLeft:10,
      fontSize:24,
      fontWeight:'bold'
    }

  });

export default Profile;
