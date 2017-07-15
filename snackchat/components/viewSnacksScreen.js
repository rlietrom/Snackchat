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
            user: '',
            dataSource: []
        }
    };

    static navigationOptions = {
        title: 'ViewSnacks'
    };

    componentDidMount(){
        AsyncStorage.getItem ('user').then((response) => {
            const obj = JSON.parse(response);
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});  //allows for scrolling
            this.setState({
                user: obj
            })
        })
        .catch((err)=> {
            console.log(err);
        })
    }

    toHome() {
        if(this.state.toFriend) {
            fetch('https://snackchat-backend-2.herokuapp.com/api/user/inbox', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: {
                    username: this.state.user,
                }
            })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({dataSource: responseJson.userInbox})
                this.props.navigation.navigate('Home'))
            }
            .catch((err) => console.log("Error in sending", err))
        }
        else {
            alert("Choose a SnackPal to send this photo")
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topBar}>
                    <Text>GET SNACKS   </Text>
                    <Image style={styles.logoSmall} source={require('../assets/images/logo.png')} />
                </View>
                <View style={styles.nonTopBar}>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) =>
                            <TouchableOpacity onPress={() => this.setState({rowData})}>
                                <View style={styles.individualFriend}>
                                    <Text>{rowData}</Text>
                                </View>
                            </TouchableOpacity>
                        }
                    />
                    <View style={{flex: 1, alignSelf: 'flex-end', padding: 10}}>
                        <Image onPress={this.toHome}style={styles.logo} source={require('../assets/images/HOUSE.png')} />
                    </View>
                </View>
            </View>
        )
    }
}
export default ViewSnacksScreen
