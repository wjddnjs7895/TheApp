import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import colors from '../../../assets/colors/colors';
import { day } from '../../utils/Schedule';

export default DayBox = (props) => {
    return(
        <View 
            style = {{
                ...styles.dayBoxStyle, 
                borderRightWidth : props.headBorder,
                borderTopLeftRadius : props.headRadius,
                borderTopRightRadius : props.tailRadius,
                width : props.headWidth,
            }} >
            <Text 
                style = {{
                    fontFamily : 'KOTRA_HOPE_TTF',
                    color : colors.white,
                }}
            >
                {day[props.idx]}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    dayBoxStyle : {
        backgroundColor : colors.crimson,
        borderWidth : 0.4,
        borderColor : colors.gray,
        height : Dimensions.get('window').width * 0.05,
        alignItems : 'center',
        justifyContent : 'center',
    },
})