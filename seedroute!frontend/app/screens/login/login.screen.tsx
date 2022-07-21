import React, { useState } from "react";
import { Button, Text, View, Image, TextInput, StyleSheet,ScrollView,Pressable } from "react-native";
import Btn from "../../Components/Btn";


interface loginScreenProps {
  navigation: any;

}

const LoginScreen = (props: loginScreenProps) => {
  const goMyLand = () => props.navigation.navigate("MyLand");
  const goToRegister = () => props.navigation.navigate("Register");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ScrollView style={styles.view}>
      <Image source={require("../../../assets/images/app-icon.jpg")} style={styles.img} />
      <TextInput
        onChangeText={setEmail}
        value={email}
        placeholder={"Enter your email"}
        style={styles.emailInput}
      />

      <TextInput
        onChangeText={setPassword}
        value={password}
        placeholder={"Enter your password"}
        style={styles.passwordInput}
      />
        
      <Btn
        // title='Login'
        //  onPress={goHome}
        onPress={goMyLand}
        text={"Login"}
        style={styles.btn}
      />
      <Pressable onPress={goToRegister}>
        <Text style={styles.registerBtn}>You're not a member yet? Register</Text>
      </Pressable>
    </ScrollView>
  );

};
const styles = StyleSheet.create ({
  emailInput:{
    margin: 30,
     marginTop: 0,
     borderWidth: 2,
     borderColor: 'white',
     borderRadius: 6,
     padding:5,
     backgroundColor: 'white'
     
  },
  passwordInput:{
    margin: 30,
    marginTop:0,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 6,
    padding:5,
    backgroundColor: 'white'
  },
  view:{
    backgroundColor: '#0D9B81'
  },
  btn:{
    backgroundColor: '#0D9B81',
    borderColor: 'white',
    borderWidth:2,
    marginLeft:100,
    marginRight:100,
    color: '#0D9B81'
  },
  img:{
    width:200,
    height:200,
    margin:100,
    marginTop:50
  },
  registerBtn:{
    alignSelf:'center',
    marginTop:15,
    color:'white',
    fontSize:16,
    textDecorationLine:'underline'
  }
})

export default LoginScreen;
