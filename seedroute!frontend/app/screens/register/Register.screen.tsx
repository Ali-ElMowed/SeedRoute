import React, { useState } from "react";
import { Button, Text, View, ScrollView, TextInput,StyleSheet,Image } from "react-native";
import Btn from "../../Components/Btn";

interface RegisterScreenProps {
    navigation: any;
  }
  
  const Register = (props: RegisterScreenProps) => {
  
    const goSketch = () => props.navigation.navigate("Sketch");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verifyPassword, setVerifyPassword] = useState("");
  
    return (
      <ScrollView style={styles.main}>
        <View style={styles.container}>
        <Image source={require("../../../assets/images/app-icon.jpg")} style={styles.img} />
        <View style={styles.name}>
        <TextInput
          onChangeText={setFname}
          value={fname}
          placeholder={"First Name"}
          style={[styles.passwordInput,styles.nameinput]}
          />
        <TextInput
          onChangeText={setLname}
          value={lname}
          placeholder={"Last Name"}
          style={[styles.passwordInput,styles.nameinput]}
        />
        </View>
        <TextInput
         onChangeText={setEmail}
         value={email}
         placeholder={"Email"}
         style={[styles.passwordInput,styles.input]}
         />
        <TextInput
         textContentType="password"
         onChangeText={setPassword}
         value={password}
         placeholder={"Password"}
         style={[styles.passwordInput,styles.input]}
         />
        <TextInput
         textContentType="password"
         onChangeText={setVerifyPassword}
         value={verifyPassword}
         placeholder={"Verify Password"}
         style={[styles.passwordInput,styles.input]}
         />
         <Btn 
         onPress={goSketch}
         text={"Register"}
         style={styles.btn}/>
         </View>
      </ScrollView>
    );

  };
  const styles = StyleSheet.create({
    main:{
        backgroundColor: '#0D9B81'
    },
    emailInput:{

    },
    passwordInput:{
        margin: 30,
        marginTop:0,
        marginBottom:10,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 6,
        padding:5,
        backgroundColor: 'white'
      },
    container:{
       alignItems:'center',
       
       
    },
    name:{
        flexDirection:"row"
    },
    img:{
        width:200,
        height:200,
        margin:100,
        marginTop:50
      },
      input:{
        width:300
      },
      nameinput:{
        marginLeft:5,
        marginRight:5,
        width:145
      },
      btn:{
        backgroundColor: '#0D9B81',
        borderColor: 'white',
        borderWidth:2,
        marginLeft:100,
        marginRight:100,
        color: '#0D9B81'
      }

  })
  
  export default Register;
  