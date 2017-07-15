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
      addFriend: ''
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
          <View>
            <text> {}</text>
          </View>

          <View style={styles.addFriendContainer}>
            <TextInput
              onChangeText={(text) => this.setState({username: text})}
              value={this.state.addFriend} /> 
          </View>
        </ListView>
      </View>
      )
    }
  }

  export default FriendsScreen;
