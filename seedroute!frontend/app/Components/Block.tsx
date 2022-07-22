import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Image,
  StyleProp,
} from "react-native";

interface BlockProps {
  navigation: any;
  id: number;
  onPress: () => void;
}

export default function Block(props: BlockProps) {

  
  return <Pressable style={styles.block} key={props.id} onPress={props.onPress}></Pressable>;
}

const styles = StyleSheet.create({
  block: {
    width: 70,
    height: 70,
    backgroundColor: "#7DDCCA",
    margin: 6,
    borderRadius: 5,
    borderWidth:1,
    borderColor:'#ffff'
  },
});
