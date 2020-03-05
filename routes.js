import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import MyComponent from "./myComponent";
import Login from "./login";

class Routes extends Component{
    render(){
        return(
            <NativeRouter>
                <Route exact path='/' component={MyComponent} />
                <Route  path='/login' component={Login} />
            </NativeRouter>
        )
    }
}

export default Routes