import React from 'react';
import styles from '../styling/styles';

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
                image: null,
            }
        }

        componentDidMount() {
            AsyncStorage.getItem('image').then((result)=>{
                this.setState({image: result});
            })
        }

        static navigationOptions = {
            title: 'VisionTest'
        };

        render() {
            let image = this.state.image ? this.state.image : '';

            return (
                <View style={styles.container}>
                    <Image source={{uri: image}} style={styles.visionTest} />
                    <View style={styles.bottomBar}>

                    </View>
                    {/* <Button onPress={this.props.navigation.navigate('Home')} title="hello"/> */}
                </View>
            )
        }
    }

    export default VisionTestScreen;
