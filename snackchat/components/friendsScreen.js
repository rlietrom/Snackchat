import React from 'react';
import styles from '../styling/styles';

class FriendsScreen extends React.Component {
  static navigationOptions = {
    title: 'Register'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textBig}>Register</Text>
      </View>
    )
  }
}

export default FriendsScreen;
