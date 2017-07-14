import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styling/styles';
import LoginScreen from './components/loginScreen';
import RegisterScreen from './components/registerScreen';
import NavScreen from './navigation/navigation';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <NavScreen />
      </View>
    );
  }
}
