import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import colors from '../../../assets/colors/colors';
import { period } from '../../utils/Schedule';

export default PeriodBox = (props) => {
    return(
        <View style = {{borderBottomLeftRadius : props.headRadius, ...styles.periodBoxStyle}} key = {period[props.idx]}>
            <Text 
                style = {{
                    fontFamily : 'KOTRA_HOPE_TTF',
                    fontSize : 15,
                }}
            >
                {period[props.idx]}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    periodBoxStyle : {
        borderWidth : 0.4,
        borderRightWidth : 1,
        borderColor : colors.gray,
        width : Dimensions.get('window').width * 0.1,
        height : Dimensions.get('window').width * 0.15,
        alignItems : 'center',
        justifyContent : 'center',
    },
})