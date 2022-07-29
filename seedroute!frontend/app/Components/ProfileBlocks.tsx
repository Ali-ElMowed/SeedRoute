import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Image,
  StyleProp,
} from "react-native";

interface BlockProps {
  name: number
  value: number
  onPress: () => void
}

export default function ProfileBlocks(props: BlockProps) {
  const [blockStyles, SetBlockStyles]: any = useState(styles.block);


  return (
    <Pressable
      style={props.value==0?styles.block:styles.block1}
      onPress={props.onPress}
    />
  );
}

const styles = StyleSheet.create({
  block: {
    width: 70,
    height: 70,
    backgroundColor: "#7DDCCA",
    margin: 6,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ffff",
    opacity:0.3
  },
  block1: {
    width: 70,
    height: 70,
    backgroundColor: "#7DDCCA",
    margin: 6,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ffff",
  },
});
