
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


// import Login from './Login'
class Login extends Component{

    state={
      data:'',
      todo:[],
      ind:'',
      // current:'',
      edit:false
    }

    add(){
      let arr = this.state.todo;
      let filtered = arr.filter(e => {
        return e === this.state.data
      })
      if(filtered.length==0 && this.state.data!=='' ){
        arr.push(this.state.data)

        this.setState({todo:arr,data:''})
      }
    //   if(this.state.todo==[])
    //   console.log(arr)
    }
    del(ind){
      let filtered = this.state.todo;
      console.log(filtered)
      filtered.splice(ind,1);
      this.setState({
        todo:filtered
      })    
    }

    edit(ind){
      this.setState({
        ind,
        current:this.state.todo[ind],
        edit:true
      })
      // let filtered = this.state.todo
    }
    kro(){
      let filtered = this.state.todo;
      filtered[this.state.ind] = this.state.current
      this.setState({
        todo:filtered,
        edit:false,
        ind:''
      })
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
            <Form>
              <Item>
                <Input placeholder="Username"value={this.state.ind===''? this.state.data: this.state.current} 
                 onChangeText={(e) => {  
                   this.state.ind===''?
                   this.setState({data:e })
                   : this.setState({current:e })
                  }} />
              </Item>
              <Item last>
                <Input placeholder="Password" />
              </Item>
              <Item>
                {this.state.edit===false?
                <Button onPress={this.add.bind(this)} light><Text> Submit </Text></Button>
                :
                <Button onPress={this.kro.bind(this)} danger><Text> Edit </Text></Button>
                }
              </Item>

            </Form>

              {!this.state.todo? <p>Loding...</p> :this.state.todo.map((item,index)  =>{
                return (
            <ListItem>
                  <Text>  {item}  </Text>
                  <Text style={styles.del} onPress={this.del.bind(this,index)}>  X  </Text> 
                  <Text style={styles.del} onPress={this.edit.bind(this,index)}>  Edit  </Text> 
            </ListItem>
                )
              })  }
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

export default Login;
