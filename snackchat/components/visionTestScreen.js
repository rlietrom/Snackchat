import React from 'react';
import styles from '../styling/styles';
import { RNS3 } from 'react-native-aws3';
import KEY from '../noGIT';
import { AsyncStorage, TouchableOpacity, Image, Button, Text, View } from 'react-native';
import Modal from 'react-native-modal'

class VisionTestScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            image: "",
            awsResp: null,
            currUser: {},
            isModalVisible: false
        }
    }

    toggleModal(){
        this.setState({isModalVisible: !this.state.isModalVisible})
    };

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }


    componentDidMount() {
        AsyncStorage.getItem('image')
        .then((result)=>{
            this.setState({image: result});
            return AsyncStorage.getItem('user')
        })
        .then((userResp)=>{
            this.setState({currUser: userResp});
            const file = {
                uri: this.state.image,
                name: "image" + this.getRandomInt(0,10000) + ".png",
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
                console.log("HELLA STATE",this.state);
                fetch("https://snackchat-backend-2.herokuapp.com/api/vision", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        link: this.state.awsResp.body.postResponse.location,
                        user: this.state.currUser,
                        username: this.state.currUser.username
                    })
                })
            })
        })
    }

    static navigationOptions = {
        title: 'VisionTest'
    };

    onPressHome() {
        this.props.navigation.navigate('Home');
    }

    render() {
        let image = this.state.image ? this.state.image : '';
        // console.log("RENDER IMAGE",image);

        return (
            <View style={styles.container}>
                <Image source={{uri: image}} style={styles.visionTest} />
                <View style={styles.bottomBar}>
                    <TouchableOpacity onPress={this.onPressHome}>
                        <Text>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.onPressHome}>
                        <Text>Send</Text>
                    </TouchableOpacity>
                </View>


                {/* <Button onPress={this.props.navigation.navigate('Home')} title="hello"/> */}
            </View>
        )
    }
}

export default VisionTestScreen;
