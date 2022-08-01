import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { set } from "../../redux/slices/user";
import { login } from "../../Api/auth"
import { Text, Image, TextInput, StyleSheet,ScrollView,Pressable } from "react-native";
import Btn from "../../Components/Btn";
// import AsyncStorage from 'react-native';
import 'localstorage-polyfill'; 
import Loading from "../../Components/Loading";
import AsyncStorage from "@react-native-async-storage/async-storage";


interface loginScreenProps {
  navigation: any;

}

const LoginScreen = (props: loginScreenProps) => {
  const goToRegister = () => props.navigation.navigate("Register");

  
  const [loading,setLoading] = useState(false)

  const [email, setEmail] = useState("alimowed@gmail.com");
  const [password, setPassword] = useState("12345678");
  const dispatch = useDispatch()
  const handleLogin = async () => {
      try {
          setLoading(true)
          const res = await login(email, password);
          dispatch( set(res?.data))
          // await localStorage.setItem("user", JSON.stringify(res?.data))
          const user = await AsyncStorage.setItem('user',JSON.stringify(res?.data))

          if(res?.status === 200){
            props.navigation.navigate("Home")
          }
      } catch (error) {
          console.log(error );
          alert('Uncorrect Email or Password')
      } finally{
          setLoading(false)
      }

  };

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
        secureTextEntry
      />
     {
      loading && <Loading/>
     }   
      <Btn
        onPress={handleLogin}
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
     backgroundColor: 'white',
     paddingLeft:20
     
  },
  passwordInput:{
    margin: 30,
    marginTop:0,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 6,
    padding:5,
    backgroundColor: 'white',
    paddingLeft:20

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
