import React from 'react';
import {View, StyleSheet, Dimensions, TouchableOpacity, Text} from 'react-native';
import colors from '../../../assets/colors/colors';

export default RegisterButton = () => {   
    return(
        <TouchableOpacity
            style = {styles.registerButtonStyle}
        >
            <Text style = {styles.textStyle}>
                아직 회원이 아니신가요?
            </Text>
        </TouchableOpacity> 
    );
}

const styles = StyleSheet.create({
    registerButtonStyle : {
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : "row",
        marginTop : Dimensions.get('window').height * 0.05,
    },
    textStyle : {
        color : colors.black,
        fontFamily : 'KOTRA_HOPE_TTF',
        fontSize : 12,
    }
})