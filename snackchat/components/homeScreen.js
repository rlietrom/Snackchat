import React from 'react';
import styles from '../styling/styles';
import { TouchableOpacity, Image, Button, Text, View, StyleSheet } from 'react-native';
import { ImagePicker } from 'expo';

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
            this.setState({ image: result.uri });
        }
    };



    render() {
        return (
            <View>
                <TouchableOpacity>
                    <View>
                        <Text style={styles.textBig}>TAKE PHOTO </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View>
                        <Text style={styles.textBig}>TAKE PHOTO </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default HomeScreen;
