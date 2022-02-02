import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import colors from '../../assets/colors/colors';

const SettingScreen = () => {
    return(
        <View>
            <Text>
                Setting
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    topBoxStyle : {
        color : colors.crimson,
    },
})

export default SettingScreen;