import React, { Component, useState, useEffect } from "react"
import { View, Button, Image, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity, Alert } from "react-native"

class Listmessages extends Component {
    render(){
        const chatMessages = this.state.chatMessages.map(chatMessage =>{
            //<Text key = {chatMessage}>{chatMessage}</Text>
        return(
            <Text key = {chatMessage}>{this.props.chatMessage}</Text>);
        });
    }
}
export default Listmessages;