import React from 'react';
import styles from '../styling/styles';
import { RNS3 } from 'react-native-aws3';
import KEY from '../noGIT';
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
                awsResp: null,
                currUser: {}
            }
        }
    };



    componentDidMount() {
        AsyncStorage.getItem('image')
        .then((result)=>{
            this.setState({image: result});
            return AsyncStorage.getItem('user')
        });
        .then((userResp)=>{
            this.setState({currUser: userResp});
            const file = {
                uri: this.state.image,
                name: "image.png",
                type: "image/png"
            }
            const options = {
                keyPrefix: "uploads/",
                bucket: "horizons-hackathon-snackchat",
                region: "us-west-1",
                accessKey: KEY.ACCESS_KEY,
                secretKey: KEY.SECRET_KEY,
                awsURL: "https://console.aws.amazon.com/s3/buckets/horizons-hackathon-snackchat/?region=us-east-1&tab=overview",
                successActionStatus: 201
            };
            RNS3.put(file, options).then(response => {
                if (response.status !== 201) {
                    throw new Error("Failed to upload image to S3");
                }
                this.setState({awsResp: response});
                fetch("https://snackchat-backend-2.herokuapp.com/vision", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        link: this.state.awsResp.location,
                        user: this.state.currUser,
                        username: this.state.currUser.username
                      })
                    })
                })
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
}

export default VisionTestScreen;
