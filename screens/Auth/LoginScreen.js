import { Layout, StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Background from '../../components/Background';
import Button from '../../components/Button';
import Logo from '../../components/Logo';
import TextInput from '../../components/TextInput';
import { INPUT_TYPE } from '../../contants';


function LoginScreen({ navigation }) {

    const styles = useStyleSheet(themedStyles);

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
        // <Layout style={styles.container}>
        <Background>
            {/* <Logo /> */}
            <Text style={styles.text} category='h1'>Welcome back.</Text>
            <TextInput onTextChange={onChangeUsername} type={INPUT_TYPE.PLAINTEXT} label='Username' placeholder='Username...' />
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
        // </Layout>
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
export default LoginScreen

