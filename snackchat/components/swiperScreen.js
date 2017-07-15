import React from 'react';
import styles from '../styling/styles';
import HomeScreen from './homeScreen';
import ViewSnacksScreen from './viewSnacksScreen';
import FriendsScreen from './friendsScreen';
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
import Swiper from 'react-native-swiper'

//Screens
class SwiperScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  };

  render() {
  return (
    <View>
      <Swiper
        loop={false}
        showsPagination={false}
        index={1}
        horizontal={false}
        vertical={true}>
        <FriendsScreen />
        <HomeScreen />
        <FriendsScreen />
      </Swiper>
    </View>
  )
}
}
}

export default SwiperScreen
