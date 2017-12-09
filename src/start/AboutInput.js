/**
 * Created by jianghai on 2017/12/2.
 */
import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      submitText: '',
    };
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
          onSubmitEditing={() => {
            this.setState({submitText:this.state.text})
          }}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.submitText.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}

export default PizzaTranslator