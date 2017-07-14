import React from 'react';
import styles from '../styling/styles';

class VisionTestScreen extends React.Component {
  static navigationOptions = {
    title: 'Register'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textBig}>Vision Test Screen</Text>
      </View>
    )
  }
}

export default VisionTestScreen;
