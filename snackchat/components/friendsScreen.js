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

class FriendsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.textBig}>SEND YOUR SNACK   </Text>
          <Image style={styles.logoSmall} source={require('../assets/images/logo.png')} />
        </View>
        <ListView style={styles.friendsContainer}>
          <text> </text>
          <View style={styles.addFriendContainer}>

          </View>
        </ListView>
      </View>
      )
    }
  }

  export default FriendsScreen;
