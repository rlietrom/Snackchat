import React from 'react';
import styles from '../styling/styles';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ListView,
  Alert,
  Button,
  StyleSheet
} from 'react-native';

//Screens
class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login'
  };

  press() {

  }
  register() {
    this.props.navigation.navigate('Register');
  }

  render() {
    return (
      <View style={{marginTop: '50%'}}>
        <Text style={[styles.textBig, styles.backgroundWhite]}>SnackChat!</Text>

        <TouchableOpacity onPress={ () => {this.press()} } style={[styles.button, styles.buttonGreen]}>
          <Text style={styles.buttonLabel}>Tap to Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.buttonBlue]} onPress={ () => {this.register()} }>
          <Text style={styles.buttonLabel}>Tap to Register</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default LoginScreen
