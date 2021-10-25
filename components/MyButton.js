import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


export default class MyButton extends React.Component{
    constructor(props) {
        super(props)
        this.props = props
    }
render(){
    return(
        <TouchableOpacity style={{flex:1}} onPress={() => this.props.function()}>
            <View>
                <Text style={{fontWeight: 'bold'}}>{this.props.text}</Text>
            </View>
        </TouchableOpacity>
    )
 }
}

MyButton.propTypes = {
    text: PropTypes.string.isRequired,
    function: PropTypes.func.isRequired,
};