import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import colors from '../../assets/colors/colors';

const TipScreen = () => {
    return(
        <View>
            <Text>
                Tip
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    topBoxStyle : {
        color : colors.crimson,
    },
})

export default TipScreen;