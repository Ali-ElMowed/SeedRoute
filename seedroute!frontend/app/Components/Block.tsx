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
  id: number;
}

export default function Block(props: BlockProps) {
  return <View style={styles.block} key={props.id}></View>;
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
