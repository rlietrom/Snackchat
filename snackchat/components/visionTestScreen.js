import React from 'react';
import styles from '../styling/styles';
import { RNS3 } from 'react-native-aws3';

import { AsyncStorage,
  TouchableOpacity,
  Image,
  Button,
  Text,
  View } from 'react-native';

  class VisionTestScreen extends React.Component {
    constructor() {
      super();
      this.state = {
        image: "",
      }
    }

    componentDidMount() {
      AsyncStorage.getItem('image').then((result)=>{
        this.setState({image: result});

        const file = {
          // `uri` can also be a file system path (i.e. file://)
          uri: result,
          name: "image.png",
          type: "image/png"
        }

        const options = {
          keyPrefix: "uploads/",
          bucket: "horizons-hackathon-snackchat",
          region: "us-west-1",
          accessKey: process.env.SECRET_KEY,
          secretKey: process.env.ACCESS_KEY,
          // awsURL: "https://console.aws.amazon.com/s3/buckets/horizons-hackathon-snackchat/?region=us-east-1&tab=overview",
          successActionStatus: 201
        }

        RNS3.put(file, options).then(response => {
          if (response.status !== 201) {
            throw new Error("Failed to upload image to S3");
          }
          console.log("this is response.body: ", response.body);
          /**
          * {
          *   postResponse: {
          *     bucket: "your-bucket",
          *     etag : "9f620878e06d28774406017480a59fd4",
          *     key: "uploads/image.png",
          *     location: "https://your-bucket.s3.amazonaws.com/uploads%2Fimage.png"
          *   }
          * }
          */
        });
      })
    }

<<<<<<< HEAD
        render() {
            let image = this.state.image ? this.state.image : '';
=======
    static navigationOptions = {
      title: 'VisionTest'
    };
>>>>>>> 33979a545afc2e5c7221eb215e796cf62858d109

    onPress() {
      this.props.navigation.navigate('Home');
    }

    render() {
      let image = this.state.image ? this.state.image : ‘’;
      // console.log("RENDER IMAGE",image);

      return (
        <View style={styles.container}>
          <Image source={{uri: image}} style={styles.visionTest} />
          <View onPress={this.onPress} style={styles.bottomBar}>

          </View>
          {/* <Button onPress={this.props.navigation.navigate('Home')} title="hello"/> */}
        </View>
      )
    }
  }

  export default VisionTestScreen;
