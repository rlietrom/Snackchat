import React from 'react';
import styles from '../styling/styles';
import { AsyncStorage, TouchableOpacity, Image, Button, Text, View, StyleSheet } from 'react-native';
import { ImagePicker } from 'expo';
import Swiper from 'react-native-swiper'
import FriendsScreen from './friendsScreen'
import * as Animatable from 'react-native-animatable'

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
    }
    this.toFriendsScreen = this.toFriendsScreen.bind(this)
  }


  componentWillReceiveProps(nextProps) {
    console.log(nextProps, "receiving props...");
  }



  static navigationOptions = {
    title: 'Home'
  };

  takeImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      quality: 0.75,
      base64: true,
      exif: true,
    });
    console.log("TAKE IMAGE", result.uri);

    if (!result.cancelled) {
      AsyncStorage.setItem('image', result.uri).then(() => {
        this.props.navigation.navigate('VisionTest');
      });
    }
  };

  viewSnacksAlert = () => {
    alert("hello!");
  }

  toFriendsScreen() {
    this.props.navigation.navigate('Friends')
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.takeImage} style={styles.homeI}>
          <Animatable.View animation="bounceInRight" duration={2000} style={{flexDirection:'row'}}>
            <Text style={styles.homeText}>SEND SNACKS  </Text>
            <Image style={styles.logo} source={require('../assets/images/logo.png')} />
          </Animatable.View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.toFriendsScreen} style={styles.homeII}>
          <Animatable.View animation="bounceInLeft" duration={2000} style={{flexDirection:'row'}}>
            <Image style={styles.logo} source={require('../assets/images/logo.png')} />
            <Text style={styles.homeText}>   GET SNACKS</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    )
  }
}

export default HomeScreen;
