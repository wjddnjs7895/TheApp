import React from 'react';
import {StyleSheet, View, Dimensions, Text} from 'react-native';
import colors from '../../../assets/colors/colors'; 

export default Box = (props) => {
    const tailRadius = props.id === 34 ? 10 : 0;

    return(
        <View style = {{
            ...styles.boxStyle,
            borderBottomRightRadius : tailRadius, 
        }}>
            <Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    boxStyle : {
        borderWidth : 0.4,
        borderColor : colors.gray,
        width : Dimensions.get('window').width * 0.15,
        height : Dimensions.get('window').width * 0.15,
        alignItems : 'center',
        justifyContent : 'center',
    },
})
