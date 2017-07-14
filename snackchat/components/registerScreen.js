import React from 'react';
import styles from '../styling/styles';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ListView,
  Alert,
  Button
} from 'react-native';

class RegisterScreen extends React.Component {
  static navigationOptions = {
    title: 'Register'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textBig}>Register</Text>
      </View>
    )
  }
}

export default RegisterScreen;
