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
class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
        this.register = this.register.bind(this)
        this.login = this.login.bind(this)
    };

    login() {
        this.props.navigation.navigate('Login')
    }
    register() {
        fetch('https://snackchat-backend-2.herokuapp.com/api/user', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            })
        })
        .then((response) => response.json())

        .then((responseJson) => {
            console.log('RESP JSON', responseJson)
            if(responseJson.success){
                this.login()
            }
            else{
                alert(responseJson.error)
            }
        })
        .catch((err) => {
            alert(err)
            console.log("error is", err)
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../assets/images/logo.png')} />
                </View>
                <View style={styles.inputContainer2}>
                    {/*USERNAME*/}
                    <View style={styles.inputViewWrap}>
                        <TextInput style={styles.inputField}
                            placeholder=" USERNAME"
                            placeholderTextColor="black"
                            onChangeText={(text) => this.setState({username: text})}
                            value={this.state.username}
                        />
                    </View>

                    {/*PASSWORD*/}
                    <View style={styles.inputViewWrap}>
                        <TextInput style={styles.inputField}
                            secureTextEntry={true}
                            placeholder=" PASSWORD"
                            placeholderTextColor="black"
                            onChangeText={(text) => this.setState({password: text})}
                            value={this.state.password}
                        />
                    </View>
                </View>

                {/*register*/}
                <View style={styles.loginContainer2}>
                    <TouchableOpacity onPress={ () => {this.register()} }>
                        <Text style={styles.primBut}>REGISTER</Text>
                    </TouchableOpacity>
                </View>

                {/*back to login*/}
                <View style={styles.registerContainer2}>
                    <TouchableOpacity onPress={ () => {this.login()} }>
                        <Text style={styles.secBut}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default LoginScreen
