import React, { Component, useState, useEffect } from "react"
//import React, { useEffect } from "react";
import { View, Button, Image, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity, Alert } from "react-native"
const io = require('socket.io-client');
//const socket = io("http://192.168.1.7:3000");
const socket = io("http://localhost:19006");
//import io from "socket.io-client";
import image from '../assets/logo.png';
import firebase from '../database/firebase';
import {signingup} from "../components/proceduresdb";
import { AuthContext } from "../components/context";
import { State } from "react-native-gesture-handler";
import { set } from "mongoose";
import Listmessages from "./Users/messages";
//import socket from "../backend/middleware/socket";

const Chats = (props) => {
    const [state, setState] = useState({
      chatMessage: "",
      chatMessages: []
    });
    const handleChangeText = (name, value) => {
        setState({ ...state, [name]: value})
    };
    //useEffect(() => {
    //    socket = io("http://192.168.1.7:3000") 
    //});
    /*
    useEffect(() => {
        socket.on("chat message", msg => {
        setState({ chatMessages: [ ...state.chatMessages, msg]})
        console.log(state.chatMessages);
      })
    });*/
    
    const submitChatMessage = () => {
        socket.emit("chat message", state.chatMessage);
        console.log(state.chatMessage);
        //useEffect();
        state.chatMessages = [...state.chatMessages, state.chatMessage];
        console.log(state.chatMessages);
        handleChangeText("chatMessage", "");
    }
    const chatMessages = () =>{
      state.chatMessages.map(chatMessage =>{
      return (<Text key = {chatMessage}>{chatMessage}</Text>)
      });
    }
    const saving = () => {
      submitChatMessage();
      chatMessages();
    }
    /*
    const componentDidMount = () => {
        const socket = io("http://192.168.1.7:3000")
    }*/
    //const chatMessages = state.chatMessages.map(chatMessage =>{
    //  <Text key = {chatMessage}>{chatMessage}</Text>
    //});
    
        return (
            <View style = {styles.container}>
                <TextInput
                style = {styles.background}
                value = {state.chatMessage}
                autoCorrect = {false}
                onSubmitEditing = {() => submitChatMessage()}
                onChangeText = {(value) => handleChangeText('chatMessage', value)}
                />
                <TouchableOpacity
                onPress = { () => saving () }
                style={styles.button}
                >
                    <Text style= {styles.buttonText}>Sign Up!</Text>
                </TouchableOpacity>
                <Listmessages/>
            </View>
        );
}

const styles = StyleSheet.create({
    container: { 
      flex: 1,
      padding: 35 
      //justifyContent: "center", 
      //alignItems: "center", 
      //backgroundColor: "#00ffff" 
      //backgroundColor: "#2f4f4f"
    },
    title: {
      fontSize: 30,
      color: "#2f4f4f"
      //color: "#fffaf0"
    },
    image: {
      height: 140, 
      width: 200,
      resizeMode: "contain"
      //borderRadius: 100
    },
    background: {
        height: 40, 
        borderWidth: 2,
        //resizeMode: "contain"
        //borderRadius: 100
      },
    center: {
      justifyContent: "center", 
      alignItems: "center"
    },
    button:{
      backgroundColor: "#01579b",
      padding: 7,
      marginTop: 10,
      justifyContent: "center", 
      alignItems: "center"
    },
    buttonText:{
      color: "white",
      fontSize: 20
    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#CCCCCC"
    }
  })
  export default Chats;