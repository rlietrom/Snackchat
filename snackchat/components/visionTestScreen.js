import React from 'react';
import styles from '../styling/styles';
import { RNS3 } from 'react-native-aws3';
import KEY from '../noGIT';
import { ListView, AsyncStorage, TouchableOpacity, Image, Button, Text, View } from 'react-native';
import Modal from 'react-native-modal'

class VisionTestScreen extends React.Component {
    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});  //allows for scrolling
        this.state = {
            image: "",
            awsResp: null,
            currUser: {},
            isModalVisible: false,
            url: '',
            dataSource: ds.cloneWithRows([]),
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
                .then(result => {
                    console.log("API RESP", result);
                    const obj = JSON.parse(result._bodyInit);
                    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});  //allows for scrolling
                    this.setState({
                        dataSource: ds.cloneWithRows(obj.label),
                        link: obj.link
                    })
                })
            })
        })
    }

    static navigationOptions = {
        title: 'VisionTest'
    };

    onPressHome() {
        // this.props.navigation.navigate('Home');
        console.log('hellop')
    }

    render() {
        let image = this.state.image ? this.state.image : '';
        // console.log("RENDER IMAGE",image);

        return (
            <View style={styles.container}>
                <Image source={{uri: image}} style={styles.visionTest} />
                <Modal isVisible={this.state.isModalVisible} backdropOpacity={0.5}>
                    <View style={styles.modalContainer}>
                        <Text style={{ color: 'white' }}>You just took a picture of:</Text>
                        <ListView
                          dataSource={this.state.dataSource}
                          renderRow={(rowData) =>
                            <TouchableOpacity>
                              <View style={{ color: 'white' }}>
                                <Text>{rowData}</Text>
                              </View>
                            </TouchableOpacity>
                          }
                        />
                        <TouchableOpacity onPress={this.toggleModal.bind(this)}>
                            <View style={styles.modalClose}>
                                <Text style={{color: 'white'}}>Close Results</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Modal>
                <View style={styles.bottomBar}>
                    <TouchableOpacity style={styles.bottomButton} onPress={this.onPressHome}>
                        <Text>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={this.toggleModal.bind(this)}>
                        <Text>Show Results</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bottomButton} onPress={this.onPressHome}>
                        <Text>Send</Text>
                    </TouchableOpacity>
                </View>


                {/* <Button onPress={this.props.navigation.navigate('Home')} title="hello"/> */}
            </View>
        )
    }
}

export default VisionTestScreen;
