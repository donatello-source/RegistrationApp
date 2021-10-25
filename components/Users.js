import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MyButton from './MyButton';

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <MyButton text={"Jebac disa"} function={() => this.props.navigation.navigate("s1")}/>
    );
  }
}
