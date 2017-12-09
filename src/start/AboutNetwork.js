/**
 * Created by jianghai on 2017/12/9.
 */
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class AboutNetwork extends Component {
  constructor(props){
    super(props)
    this.state={
      customerList:[],
    }
  }
  componentDidMount(){
    var body = {
      agentcode:'001'
    }
    const that = this

    fetch("http://localhost:3000/customerList", {
      method: "POST",
      body: JSON.stringify(body),
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log(data);
      that.setState({
        customerList:data.result
      })
    }).catch(function (e) {
      console.log(e);
    });
  }
  render() {
    return (
      <View>
        <Text>about network</Text>
        {
          this.state.customerList.map((item,i)=>(
            <View key={i} style={{margin:10}}>
              <Text>name:{item.name}</Text>
              <Text>age:{item.age}</Text>
              <Text>nation:{item.nation}</Text>
            </View>
          ))
        }
      </View>
    );
  }
}

export default AboutNetwork