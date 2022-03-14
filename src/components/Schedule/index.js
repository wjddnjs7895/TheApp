import React from 'react';
import {View, StyleSheet, Dimensions } from 'react-native';
import colors from '../../../assets/colors/colors';

export default Schedule = (props) => {
    return(
        <View style = {styles.scheduleStyle}>
            {props.listBox}
        </View>
    );
}

const styles = StyleSheet.create({
    scheduleStyle : {
        flexDirection : "row",
        flexWrap : "wrap",
        width : Dimensions.get('window').width * 0.85, 
        height : Dimensions.get('window').width * 1.1,
        borderRadius : 10, 
        elevation : 5, 
        backgroundColor : colors.white
    },
})