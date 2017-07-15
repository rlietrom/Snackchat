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
      addFriend: '',
    };
  }

  componentDidMount(){
    AsyncStorage.getItem ('user').then((response) => {
      console.log("COMPONENT DID MOUNT FRIENDS",response);
      const obj = JSON.parse(response);
      console.log('OBJ', obj)
      const arr = obj.friendList;
      console.log("THIS SHOULD BE THE ARRAY", arr)
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});  //allows for scrolling
      this.setState({
        dataSource: ds.cloneWithRows(arr)
      })
      console.log("THIS IS THE STATE",this.state);
    })
    .catch((err)=> {
      console.log(err);
    })
  }

  onTouch(rowData) {
    alert(rowData);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Text>SEND SNACK   </Text>
          <Image style={styles.logoSmall} source={require('../assets/images/logo.png')} />
        </View>
        <View style={styles.nonTopBar}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) =>
              <TouchableOpacity>
                <View style={styles.individualFriend}>
                  <Text>{rowData}</Text>
                </View>
              </TouchableOpacity>
            }
          />
          <View style={{flex: 8}}>
            <Text>ADD A SNACKPAL</Text>
            <View style={styles.addFriendInput}>
              <TextInput
                style={styles.inputField}
                placeholder="username"
                placeholderTextColor='black'
                onChangeText={(text) => this.setState({addFriend: text})}
                value={this.state.addFriend}
              />
            </View>
          </View>
          <View style={{flex: 1, alignSelf: 'flex-end', padding: 10}}>
            <Image style={styles.logoSmall} source={require('../assets/images/send.png')} />
          </View>
        </View>
      </View>

    )
  }
}

export default FriendsScreen;
