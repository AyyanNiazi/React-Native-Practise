
import React,{Component} from 'react';
import { Container, Header, Left, Body, Right, Button, Title, Text } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SafeAreaView,
  StyleSheet,
  // ScrollView,
  View,
//   Text,
//   Button,
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
            <Container>
            <Header>
              <Left>
                <Button hasText transparent>
                  <Text>adbjabsd </Text>
                </Button>
              </Left>
              <Body>
                <Title>Investify Stocks</Title>
              </Body>
              <Right>
                <Button hasText transparent>
                  <Text>Cancel</Text>
                </Button>
              </Right>

            <View style={syles.bottomCont} > 
                <Text> Today </Text>
                <Text> Market  </Text>
                <Text> Stocks </Text>
                <Text> Watch List  </Text>
                <Text> Portfolio  </Text>
            </View>
            </Header>
          </Container>
        )
    }
};

const styles = StyleSheet.create({
    bottomCont:{
        // display: 'flex',
        // justifyContent: 'space-between',
        // justifyContent:'center',
        // alignItems:'center',
        // flexDirection: 'row',
        marginTop: 20,
        flex:1,
        display:'flex',
        justifyContent: 'space-around',
        
       
    },
   del:{
     justifyContent:'flex-end',
     paddingLeft:90,
     color:'red',
    //  cursor: 'pointer'
   },
    
    
});

export default MyComponent;
