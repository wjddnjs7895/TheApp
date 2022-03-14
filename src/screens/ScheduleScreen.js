import React, {useState} from 'react';
import {View} from 'react-native';

import ButtonContainer from '../components/Container/ButtonContainer';
import Schedule from '../components/Schedule';
import TextButton from '../components/Button/TextButton';
import HideTab from '../components/Tab/HideTab';
import InfoTab from '../components/Tab/InfoTab';
import {setData, setListBox } from '../utils/Schedule';

const ScheduleScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const data = setData();
    const listBox = setListBox(data);
      
    return(
        <View style = {{
            alignItems : 'center',
            justifyContent : 'center',
        }}>
            <ButtonContainer />           
            <Schedule listBox = {listBox}/>
            <TextButton text = {"정보 보기"} icon = {require('../../assets/images/Logo_Arrow_Crimson.png')} onPress = {setModalVisible}/>
            <HideTab />
            <InfoTab modalVisible = {modalVisible} setModalVisible = {setModalVisible}/>
        </View>
    );
}

export default ScheduleScreen;