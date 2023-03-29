import React, { Fragment } from 'react';
import {
    TouchableOpacity,
    Text,
    StatusBar,
    View,
    StyleSheet
} from 'react-native';
import { Dimensions } from 'react-native';
const deviceWidth = Dimensions.get('screen').width;


const Scan = (props) => {
    const { getSMS } = props
    return (
        <View style={styles.scrollViewStyle}>
            <Fragment>
                <StatusBar barStyle="dark-content" />
                    <TouchableOpacity onPress={getSMS} style={styles.buttonTouchable}>
                        <Text style={styles.buttonTextStyle}> Read SMS</Text>
                    </TouchableOpacity>
            </Fragment>
        </View >

    );

}

const styles = StyleSheet.create({
    scrollViewStyle: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    buttonTouchable: {
        fontSize: 21,
        backgroundColor: '#66bb6a',
        marginTop: 32,
        width: deviceWidth - 62,
        justifyContent: 'center',
        alignItems: 'center',
        height: 44,
        alignSelf:'center'
    },
    buttonTextStyle: {
        color: 'white',
        fontWeight: 'bold',
    },
  });


export default Scan;