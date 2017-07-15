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
  StyleSheet,
  Image
} from 'react-native';

//Screens
class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ' username',
      password: ' password',
    }
  };

  login() {
    this.props.navigation.navigate('Home')
  }
  register() {
    this.props.navigation.navigate('Register');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../assets/images/logo.png')} />
        </View>
        <View style={styles.inputContainer}>
          {/*USERNAME*/}
          <View style={styles.inputViewWrap}>
            <TextInput style={styles.inputField}
              onChangeText={(text) => this.setState({username: text})}
              value={this.state.username}
            />
          </View>

          {/*PASSWORD*/}
          <View style={styles.inputViewWrap}>
            <TextInput style={styles.inputField}
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.password}
            />
          </View>
        </View>

        <View style={styles.loginContainer}>
          <TouchableOpacity onPress={ () => {this.login()} }>
              <Text>LOGIN</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.registerContainer}>
          <TouchableOpacity onPress={ () => {this.register()} }>
              <Text>REGISTER</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default LoginScreen
