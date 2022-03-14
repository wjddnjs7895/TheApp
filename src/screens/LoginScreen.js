import React from 'react';
import {StyleSheet ,View} from 'react-native';
import colors from '../../assets/colors/colors';

import Styles from '../styles/Styles';
import Title from '../components/Title';
import Input from '../components/Input';
import LoginButton from '../components/Button/LoginButton';
import RegisterButton from '../components/Button/RegisterButton';

const LoginScreen = () => {
    return (
        <View style = {Styles.pageStyle}>
            <Title />
            <Input 
                icon = {require('../../assets/images/Logo_ID_Crimson.png')}
                text = {"아이디를 입력하세요."}
            />
            <Input 
                icon = {require('../../assets/images/Logo_Password_Crimson.png')} 
                text = {"비밀번호를 입력하세요."}
                secureTextEntry = {true}
            />
            <LoginButton />
            <RegisterButton />
        </View>
    )
}

export default LoginScreen;