import React, { useState } from "react"
import { View, Button, Image, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity } from "react-native"
import image from '../assets/logo.png';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from "../components/context";
//import firebase from "firebase"
//import 'Firebase/Firestore';
//import 'Firebase/Auth';
import 'firebase/auth';
//import * as firebase from "firebase"
import firebase from '../database/firebase';
import { loggingIn } from "../components/proceduresdb";
import FontStyles from "../components/mainTextFormats";
//import auth from '@react-native-firebase/auth';

const SignIn = ({navigation}) => {
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
      await loggingIn(state.email, state.password);
      setTimeout(()=>{
        console.log(global.isAcorrectLogin);
        if (global.isAcorrectLogin === true)
        {
          signIn();
        }
        else{
          signOut();
        }
    },2000);

    };
    const validateUser = async () => {
      global.isAcorrectLogin = true;
      if (state.email === ''){
          alert('Please type your email that is your Username');
      }
      if (state.email === ''){

      }
      if (state.password === ''){
          alert('Please type your password');
      }
      if(state.password.length < 4){
          alert('Password must be at least 4 characters');
      }
      if(state.email === '' || state.password === '' || state.password.length < 4 ) {
           return;
       }
      else{
        verify();
        /*
        try{
        loggingIn(state.email, state.password);
        //await console.log(global.isAcorrectLogin)
        //console.log(isAcorrectLogin);
        //signIn();
        }
        catch(error){
          console.log(error);
        //  signIn();
        }
        if (global.isAcorrectLogin === true)
        {
          signIn();
        }
        else{
          signOut();
        }
        console.log(global.isAcorrectLogin);
        */
        //if (val = false){
        //  signOut();
        //}
        //else{
        //  signIn();
       //}
        //signIn();
        //loggingIn("jperez@gmail.com", "ghujghh");
      }
    };
    /*
    const validator = () => {
      const { email, password } = state;
      //try{
        const evaluation = firebase.firebase.auth().signInWithEmailAndPassword(email, password)
        //const logged = evaluation.then
        signIn();
        //navigation.navigate("User");
        //} catch(error) => {
        //  console.log(error);
        //  signOut();
        //}
    };*/
  
    return(
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.center}>
                <Image
                    source = {image}
                    style={styles.image}
                />
            </TouchableOpacity>
            <View style={styles.inputGroup}>
                <Ionicons name="md-person-circle" size={32} color="#2e7d32" />
                <TextInput
                autoCapitalize='none' 
                placeholder = "Username or email"
                onChangeText = {(value) => handleChangeText('email', value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <Ionicons name="md-lock-closed" size={32} color="#2e7d32" />
                <TextInput
                autoCapitalize='none'
                secureTextEntry = {true} 
                placeholder = "Password"
                onChangeText = {(value) => handleChangeText('password', value)}
                />
            </View>
            <View>
                <TouchableOpacity
                onPress = { () => validateUser() }
                style={styles.button}
                >
                    <Text style= {styles.buttonText}>Sign In!</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                onPress = { () => validateUser() }
                style={styles.button}
                >
                    <Text style= { FontStyles.heading0 }>Sign Inin!</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                onPress={()=> navigation.navigate("SignUp")}
                style={styles.button2}
                >
                    <Text style= {styles.buttonText2}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                onPress = { () => navigation.navigate("Chats") }
                style={styles.button2}
                >
                    <Text style= {styles.buttonText2}>Forgot Password?</Text>
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
    button2:{
      padding: 7,
      marginTop: 10,
      justifyContent: "center", 
      alignItems: "center"
    },
    buttonText:{
      color: "white",
      fontSize: 20
    },
    buttonText2:{
      color: "#01579b",
      fontSize: 17
    },
    inputGroup: {
        flex: 1,
        flexDirection: 'row',
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#CCCCCC"
    }
  })
export default SignIn;