import React from 'react';
import { TouchableOpacity, Image, Text, Dimensions, StyleSheet } from 'react-native';
import colors from '../../../assets/colors/colors';

export default TextButton = (props) => {
    return(
        <TouchableOpacity
            style = {styles.textButtonStyle}
            onPress = {() => props.onPress(true)}
        >
            <Image 
                source = {props.icon}
                style = {{
                    width : Dimensions.get('window').width * 0.05,
                    height : Dimensions.get('window').width * 0.05,
                }}
            />
            <Text style = {{color : colors.crimson, fontFamily : 'KOTRA_HOPE_TTF', fontSize : 15, marginLeft : 10}}>
                {props.text}
            </Text> 
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    textButtonStyle : {
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : "row",
        marginTop : 30, 
        marginBottom : 15,
        marginLeft : 5,
        marginRight : 5,
        elevation : 3,
        backgroundColor : colors.white,
        width : Dimensions.get('window').width * 0.27,
        height : Dimensions.get('window').width * 0.07,
        borderRadius : 20,
    },
})