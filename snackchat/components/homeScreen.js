import React from 'react';
import styles from '../styling/styles';
import { AsyncStorage, TouchableOpacity, Image, Button, Text, View, StyleSheet } from 'react-native';
import { ImagePicker } from 'expo';
import Swiper from 'react-native-swiper'

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
        }
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

        if (!result.cancelled) {
            AsyncStorage.setItem('image', result.uri).then(() => {
                this.props.navigation.navigate('VisionTest');
            });
        }
    };

    viewSnacksAlert = () => {
      alert("hello!");
    }

    toViewSnacksScreen() {
      this.props.navigation.navigate('viewSnacksScreen')
    }

    render() {
        return (

                <View style={styles.container}>
                  <TouchableOpacity onPress={this.takeImage} style={styles.homeI}>
                      <Text>Send Snacks</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.viewSnacksAlert} style={styles.homeII}>
                      <Text>View Snacks</Text>
                  </TouchableOpacity>
                </View>

            )
        }
    }

    export default HomeScreen;
