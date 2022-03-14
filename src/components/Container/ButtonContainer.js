import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

import SelectButton from '../SelectButton';
import Button from '../Button';

export default ButtonContainer = () => {
    return(
        <View style = {styles.buttonContainerStyle}>
            <SelectButton text = {"시간표 선택"} icon = {require('../../../assets/images/Logo_Arrow_Crimson.png')}/>
            <Button icon = {require('../../../assets/images/Logo_Plus_Crimson.png')} />
            <Button icon = {require('../../../assets/images/Logo_Delete_Crimson.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainerStyle : {
        width : Dimensions.get('window').width * 0.85,
        flexDirection : "row",
        justifyContent : "flex-end",
        marginTop : Dimensions.get('window').height * 0.05,
        marginBottom : Dimensions.get('window').height * 0.026,
    },
})