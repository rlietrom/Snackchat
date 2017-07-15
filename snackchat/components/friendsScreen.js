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

class FriendsScreen extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});  //allows for scrolling
    this.state = {
          dataSource: ds.cloneWithRows([]),
          addFriend: ''
    };
    }



  render() {
    // AsyncStorage.getItem('user')
    // .then((response) => console.log("response friendsScreen", response))
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.textBig}>SEND YOUR SNACK   </Text>
          <Image style={styles.logoSmall} source={require('../assets/images/logo.png')} />
        </View>
        {/* <ListView
          style={styles.friendsContainer}
          dataSource={this.state.dataSource}

          <View style={styles.addFriendContainer}>
            <TextInput
              onChangeText={(text) => this.setState({username: text})}
              value={this.state.addFriend} />
          </View>
        /> */}
      </View>
      )
    }
  }

  export default FriendsScreen;
