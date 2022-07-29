import React, { useState } from "react";
import { View, ScrollView, TextInput,StyleSheet,Image } from "react-native";
import { useDispatch } from "react-redux";
import { register } from "../../Api/auth";
import Btn from "../../Components/Btn";
import { set } from "../../redux/slices/user";


interface RegisterScreenProps {
    navigation: any;
  }
  
  const Register = (props: RegisterScreenProps) => {
  
    // const goSketch = () => props.navigation.navigate("Sketch");
    const [fname, setFname] = useState("test");
    const [lname, setLname] = useState("test");
    const [email, setEmail] = useState("test@gmail.com");
    const [password, setPassword] = useState("12345678");
    const [verifyPassword, setVerifyPassword] = useState("12345678");

    const dispatch = useDispatch()


    const handleRegister = async () => {
      try {

          const res = await register(fname+""+lname, email, password,verifyPassword);      
          console.log(res);
              
          dispatch(set(res?.data))
          localStorage.setItem("user", JSON.stringify(res?.data))
          props.navigation.navigate("Sketch")
          
      } catch (error) {
          console.log(error);
      }

  };
  
    return (
      <ScrollView style={styles.main}>
        <View style={styles.container}>
        <Image source={require("../../../assets/images/app-icon.jpg")} style={styles.img} />
        <TextInput
          onChangeText={setFname}
          value={fname}
          placeholder={"First Name"}
          style={[styles.passwordInput,styles.input]}
          />
        <TextInput
          onChangeText={setLname}
          value={lname}
          placeholder={"Last Name"}
          style={[styles.passwordInput,styles.input]}
        />
        <TextInput
         onChangeText={setEmail}
         value={email}
         placeholder={"Email"}
         style={[styles.passwordInput,styles.input]}
         />
        <TextInput
         textContentType="password"
         onChangeText={setPassword}
         secureTextEntry
         value={password}
         placeholder={"Password"}
         style={[styles.passwordInput,styles.input]}
         />
        <TextInput
         textContentType="password"
         onChangeText={setVerifyPassword}
         value={verifyPassword}
         secureTextEntry
         placeholder={"Verify Password"}
         style={[styles.passwordInput,styles.input]}
         />
         <Btn 
         onPress={handleRegister}
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
        marginTop:50,
        marginBottom:50
      },
      input:{
        width:300,
        paddingLeft:20
      },
      // nameinput:{
      //   marginLeft:5,
      //   marginRight:5,
      //   width:145
      // },
      btn:{
        backgroundColor: '#0D9B81',
        borderColor: 'white',
        borderWidth:2,
        marginLeft:100,
        marginRight:100,
        color: '#0D9B81',
        width: 300
      }

  })
  
  export default Register;
  