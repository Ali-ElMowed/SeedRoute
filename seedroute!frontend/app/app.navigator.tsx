import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from "./screens/login/login.screen";
import Home from "./screens/home/home.screen"
import MylandScreen from './screens/Myland/Myland.screen';


const { Navigator,Screen} = createNativeStackNavigator();

const AppNavigator = () =>(
    <NavigationContainer>
        <Navigator initialRouteName='login'  
        screenOptions={{
        headerStyle: {
          backgroundColor: '#0D9B81',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      >
            <Screen name="Login" component={LoginScreen}></Screen>
            <Screen name="Home" component={Home}></Screen> 
             <Screen name="MyLand" component={MylandScreen} options={{title:"My Land"}}></Screen>
 
        </Navigator>
    </NavigationContainer>
)

export default AppNavigator