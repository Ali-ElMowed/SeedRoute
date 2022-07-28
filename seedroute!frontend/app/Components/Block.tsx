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
  id: number;
  // onPress: () => void;
}

export default function Block(props: BlockProps) {

  const [blockStyles, SetBlockStyles] : any = useState(styles.block)

  const blockStyle = () =>{
    if(blockStyles === styles.block){
      SetBlockStyles(styles.block1)
    }else{
      SetBlockStyles(styles.block)

    }
  }
  
  return <Pressable style={blockStyles} key={props.id} onPress={blockStyle}></Pressable>;
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
