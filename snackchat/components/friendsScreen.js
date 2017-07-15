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
      const arr = obj.friendsList;
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
        {/* <View style={styles.topBar}>
        <Text style={styles.textBig}>SEND YOUR SNACK   </Text>
        <Image style={styles.logoSmall} source={require('../assets/images/logo.png')} />
      </View> */}
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) =>
          <View style={styles.friendsContainer}>
            <TouchableOpacity
              style={styles.individualFriend}
              onPress={this.onTouch.bind(this, rowData)}>
              <Text>hi</Text>
            </TouchableOpacity>
          </View>
        }/>
        <View style={styles.addFriendContainer}>
          {/* <TextInput
            onChangeText={(text) => this.setState({username: text})}
            value={this.state.addFriend} /> */}
          </View>



        </View>
      )
    }
  }

  export default FriendsScreen;
