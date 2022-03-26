import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import {Text, View, StyleSheet, ActivityIndicator} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import UserList from "./UserList";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Chats from "./ChatScreen";

const Stack = createStackNavigator()

function MyStack(){
  return (
        <Stack.Navigator>
        <Stack.Screen name = "SignIn" component = { SignIn }/>
        <Stack.Screen name = "SignUp" component = { SignUp }/>
        <Stack.Screen name = "UserList" component = { UserList }/>
        <Stack.Screen name = "Chats" component = { Chats }/>
        </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center" 
    //backgroundColor: "#00ffff" 
    //backgroundColor: "#2f4f4f"
  }
})
const RootScreen = ({navigation}) => (
    <MyStack/>
);

export default RootScreen;