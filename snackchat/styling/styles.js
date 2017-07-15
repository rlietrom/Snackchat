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
        backgroundColor: '#f0c3d2',
        flexDirection: 'row'
    },
    bottomButton: {
            flex: 1,
            padding: 15
    },
    modalClose: {
        borderColor: 'white',
        borderWidth: 2,
        width: '50%'
    },
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
        backgroundColor: '#f0c3d2',
        width: '100%',
    },
    homeII: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#C6EBFE',
        width: '100%',
        borderTopWidth: 1,
        borderTopColor: 'black'
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
        fontSize: 14,
        height: 25,
        fontFamily: 'Arial',
        textAlign: 'center',

    },
    primBut: {
        fontSize: 14,
        fontWeight: '500'
    },
    secBut: {
        fontSize: 14,
        fontStyle: 'italic'
    },
    homeText: {
        fontSize: 18,
        fontWeight: '500'
    },
    inputViewWrap: {
        borderTopColor: 'black',
        borderBottomColor: 'black',
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },
    inputContainer: {
        backgroundColor: "#C6EBFE",
        borderTopWidth: 1,
        borderTopColor: 'black',
        flex: 3,
        justifyContent: 'space-around',
        // alignItems: 'center',
        flexDirection: 'column'
    },
    inputContainer2: {
        backgroundColor: "#C6EBFE",
        borderTopWidth: 1,
        borderTopColor: 'black',
        flex: 3,
        justifyContent: 'space-around',
        // alignItems: 'center',
        flexDirection: 'column'
    },
    loginContainer: {
        backgroundColor: "#C6EBFE",
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginContainer2: {
        backgroundColor: "#C6EBFE",
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    registerContainer: {
        backgroundColor: "#C6EBFE",
        flex: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    registerContainer2: {
        backgroundColor: "#C6EBFE",
        flex: 3.4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        backgroundColor: "#f0c3d2",
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        borderColor: 'black',
        borderWidth: 1,
    },
    topBar: {
        backgroundColor: "#f0c3d2",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        paddingTop: 10
    },
    friendsContainer: {
        flex: 9,
        backgroundColor: 'white'
    },
    individualFriend: {
      backgroundColor: 'white',
      borderBottomWidth: 1,
      borderBottomColor: 'black',
      height: 30,
      alignItems: 'center',
      justifyContent: 'center'
    },
    addFriendInput: {
      backgroundColor: 'white',
      borderBottomWidth: 1,
      borderBottomColor: 'black',
      borderTopWidth: 1,
      borderTopColor: 'black',
      height: 30,
      fontSize: 14,
      justifyContent: 'center'
    },
    nonTopBar: {
      flex: 9,
      backgroundColor: 'white'
    },
    text: {
      alignItems: 'center',
      justifyContent: 'center'
    }

});

export default styles;
