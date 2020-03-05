
import React,{Component} from 'react';
import { Container, Header, Content, Left, Body, Right,Icon,Title,Form,ListItem, Item, Input ,Button,Text} from 'native-base';
import {
  SafeAreaView,
  StyleSheet,
  // ScrollView,
  // View,
  // Text,
  // StatusBar,
} from 'react-native';
import {  Link } from "react-router-native";


// import MyComponent from './myComponent'
class MyComponent extends Component{

    state={
      data:'',
      todo:[],
      ind:'',
      // current:'',
      edit:false
    }

    
      // filtered[this.state.ind]=this.state.current
    // }
    render  (){
      console.log(this.state.todo)
        return (
        <>
          <Container>
          <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Todo List </Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
          <Content>
            <Link to='/login' >Login</Link>
          </Content>


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
