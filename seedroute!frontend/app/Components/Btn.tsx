import React from "react";
import { Text, View, StyleSheet, Pressable, Image, StyleProp } from "react-native";

interface ButtonProps {
  text: string;
  style: StyleProp<any>
}
export default function Btn(props: ButtonProps) {
  //   const { onPress, title = 'Save' } = props;
  // const title = "Press"
  // const onPress = "Save"
  return (
    <View>
      
      <Pressable style={[styles.button, props.style]} onPress={props.onPress} >
        <Text style={styles.text}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#0D9B81",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
     color: "white",
  },
  img: {
    width: 300,
    height: 300
  }
});
