import { Layout, Text } from '@ui-kitten/components';
import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import CustomButton from '../../components/CustomButton';
import TextInputFields from '../../components/TextInputFields';
import { INPUT_TYPE } from '../../contants';


function ForgotPassword(props) {
    const username = 'ngankhanh98'
    const [email, setEmail] = useState('')


    const onChangeEmail = (email) => {
        setEmail(email)
        console.log('email', email)
    }

    const onLogin = () => {
        console.log('username', username)
        console.log('email', email)
        // TODO: call api & update global state
    }

    return (
        <Layout>
            <Image source={require('../../assets/drawable-ldpi/logo.png')}></Image>
            <Text category='h2'>Forgot password</Text>
            <TextInputFields type={INPUT_TYPE.EMAIL} onTextChange={onChangeEmail} label='Email' />
            <CustomButton onButtonPress={onLogin} name='Send email' />
        </Layout>
    )
}

const style = StyleSheet.create({
});
export default ForgotPassword


