import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import colors from '../../assets/colors/colors';

const UserScreen = () => {
    return(
        <View>
            <Text>
                User
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    topBoxStyle : {
        color : colors.crimson,
    },
})

export default UserScreen;