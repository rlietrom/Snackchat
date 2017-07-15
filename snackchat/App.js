import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styling/styles';
import LoginScreen from './components/loginScreen';
import RegisterScreen from './components/registerScreen';
import FriendsScreen from './components/friendsScreen';
import ViewSnacksScreen from './components/viewSnacksScreen';
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
    FriendsScreen: {
      screen: FriendsScreen,
      navigationOptions:  {
        header: null,
        title: 'Friends Screen'
      }
    },
    ViewSnacksScreen: {
      screen: ViewSnacksScreen,
      navigationOptions:  {
        header: null,
        title: 'View Snacks Screen'
      }
    }
}, {headerMode: 'screen',
    initialRouteName: 'FriendsScreen'});
