import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> ListItem </Text>
      </View>
    );
  }
}
