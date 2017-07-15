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

    // toViewSnacksScreen() {
    //   this.props.navigation.navigate('viewSnacksScreen')
    // }

    toFriendsScreen() {
      this.props.navigation.navigate('Friends')
    }

    render() {
        return (

                <View style={styles.container}>
                  <Text animation="zoomInDown" delay={700} style={styles.instructions}>
         Tap one of the following to animate for ms
       </Text>
                  <TouchableOpacity onPress={this.takeImage} style={styles.homeI}>
                      <View animation="lightSpeedIn" delay={500}>
                        <Text>Send Snacks</Text>
                      </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.toFriendsScreen} style={styles.homeII}>
                      <Text>View Snacks</Text>
                  </TouchableOpacity>
                </View>

            )
        }
    }

    export default HomeScreen;
