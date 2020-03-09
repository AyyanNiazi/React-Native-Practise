
import React,{Component} from 'react';
import { Container, CardItem, } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SafeAreaView,
  StyleSheet,
  // ScrollView,
  Image,
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
         <Container>
        <Text> My component</Text>
          <CardItem cardBody>
              <Image source={{uri: './apple.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
          
         </Container>
       
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
        flex:10
       
    },
   del:{
     justifyContent:'flex-end',
     paddingLeft:90,
     color:'red',
    //  cursor: 'pointer'
   },
    
    
});

export default MyComponent;
