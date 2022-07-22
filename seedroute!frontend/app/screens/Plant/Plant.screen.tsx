import React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
interface homeScreenProps {
  navigation: any;
}
const Plant = (props: homeScreenProps) => {

  return (
    <ScrollView>
      <View >
        <Image source={require("../../../assets/images/potato.jpg")} style={styles.img}/>
        <Text style={styles.plant_name}>Potato</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    img:{
        maxWidth:250,
        maxHeight:250,
        resizeMode:'contain',
        alignSelf:'center',
        borderRadius:6,
        marginTop:40
    },
    plant_name:{
        textAlign:'center',
        margin:20,
        fontSize:32,
        fontWeight:'bold'
    }
})
export default Plant;