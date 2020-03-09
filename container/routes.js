import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyComponent from "../myComponent";
import Login from "../login";
import Header from '../header'

class Routes extends Component{
    render(){
        const Stack = createStackNavigator();
        return(
           
            <NavigationContainer>
            <Header/>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={MyComponent} />
              <Stack.Screen name="Login"  component={Login} />
            </Stack.Navigator>
          </NavigationContainer>
        )
    }
}

export default Routes