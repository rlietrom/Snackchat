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
  Image,
  AsyncStorage
} from 'react-native';
import * as Animatable from 'react-native-animatable'
/**
 * TESTING BELOW,,,,,,,,,,
 */
import NutritionFacts from 'nutrition-facts'

const NF = new NutritionFacts('hrbPZg66gjAlAMTsyJ20csfGqevaf8FEWtyNr1Rg');
NF.searchFoods({
  q: 'salted butter',
  ds: 'Standard Reference'
}).then(results => {

  // Returns search results
  let mySelectedItem = results.list.item[0]

  // Items are returned as a FoodItem instance
  // allowing you to call 'getNutrition' directly on the instance.
  mySelectedItem.getNutrition()
  .then(nutritionReport => {
    console.log(nutritionReport)
  }).catch(err => {
    console.log(err)
  })

}).catch(err => {
  console.log(err)
})

// Alternatively, if you know the NDBNO off-hand
// you can call 'getNutrition' from the NF instance.

NF.getNutrition('01001','b')
.then(nutritionReport => {
  console.log(nutritionReport)
}).catch(err => {
  console.log(err)
})

/**
 * TESTING ABOVE ^^^^^^^^^^^
 */
//Screens
class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      userJson: {}
    }
  };

  login() {
    if(this.state.username && this.state.password) {
      fetch('https://snackchat-backend-2.herokuapp.com/api/login', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('RESP JSON', responseJson)
        if(responseJson.success){
          AsyncStorage.setItem('user', JSON.stringify(responseJson.user))
          .then(() => {
              this.props.navigation.navigate('Home');
          })
          .catch((err) => {
            console.log("Error in Async-Login!!");
            alert(err);
          })
        }
        else{
          alert(responseJson.error)
        }
      })
      .catch((err) => {
        alert(err)
        console.log("error is", err)
      })
    }
    else {
        alert("Enter credentials")
    }
  }

  register() {
    this.props.navigation.navigate('Register');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Animatable.Image animation='bounce' duration={1500} iterationCount='infinite' style={styles.logo} source={require('../assets/images/logo.png')} />
        </View>
        <View style={styles.inputContainer}>
          {/*USERNAME*/}
          <View style={styles.inputViewWrap}>
            <TextInput style={styles.inputField}
              placeholder=" USERNAME"
              placeholderTextColor="black"
              onChangeText={(text) => this.setState({username: text})}
              value={this.state.username}
            />
          </View>

          {/*PASSWORD*/}
          <View style={styles.inputViewWrap}>
            <TextInput secureTextEntry={true} style={styles.inputField}
              placeholder=" PASSWORD"
              placeholderTextColor="black"
              onChangeText={(text) => this.setState({password: text})}
              value={this.state.password}
            />
          </View>
        </View>

        <View style={styles.loginContainer}>
          <TouchableOpacity onPress={ () => {this.login()} }>
              <Text style={styles.primBut}>LOGIN</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.registerContainer}>
          <TouchableOpacity onPress={ () => {this.register()} }>
              <Text style={styles.secBut}>REGISTER</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default LoginScreen
