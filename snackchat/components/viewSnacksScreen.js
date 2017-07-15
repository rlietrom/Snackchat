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

//Screens
class ViewSnacksScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>YOUR SNACKS</Text>
        </View>
      </View>
    )
  }
}

export default ViewSnacksScreen
