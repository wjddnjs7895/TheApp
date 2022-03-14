import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import colors from '../../../assets/colors/colors';

export default HideTab = () => {
    return(
        <View style = {styles.hideTabStyle} />
    );
}

const styles = StyleSheet.create({
    hideTabStyle : {
        backgroundColor : '#F5F5F5',
        width : Dimensions.get('window').width,
        borderTopWidth : 1,
        borderColor : colors.gray,
        height : 100,
    }
});