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
class FullPicScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
        }
    };

    static navigationOptions = {
        title: 'FullPic'
    };

    componentDidMount(){
    }

    toViewSnacks() {
        this.props.navigation.navigate("ViewSnacks");
    }

    render() {
        return (

        )
    }
}

export default FullPicScreen
