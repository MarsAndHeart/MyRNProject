/**
 * Created by jianghai on 2017/12/2.
 */
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Mike' />
        <Greeting name='Jane' />
        <Greeting name='Maria' />
      </View>
    );
  }
}

export default LotsOfGreetings