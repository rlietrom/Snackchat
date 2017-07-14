import React from 'react';
import styles from '../styling/styles';

class ViewSnacksScreen extends React.Component {
  static navigationOptions = {
    title: 'View Snacks'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textBig}>View Snacks Screen</Text>
      </View>
    )
  }
}

export default ViewSnacksScreen;
