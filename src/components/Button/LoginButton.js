import React from 'react';
import {View, StyleSheet, Dimensions, TouchableOpacity, Text} from 'react-native';
import colors from '../../../assets/colors/colors';

export default LoginButton = () => {   
    return(
        <TouchableOpacity
            style = {styles.loginButtonStyle}
        >
            <Text style = {styles.textStyle}>
                로그인
            </Text>
        </TouchableOpacity> 
    );
}

const styles = StyleSheet.create({
    loginButtonStyle : {
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : "row",
        marginLeft : 5,
        marginRight : 5,
        marginTop : Dimensions.get('window').height * 0.03,
        elevation : 5,
        borderRadius : 100,
        width : Dimensions.get('window').width * 0.3,
        height : Dimensions.get('window').width * 0.1,
        backgroundColor : colors.crimson,
    },
    textStyle : {
        color : colors.white,
        fontFamily : 'KOTRA_HOPE_TTF',
        fontSize : 25,
    }
})