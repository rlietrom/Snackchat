import { StackNavigator } from 'react-navigation';
import LoginScreen from '../components/loginScreen';
import RegisterScreen from '../components/registerScreen';
import TakePhotoScreen from '../components/takePhotoScreen';
import SendPhotoScreen from '../components/sendPhotoScreen';
import ViewSnacksScreen from '../components/viewSnacksScreen';
import VisionTestScreen from '../components/visionTestScreen';
import FriendsScreen from '../components/friendsScreen';

export default StackNavigator({
  Login: {
    screen: LoginScreen
  },
  Register: {
    screen: RegisterScreen
  },
  TakePhoto: {
    screen: TakePhotoScreen
  },
  SendPhoto: {
    screen: SendPhotoScreen
  },
  ViewSnacks: {
    screen: ViewSnacksScreen
  },
  VisionTest: {
    screen: VisionTestScreen
  },
  Friends: {
    screen: FriendsScreen
  }
}, {initialRouteName: 'Login'});
