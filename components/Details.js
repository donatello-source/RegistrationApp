import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import ListItem from './ListItem';

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    const data=[
        { 
            username: 'aaa' ,
            password: 'aaa'
        },
        { 
            username: 'bbb' ,
            password: 'bbb'
        },
        { 
            username: 'ccc' ,
            password: 'ccc'
        },
    ]
  }
  
  render() {
    return (
        <FlatList
            renderItem={({ item }) => <Text>{item.username}</Text>}
        />
    );
  }
}
