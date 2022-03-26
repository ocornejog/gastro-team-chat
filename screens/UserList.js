import React, { useState } from "react";
import {Text, ScrollView, View, StyleSheet, Image, TouchableOpacity,Button, Alert, Platform, ImagePropTypes} from "react-native";
//import image from './assets/logo.png'
import image from '../assets/person.png';
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from '@expo/vector-icons';
import * as Sharing from "expo-sharing";
import { AuthContext } from "../components/context";
import 'firebase/auth';
import {  } from "../components/proceduresdb";
//import uploadToAnonymousFilesAsync from "anonymous-files";
const UserList = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  let openImagePickerAsync = async() => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if(permissionResult.granted === false){
      alert('Permission to access camera is required');
      return;
    }
    const pickerResult = await ImagePicker.launchImageLibraryAsync()
    //console.log(pickerResult)
    if(pickerResult.cancelled === true){
      return;
    }
    if(Platform.OS === 'web') {
      //let remoteUri = await uploadToAnonymousFilesAsync(pickerResult.uri);
      //console.log(remoteUri)
      //return;
      setSelectedImage({localUri: pickerResult.uri});
      //setSelectedImage({localUri: pickerResult.uri, remoteUri: remoteUri});
    } else {
      setSelectedImage({localUri: pickerResult.uri});
    }
  };
  const openShareDialog = async() => {
    if (!(await Sharing.isAvailableAsync())) {
      alert("Sharing functions are not available on your platform");
      //alert(`The image is available for sharing at: ${selectedImage.remoteUri}`);
      return;
    }

    await Sharing.shareAsync(selectedImage.localUri);
  }
  return (
    <View style={styles.container}>
        <Text style={styles.title}>User Information</Text>
      <TouchableOpacity
        onPress={openImagePickerAsync}
        style={styles.center}
      >
        <Image
          //source = {{uri: selectedImage !== null ? selectedImage.localUri} : 'https://picsum.photos/200/200'}}
          source = {selectedImage !== null ? {uri: selectedImage.localUri} : image}
          //source = {image}
          style={styles.image}
        />
      </TouchableOpacity>
        <TouchableOpacity
          onPress={openImagePickerAsync}
          style={styles.button}
        >
          <Text style= {styles.buttonText}>Change your profile image</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={openImagePickerAsync}
          style={styles.button}
        >
          <Text style= {styles.buttonText}>Enter</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    justifyContent: "center", 
    alignItems: "center"
    //padding: 35, 
    //justifyContent: "center", 
    //alignItems: "center", 
    //backgroundColor: "#00ffff" 
    //backgroundColor: "#2f4f4f"
  },
  title: {
    fontSize: 30,
    color: "#2f4f4f",
    justifyContent: "center", 
    alignItems: "center"
    //color: "#fffaf0"
  },
  image: {
    height: 140, 
    width: 200,
    resizeMode: "contain",
    borderRadius: 70
  },
  center: {
    justifyContent: "center", 
    alignItems: "center"
  },
  button:{
    backgroundColor: "#01579b",
    padding: 7,
    marginTop: 8,
    justifyContent: "center", 
    alignItems: "center"
  },
  buttonText:{
    color: "white",
    fontSize: 15
  }
})
//Lo de arriba es como un archivo de CSS

export default UserList;
