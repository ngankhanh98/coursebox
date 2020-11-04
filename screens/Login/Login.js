import { Layout, Text } from '@ui-kitten/components';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import CustomButton from '../../components/CustomButton';
import TextInputFields from '../../components/TextInputFields';
import { INPUT_TYPE } from '../../contants';


function Login(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onChangeUsername = (username) => {
        setUsername(username)
        console.log('username', username)
    }

    const onChangePassword = (password) => {
        setPassword(password)
        console.log('password', password)
    }

    const onLogin = () => {
        console.log('username', username)
        console.log('password', password)
        // TODO: call api & update global state
    }
    return (
        <Layout >
            <Text>Login</Text>
            <TextInputFields onTextChange={onChangeUsername} type={INPUT_TYPE.PLAINTEXT} label='Username' placeholder='Username...' />
            <TextInputFields onTextChange={onChangePassword} type={INPUT_TYPE.PASSWORD} label='Password' placeholder='Password...' />
            <CustomButton onButtonPress={onLogin} name='Login' />
        </Layout>
    )
}

const styles = StyleSheet.create({

})
export default Login

