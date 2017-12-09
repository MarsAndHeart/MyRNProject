/**
 * Created by jianghai on 2017/12/9.
 */
import React from 'react';
import { View, Text, Button } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>HomeScreen</Text>
    <Button
      onPress={() => navigation.navigate('Profile')}
      title="Go to ProfileScreen"
    />
  </View>
);
const ProfileScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>ProfileScreen</Text>
    <Button
      onPress={() => navigation.navigate('Main')}
      title="Go to HomeScreen"
    />
  </View>
);

const App = StackNavigator({
  Main: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
});

export default App