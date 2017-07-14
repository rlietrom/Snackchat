import React from 'react';
import styles from '../styling/styles';
import { ImagePicker } from 'expo';

class TakePhotoScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: '',
        }
    }

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
