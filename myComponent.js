
import React,{Component} from 'react';
// import { Container, Header, Content, Left, Body, Right,Icon,Title,Form,ListItem, Item, Input ,Button,Text} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SafeAreaView,
  StyleSheet,
  // ScrollView,
  View,
  Text,
  Button,
  // StatusBar,
} from 'react-native';
import {  Link } from "react-router-native";
// import { Actions } from 'react-native-router-flux';


// import MyComponent from './myComponent'
class MyComponent extends Component{
constructor(props){
  super(props);
  this.state={
    data:'',
    todo:[],
    ind:'',
    // current:'',
    edit:false,
    navigation:props.navigation
  }
}
    
componentDidMount(){
  
}
    
      // filtered[this.state.ind]=this.state.current
    // }
    render  (props){
      console.log('meri props',this.props)
        return (
        <>
         <View>
          {/* <Text> */}
          <Button
        title="Go to Login"
        onPress={() => this.state.navigation.navigate('Login')}
      />
             {/* </Text> */}
         </View>
       
        </>
        )
    }
};

const styles = StyleSheet.create({
    container:{
        // display: 'flex',
        // justifyContent: 'space-between',
        // justifyContent:'center',
        // alignItems:'center',
        // flexDirection: 'row',
        marginTop: 20,
        flex:1
       
    },
   del:{
     justifyContent:'flex-end',
     paddingLeft:90,
     color:'red',
    //  cursor: 'pointer'
   },
    
    
});

export default MyComponent;
