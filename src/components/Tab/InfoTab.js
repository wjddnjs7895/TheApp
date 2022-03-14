import React from 'react';
import {Modal, View, StyleSheet, Dimensions} from 'react-native';
import colors from '../../../assets/colors/colors';

export default InfoTab = (props) => {
    return (
        <Modal 
            visible = {props.modalVisible}
            animationType='slide'
            transparent = {true}
            onRequestClose={() => props.setModalVisible(false)}
        >
            <View
                style = {styles.modalStyle}
            >

            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalStyle : {
        marginTop : 20,
        justifyContent : 'center',
        alignItems : 'center',
        width : Dimensions.get('window').width,
        height : Dimensions.get('window').height * 0.7,
        backgroundColor : colors.white,
    }
})