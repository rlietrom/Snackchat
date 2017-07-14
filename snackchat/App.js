import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styling/styles';
import LoginScreen from './components/loginScreen';
import RegisterScreen from './components/registerScreen';
import { StackNavigator } from 'react-navigation';

export default StackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions:  {
          header: null,
          title: 'Login'
        }
    },
    Register: {
      screen: RegisterScreen,
      navigationOptions:  {
        header: null,
        title: 'Register'
      }
    },
}, {headerMode: 'screen',
    initialRouteName: 'Login'});
