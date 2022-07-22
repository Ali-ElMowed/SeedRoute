import React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import Btn from "../../Components/Btn";
interface homeScreenProps {
  navigation: any;
}
const Block = (props: homeScreenProps) => {
const goToWatering = () => props.navigation.navigate('Watering')
  return (
    <ScrollView>
      <View >
        <Btn text="watering" onPress={goToWatering} style={styles.btn}/>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
btn:{
    marginTop:30,
    width:200,
    alignSelf:'center',
}
})
export default Block;