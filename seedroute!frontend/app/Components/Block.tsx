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
  onClick:()=>void
}

export default function Block(props: BlockProps) {

  
  return <Pressable style={props.value==0?styles.block:styles.block1} onPress={props.onClick}/>;
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
  block1: {
    width: 70,
    height: 70,
    backgroundColor: "#39F34B",
    margin: 6,
    borderRadius: 5,
    borderWidth:1,
    borderColor:'#ffff'
  },
});
