import React from "react";
import { Text, View, StyleSheet, Button, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Block from "../../Components/Block";
import Btn from "../../Components/Btn";

interface homeScreenProps {
  navigation: any;
}
const Home = (props: homeScreenProps) => {
  const goBackk = () => props.navigation.goBack();
  const myLand = () => props.navigation.navigate("MyLand");

    const arr:any = []
    for(let i = 0 ; i <28 ; i++){
        arr.push(
            <Block id={i}/>
        )
    }
  return (
    <ScrollView>
      <View >
        <Text style={styles.titleTxt}>Sketch Your Land</Text>
        <View style={styles.container}>{arr}</View>
        
        {/* <Button title="BACK" onPress={goBackk}></Button> */}
        <Btn text="Next" onPress={myLand} style={styles.nxtBtn}/>
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
        color:"white"
    },
    titleTxt:{
        margin:10,
        marginBottom:13,
        alignSelf:'center',
        fontSize:32,
        fontWeight:'bold',
        
    }

  });

export default Home;
