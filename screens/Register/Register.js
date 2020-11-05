import { Layout, Text } from '@ui-kitten/components'
import React, { useState } from 'react'
import { Image, StyleSheet } from 'react-native'
import CustomButton from '../../components/CustomButton'
import TextInputFields from '../../components/TextInputFields'
import { INPUT_TYPE } from '../../contants'

function Register(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const onChangeUsername = (username) => {
        setUsername(username)
        console.log('username', username)
    }

    const onChangeEmail = (email) => {
        setEmail(email)
        console.log('email', email)
    }
    const onChangePassword = (password) => {
        setPassword(password)
        console.log('password', password)
    }
    const onRegister = () => {
        // TODO: 
        console.log('username', username)
        console.log('password', password)
        console.log('email', email)
    }
    return (
        <Layout style={styles.row}>
            <Text style={styles.text} category='h2'>Register</Text>
            <TextInputFields onTextChange={onChangeUsername} type={INPUT_TYPE.PLAINTEXT} label='Username' placeholder='Username...' />
            <TextInputFields onTextChange={onChangeEmail} type={INPUT_TYPE.EMAIL} label='Email' placeholder='Email...' />
            <TextInputFields onTextChange={onChangePassword} type={INPUT_TYPE.PASSWORD} label='Pasword' placeholder='Password...' />
            <CustomButton onButtonPress={onRegister} name='Register' />
        </Layout>
    )
}

Register.propTypes = {

}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    text: {
        margin: 2,
    },
});

export default Register

