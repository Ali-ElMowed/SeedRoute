import React from "react";
import { Text, View, StyleSheet, Image, ScrollView, TextInput } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {faSearch, faSeedling } from '@fortawesome/free-solid-svg-icons'
interface homeScreenProps {
  navigation: any;
}
const Plants = (props: homeScreenProps) => {

  return (
    <ScrollView>
      <View >
      <TextInput placeholder="Search for a Plant"/>
      <FontAwesomeIcon  icon={faSearch} style={styles.icon}/>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  icon:{
    color:'black'
  }
})
export default Plants;