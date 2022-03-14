import React from 'react';
import {View, StyleSheet, TextInput, Dimensions, Image} from 'react-native';
import colors from '../../../assets/colors/colors';

export default Input = (props) => {
    const [info, setInfo] = useState('');
    return (
        <View style = {styles.containerStyle}>
            <Image 
                style = {styles.imageStyle}
                source = {props.icon}
            />
            <TextInput 
                style = {styles.inputStyle}
                placeholder = {props.text}
                secureTextEntry = {props.secureTextEntry}
                onChangeText = {(text)=> {
                        setInfo(text)
                    }
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle : {
        flex : 1,
        flexDirection : 'row',
        alignItems : 'center',
        marginTop : Dimensions.get('window').height * 0.03,
        marginBottom : Dimensions.get('window').height * 0.03,
    },
    inputStyle : {
        width : Dimensions.get('window').width * 0.6,
        height : Dimensions.get('window').height * 0.05,
        marginRight : Dimensions.get('window').height * 0.03,
        elevation : 10,
        borderRadius : 100,
        backgroundColor : colors.white,
        paddingLeft : 10,
        fontFamily : 'KOTRA_HOPE_TTF'
    },
    imageStyle : {
        width : Dimensions.get('window').height * 0.03,
        height : Dimensions.get('window').height * 0.03,
        marginRight : 10,
    }
})