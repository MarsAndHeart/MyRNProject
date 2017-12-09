/**
 * Created by jianghai on 2017/12/2.
 */
import React, { Component } from 'react';
import { AppRegistry, View, Dimensions } from 'react-native';

export const screenWidth = Dimensions.get('window').width
const MARGINLEFT = ( screenWidth - 300 )/2

class FlexDirectionBasics extends Component {
  render() {
    return (
      // 在组件的style中指定flexDirection可以决定布局的主轴。
      // 子元素是应该沿着水平轴(row)方向排列，还是沿着竖直轴(column)方向排列呢？
      // 默认值是竖直轴(column)方向。
      <View style={{
        borderWidth: 1,
        width: 300,
        marginLeft: MARGINLEFT,

        flex: 1,
        flexDirection: 'row',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

class JustifyContentBasics extends Component {
  render() {
    return (
      // 在组件的style中指定justifyContent可以决定其子元素沿着主轴的排列方式。
      // 子元素是应该靠近主轴的起始端还是末尾段分布呢？亦或应该均匀分布？
      // 对应的这些可选项有：flex-start、center、flex-end、space-around以及space-between。
      <View style={{
        borderWidth: 1,
        width: 300,
        marginLeft: MARGINLEFT,

        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

class AlignItemsBasics extends Component {
  render() {
    return (
      // 在组件的style中指定alignItems可以决定其子元素沿着次轴（与主轴垂直的轴，比如若主轴方向为row，则次轴方向为column）的排列方式。
      // 子元素是应该靠近次轴的起始端还是末尾段分布呢？亦或应该均匀分布？
      // 对应的这些可选项有：flex-start、center、flex-end 以及 stretch。
      // 注意：要使stretch选项生效的话，子元素在次轴方向上不能有固定的尺寸。
      // 以下面的代码为例：只有将子元素样式中的width: 50去掉之后，alignItems: 'stretch'才能生效。
      <View style={{
        borderWidth: 1,
        width: 300,
        marginLeft: MARGINLEFT,

        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

const AboutFlex = () => (
  <View style={{flex:1}}>
    <FlexDirectionBasics/>
    <JustifyContentBasics/>
    <AlignItemsBasics/>
  </View>
)

export default AboutFlex