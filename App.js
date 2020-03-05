
import React from 'react';
import { Container, Header, Content, Form, Item, Input } from 'native-base';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

import MyComponent from './myComponent'
const App: () => React$Node = () => {
  return (
    <>
         <MyComponent/>
    </>
  );
};

const styles = StyleSheet.create({
  container:{
      // display: 'flex',
      // justifyContent: 'space-between',
      justifyContent:'space-between',
      alignItems: 'stretch',
      flexDirection: 'column',
      // marginTop: 20,
      flex:1
     
  },
  upperText:{
    marginTop:5,
    color: 'red',

  }
  
});

export default App;
