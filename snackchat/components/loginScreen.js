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
    StyleSheet
} from 'react-native';

//Screens
class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'Username',
            password: 'Password',
        }
    };

    static navigationOptions = {
        title: 'Login'
    };

    login() {

    }
    register() {
        this.props.navigation.navigate('Register');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.loginBkg}>
                    <Image source={require('../assets/image/logo.png')} />
                    <Text style={styles.textBig}>SnackChat!</Text>
                </View>
                <View style={style.loginContainer}>
                    {/*LOGIN*/}
                    <TextInput style={styles.inputField}
                        onChangeText={(text) => this.setState({username: text})}
                        value={this.state.username}
                    />
                    {/*PASSWORD*/}
                    <TextInput style={styles.inputField}
                        onChangeText={(text) => this.setState({password: text})}
                        value={this.state.password}
                    />
                    <View>
                        <TouchableOpacity onPress={ () => {this.login()} } style={style.loginContainer}>
                            <Text style={styles.}>Login</Text>
                        </TouchableOpacity>
                    </View>



                </View>
                <TouchableOpacity onPress={ () => {this.press()} } style={{}}>
                    <Text style={{}}>Tap to Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{}} onPress={ () => {this.register()} }>
                    <Text style={{}}>Tap to Register</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default LoginScreen
