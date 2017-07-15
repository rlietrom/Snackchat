import React from 'react';
import {StyleSheet} from 'react-native';
import { Constants } from 'expo';


//Styles
const styles = StyleSheet.create({
    visionTest: {
        flex: 9,
        width: '100%'
    },
    bottomBar: {
        flex: 1,
        backgroundColor: '#f0c3d2'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    },
    homeI : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D9F2FF',
        width: '100%',
    },
    homeII: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFEFD9',
        width: '100%',
    },
    logo: {
        height: 40,
        width: 40
    },
    logoSmall: {
        height: 30,
        width: 30,
    },
    inputField: {
        backgroundColor: 'white',
        // borderColor: 'black',
        // borderWidth: 1, 5, 1, 5,
        fontSize: 12,
        height: 25,
    },
    inputViewWrap: {
        borderTopColor: 'black',
        borderBottomColor: 'black',
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },
    inputContainer: {
        backgroundColor: "#99d5f5",
        borderTopWidth: 1,
        borderTopColor: 'black',
        flex: 3,
        justifyContent: 'space-around',
        // alignItems: 'center',
        flexDirection: 'column'
    },
    inputContainer2: {
        backgroundColor: "#d5d540",
        borderTopWidth: 1,
        borderTopColor: 'black',
        flex: 3,
        justifyContent: 'space-around',
        // alignItems: 'center',
        flexDirection: 'column'
    },
    loginContainer: {
        backgroundColor: "#99d5f5",
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginContainer2: {
        backgroundColor: "#d5d540",
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    registerContainer: {
        backgroundColor: "#d5d540",
        flex: 3.4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    registerContainer2: {
        backgroundColor: "#99d5f5",
        flex: 3.4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        backgroundColor: "#f0c3d2",
        flex: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        borderColor: 'black',
        borderWidth: 1,
        fontFamily: 'Arial',
    },
    topBar: {
        backgroundColor: "#f0c3d2",
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        paddingTop: 10
    },
    friendsContainer: {
        flex: 18,
        backgroundColor: "white"
    },
    addFriendContainer: {

    },
});

export default styles;
