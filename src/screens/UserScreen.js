import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import colors from '../../assets/colors/colors';

import LoginScreen from './LoginScreen';

const UserScreen = () => {
    return (
        <LoginScreen />
    );
    // return(
    //     <View>
    //         <Text>
    //             User
    //         </Text>
    //     </View>
    // );
}

const styles = StyleSheet.create({
    topBoxStyle : {
        color : colors.crimson,
    },
})

export default UserScreen;