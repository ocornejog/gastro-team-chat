import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import {Text, View, StyleSheet, ActivityIndicator} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { DrawerContent } from "./screens/DrawerContent";
import UserList from "./screens/UserList";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import Chats from "./screens/ChatScreen";
import RootScreen from "./screens/RootScreen";
import { AuthContext } from "./components/context";

const Drawer = createDrawerNavigator()

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center" 
    //backgroundColor: "#00ffff" 
    //backgroundColor: "#2f4f4f"
  }
})
const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);
  /*const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };*/
  /*const loginReducer = (prevState, action) => {
    switch(action.type){
      case 'RETRIEVE_TOKEN':
        return {
          ... prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ... prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ... prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ... prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };*/

  //const [ loginState, dispatch ] = React.useReducer(loginReducer, initialLoginState);
  
  const authContext = React.useMemo(() => ({
    signIn: (userName, password) => {
      setUserToken('asdf');
      setIsLoading(false);

    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken('asdf');
      setIsLoading(false);
    },
    chats: () => {
      setUserToken('asdf');
      setIsLoading(false);
    },

  }));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  if (isLoading) {
    return(
      <View style={styles.container}>
        <ActivityIndicator size = "large"/>
      </View>
    );
  }
  return(
    <AuthContext.Provider value = { authContext }>
        <NavigationContainer>
          { userToken != null ? (
            <Drawer.Navigator drawerContent= {props => <DrawerContent {...props} />}>
            <Drawer.Screen name = "UserList" component = { UserList }/>
            <Drawer.Screen name = "SignIn" component = { SignIn }/>
            <Drawer.Screen name = "SignUp" component = { SignUp }/>
            <Drawer.Screen name = "Chats" component = { Chats }/>
            </Drawer.Navigator>
          )
          :
          <RootScreen/>
          }
        </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;

