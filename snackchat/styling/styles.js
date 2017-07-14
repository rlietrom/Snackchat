import React from 'react';
import {StyleSheet} from 'react-native';

//Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerFull: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    textBig: {
        fontSize: 36,
        textAlign: 'center',
        margin: 10,
    },
    button: {
        alignSelf: 'stretch',
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10
    },
    buttonRed: {
        backgroundColor: '#FF585B',
    },
    buttonBlue: {
        backgroundColor: '#0074D9',
    },
    buttonGreen: {
        backgroundColor: '#2ECC40'
    },
    buttonLabel: {
        textAlign: 'center',
        fontSize: 16,
        color: 'white'
    },
    backgroundWhite: {
        backgroundColor: "white"
    },
    inputField: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        fontFamily: 'Cochin'
    },
    secondaryButton: {

    },
    loginContainer: {
        backgroundColor: "#99d5f5",
        borderWidth: 1,
        borderColor: 'black',
    },
    loginBkg: {
        backgroundColor: "#f0c3d2",
        borderWidth: 1,
        borderColor: 'black',
    },

});

export default styles;
