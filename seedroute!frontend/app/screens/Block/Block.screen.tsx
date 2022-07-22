import React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import Btn from "../../Components/Btn";
interface homeScreenProps {
  navigation: any;
}
const Block = (props: homeScreenProps) => {

  return (
    <ScrollView>
      <View >
        <Btn text="watering" onPress={goToWatering}/>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({

})
export default Block;