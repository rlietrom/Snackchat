import React from 'react';
import styles from '../styling/styles';

class SendPhotoScreen extends React.Component {
  static navigationOptions = {
    title: 'Send Photo'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textBig}>Send Photo Screen</Text>
      </View>
    )
  }
}

export default SendPhotoScreen;
