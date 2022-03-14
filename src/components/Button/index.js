import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Dimensions, Text } from 'react-native';
import colors from '../../../assets/colors/colors';

export default Button = (props) => {
    return(
        <TouchableOpacity
            style = {styles.buttonStyle}
        >
            <Image 
                source = {props.icon}
                style = {{
                    width : Dimensions.get('window').width * 0.05,
                    height : Dimensions.get('window').width * 0.05,
                }}
            />
        </TouchableOpacity> 
    );
}

const styles = StyleSheet.create({
    buttonStyle : {
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : "row",
        marginLeft : 5,
        marginRight : 5,
        elevation : 5,
        backgroundColor : colors.white,
        width : Dimensions.get('window').width * 0.07,
        height : Dimensions.get('window').width * 0.07,
        borderRadius : 100,
    },
})