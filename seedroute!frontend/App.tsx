
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./app/screens/login/login.screen";
import AppNavigator from './app/Navigations/app.navigator';

export default function App() {

  return (
     <AppNavigator/>
  );
}

