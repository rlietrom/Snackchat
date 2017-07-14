import React from 'react';
import styles from '../styling/styles';
class TakePhotoScreen extends React.Component {
  static navigationOptions = {
    title: 'Take Photo'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textBig}>TAKE PHOTO SCREEN</Text>
      </View>
    )
  }
}

export default TakePhotoScreen;
