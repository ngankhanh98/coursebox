import { Layout, StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

import Background from '../../components/Background';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';

import { CAPTION, INPUT_TYPE } from '../../contants';
import { register } from '../../actions/user.action'



function RegisterScreen({ navigation, register }) {

    const styles = useStyleSheet(themedStyles);

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [usernameValidation, setUsernameValidation] = useState(null)
    const [emailValidation, setEmailValidation] = useState(null)
    const [phoneValidation, setPhoneValidation] = useState(null)


    const onChangeUsername = (username) => {
        setUsername(username)
    }

    const onChangePassword = (password) => {
        setPassword(password)
    }

    const onChangeEmail = (email) => {
        setEmail(email)
    }

    const onChangePhone = (phone) => {
        setPhone(phone)
    }
    const onSignUp = async () => {
        // validate
        const usernameRegex = RegExp(/^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/g);
        setUsernameValidation(usernameRegex.test(username) ? null : CAPTION.INVALID_USERNAME)

        setEmailValidation(email.includes('@') ? null : CAPTION.INVALID_EMAIL_INPUT)

        const phoneRegex = RegExp(/^\d+$/g);
        setPhoneValidation(phoneRegex.test(phone) ? null : CAPTION.INVALID_PHONE)

        if (!usernameValidation && !emailValidation && !phoneValidation)
            register({ username, email, phone, password })
    }

    return (
        <Layout style={styles.container}>
            <Background>
                <Text style={styles.text} category='h1'>Create account</Text>
                <TextInput onTextChange={onChangeUsername} type={INPUT_TYPE.PLAINTEXT} label='Username' placeholder='Username...' caption={usernameValidation} />
                <TextInput onTextChange={onChangeEmail} type={INPUT_TYPE.EMAIL} label='Email' placeholder='Email...' caption={emailValidation} />
                <TextInput onTextChange={onChangePhone} type={INPUT_TYPE.PLAINTEXT} label='Phone' placeholder='Phone...' caption={phoneValidation} />
                <TextInput onTextChange={onChangePassword} type={INPUT_TYPE.PASSWORD} label='Password' placeholder='Password...' />

                <Button onButtonPress={onSignUp} name='Sign up' />

                <View style={styles.row}>
                    <Text style={styles.label}>Already has an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.link}>Login</Text>
                    </TouchableOpacity>
                </View>
            </Background>
        </Layout>
    )
}

const themedStyles = StyleService.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        color: '#120078',
        fontWeight: 'bold'
    },
    row: {
        flexDirection: 'row',
        margin: 5
    },
    label: {
        color: '#393e46',
    },
    link: {
        fontWeight: 'bold',
        color: 'color-primary-600',
    },
})
export default connect(null, { register })(RegisterScreen)

