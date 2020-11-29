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

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onChangeName = (name) => {
        setName(name)
        console.log('name', name)
    }

    const onChangeUsername = (username) => {
        setUsername(username)
        console.log('username', username)
    }

    const onChangePassword = (password) => {
        setPassword(password)
        console.log('password', password)
    }

    const onSignUp = () => {
        console.log('name', name)
        console.log('username', username)
        console.log('password', password)
        // TODO: call api & update global state
    }
    return (
        <Layout style={styles.container}>
            <Background>
                {/* <Logo /> */}
                <Text style={styles.text} category='h1'>Create account</Text>
                <TextInput onTextChange={onChangeName} type={INPUT_TYPE.PLAINTEXT} label='Name' placeholder='Name...' />
                <TextInput onTextChange={onChangeUsername} type={INPUT_TYPE.PLAINTEXT} label='Username' placeholder='Username...' />
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
export default LoginScreen

