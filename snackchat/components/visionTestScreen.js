import React from 'react';
import styles from '../styling/styles';
import { RNS3 } from 'react-native-aws3';
import KEY from '../noGIT';
import { AsyncStorage,
    TouchableOpacity,
    Image,
    Button,
    Text,
    View
} from 'react-native';

class VisionTestScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            image: "",
            awsResp: null,
        }
    }


    componentDidMount() {
        AsyncStorage.getItem('image').then((result)=>{
            this.setState({image: result});
            //AWS STARTS
            console.log("RESULT",result);
            const file = {
                uri: result,
                name: "image.png",
                type: "image/png"
            }

                    this.setState({awsResp: response});

                    fetch("https://snackchat-backend-2.herokuapp.com/vision", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json"
                      },
                      body: JSON.stringify({
                        link: this.state.awsResp.location
                      })
                    })
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
            });
        });
    }

    static navigationOptions = {
        title: 'VisionTest'
    };

    onPress() {
        this.props.navigation.navigate('Home');
    }

    render() {
        let image = this.state.image ? this.state.image : '';
        // console.log("RENDER IMAGE",image);

        return (
            <View style={styles.container}>
                <Image source={{uri: image}} style={styles.visionTest} />
                <TouchableOpacity onPress={this.onPress}>
                    <View style={styles.bottomBar}></View>
                </TouchableOpacity>

                {/* <Button onPress={this.props.navigation.navigate('Home')} title="hello"/> */}
            </View>
        )
    }
}

export default VisionTestScreen;
