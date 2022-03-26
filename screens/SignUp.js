import React, { useState } from "react"
//import React, { useEffect } from "react";
import { View, Button, Image, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity, Alert } from "react-native"
import image from '../assets/logo.png';
import firebase from '../database/firebase';
import {signingup} from "../components/proceduresdb";
import { AuthContext } from "../components/context";

const SignUp = (props) => {
    const [state, setState] = useState({
        first_name: '',
        last_name: '',
        hospital: '',
        service: '',
        email:'',
        password:'',
        confirm_password:'',
        _id: ''
    });
    const { signIn, signOut } = React.useContext(AuthContext);
    const handleChangeText = (name, value) => {
        setState({ ...state, [name]: value})
    };
    const verify = async () => {
        await signingup(state.email, state.password);
        setTimeout(()=>{
          console.log(global.isAcorrectSignUp);
          if ( global.isAcorrectSignUp === true)
          {  
            props.navigation.navigate('SignIn');
          }
          else{
            return;
          }
      },2000);
    };
    const addNewUser = async () => {
        global.isAcorrectSignUp === true
        if (state.first_name === ''){
            alert('Please provide a first name'); 
        }
        if (state.last_name === ''){
            alert('Please provide a last name');
        }
        if (state.service === ''){
            alert('Please provide a hospital');
        }
        if (state.hospital === ''){
            alert('Please provide a service');
        }
        if (state.email === ''){
            alert('Please provide an email');
        }
        if (state.password === ''){
            alert('Please provide a password');
        }
        if (state.confirm_password === ''){
            alert('Please confirm your password');
        }
        if(state.password.length < 4){
            alert('Password must be at least 4 characters');
        }
        else if(state.password != state.confirm_password){
            alert('Passwords do not match');
        }
        if(state.first_name === '' || state.last_name === '' || state.service === '' || 
        state.hospital === '' || state.email === '' || state.password === '' ||
         state.confirm_password === '' || state.password.length < 4 || state.password != state.confirm_password ) {
             return;
         }
        else{
            try{
                
            await firebase.db.collection('users').add({
                first_name: state.first_name,
                last_name: state.last_name,
                hospital: state.hospital,
                service: state.service,
                email: state.email,
                password: state.password,
                confirm_password: state.confirm_password
            })
            verify();
            //alert('Saved!');
            //props.navigation.navigate('SignIn');
            } catch (error){
                console.log(error);
            }
        }
    };
    
    return(
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.center}>
                <Image
                    source = {image}
                    style={styles.image}
                />
            </TouchableOpacity>
            <View style={styles.inputGroup}>
                <TextInput 
                placeholder = "First Name" 
                onChangeText = {(value) => handleChangeText('first_name', value)} 
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput 
                placeholder = "Last Name"
                onChangeText = {(value) => handleChangeText('last_name', value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput 
                placeholder = "Hospital"
                onChangeText = {(value) => handleChangeText('hospital', value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput 
                placeholder = "Service"
                onChangeText = {(value) => handleChangeText('service', value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput
                autoCapitalize='none' 
                placeholder = "Email"
                onChangeText = {(value) => handleChangeText('email', value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput
                autoCapitalize='none'
                secureTextEntry = {true} 
                placeholder = "Password"
                onChangeText = {(value) => handleChangeText('password', value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput
                autoCapitalize='none'
                secureTextEntry = {true} 
                placeholder = "Repeat your password"
                onChangeText = {(value) => handleChangeText('confirm_password', value)}
                />
            </View>
            <View>
                <TouchableOpacity
                onPress = { () => addNewUser () }
                style={styles.button}
                >
                    <Text style= {styles.buttonText}>Sign Up!</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
};
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
export default SignUp;