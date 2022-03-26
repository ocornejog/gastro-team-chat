import React from "react";
import { createSharedElementStackNavigator, SharedElement } from "react-navigation-shared-element";
import { createStackNavigator } from "@react-navigation/stack";
// User Components
import UserChat from "./UserChat";
import UserList from "./UserList";
import Message from "./messages/Message";

export type UserRoutes = {
    UserList: undefined;
    UserChat: undefined;
    Message: undefined;
};
export const UserStack =  createStackNavigator <UserRoutes>();
    /*createSharedElementStackNavigator(
    {
        UserList: "UserList",
        UserChat: "UserChat",
        Message: "Message", 
      },
      {
        initialRouteName: 'List',
      }
    );*/
    /*
    createSharedElementStackNavigator {
        UserList: undefined,
        UserChat: undefined,
        Message: undefined; 
    }*/
;

export const UserNavigator = () => {
    <UserStack.Navigator>
        <UserStack.Screen 
        name = "UserList" 
        options ={{
            headerShown: false,
        }}
        component={UserList}
        />
        <UserStack.Screen 
        name = "UserChat" 
        options ={{
            headerShown: false,
        }}
        component={UserChat}
        />
        <UserStack.Screen
        name = "Message"
        options ={{
            headerShown: false,
        }}
        component = {Message}
        />
    </UserStack.Navigator>
}