import React from 'react';
import {StyleSheet, View, Dimensions, Image} from 'react-native';
import colors from '../../../assets/colors/colors';

export default Title = () => {
    return (
        <View style = {styles.containerStyle}>
            <Image 
                style = {styles.titleStyle}
                source = {require('../../../assets/images/Logo_Title_Crimson.png')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    containerStyle : {
        marginTop : Dimensions.get('window').height * 0.2,
        marginBottom : Dimensions.get('window').height * 0.02,
    },
    titleStyle : {
        width : Dimensions.get('window').width * 0.3,
        height : Dimensions.get('window').width * 0.3,
    }
})