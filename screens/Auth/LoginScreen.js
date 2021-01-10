import { StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

import Background from '../../components/Background';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';

import { login } from '../../actions/user.action';
import { INPUT_TYPE } from '../../contants';
import { getUserToken } from '../../selectors/user.selector'


function LoginScreen({ navigation, login, token }) {

    const styles = useStyleSheet(themedStyles);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onChangeEmail = (email) => {
        setEmail(email)
    }

    const onChangePassword = (password) => {
        setPassword(password)
    }

    const onLogin = async () => {
        login({ email, password })
    }

    useEffect(() => {
        console.log('token', token)
    }, [token])

    return (
        <Background>
            <Text style={styles.text} category='h1'>Welcome back.</Text>
            <TextInput onTextChange={onChangeEmail} type={INPUT_TYPE.PLAINTEXT} label='Email' placeholder='Email...' />
            <TextInput onTextChange={onChangePassword} type={INPUT_TYPE.PASSWORD} label='Password' placeholder='Password...' />
            <View style={styles.forgotPassword}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('ResetPassword')}
                >
                    <Text style={styles.label}>Forgot your password?</Text>
                </TouchableOpacity>
            </View>

            <Button onButtonPress={onLogin} name='Login' />

            <View style={styles.row}>
                <Text style={styles.label}>Don’t have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.link}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </Background>
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
        // margin: 5
    },
    label: {
        color: '#393e46',
    },
    link: {
        fontWeight: 'bold',
        color: 'color-primary-600',
    },
    forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 24,
    },
})
const mapStateToProps = (state) => {
    token = getUserToken(state)
    return { token }
}

export default connect(
    mapStateToProps,
    { login }
)(LoginScreen);

