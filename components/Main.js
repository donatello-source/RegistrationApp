import React, { Component } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import MyButton from './MyButton';


export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  handleChangeU(event){
    this.setState({ username: event.target.value})
  }
  handleChangeP(event){
    this.setState({ password: event.target.value})
  }
  handleSubmit(){
    if(this.state.username == "aaa"){
      this.props.navigation.navigate("s2", {a: 1,b: 2})
    }else{
      alert(this.state.username)
      // alert("Wrong username or/and password! Try again")
    }
  }
  render() {
    return (
        <View style={{flex:1}}>
            <View style={{backgroundColor:"#B2EBF2", flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{ fontSize: 40, fontWeight:'bold'}}>Register Node App</Text>
            </View>
            <View style={{margin:3,flex:1, backgroundColor:"#FFFFFF"}}>
            <Text style={{ fontSize: 20}}>Username</Text>
            <TextInput style={{ fontSize: 20}} placeholder="Put your username here!" onChange={this.handleChangeU.bind(this)}></TextInput>
            <Text style={{ fontSize: 20}} >Password</Text>
            <TextInput style={{ fontSize: 20}} secureTextEntry={true} onChange={this.handleChangeP.bind(this)} placeholder="Put your password here!"></TextInput>
            <View style={{flex:1,alignItems: 'center' }}>
            <MyButton 
            text={"Register"} 
            function={() => this.handleSubmit()}/>
            </View>
            </View>
        </View>
    );
  }
}
