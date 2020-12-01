import { Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet } from 'react-native';
import Background from '../../components/Background';
import Button from '../../components/Button';
import Logo from '../../components/Logo';

const WelcomeScreen = ({ navigation }) => (
    <Background>
        {/* <Logo /> */}
        <Text style={styles.header} category='h1'>Coursebox</Text>
        <Text style={styles.text} >Find your next favorite courses</Text>
        <Button
            // onPress={}
            name="Login"
            appearance='filled'
            onButtonPress={() => navigation.navigate('Login')}
        />
        <Button
            name="Sign Up"
            appearance='outline'
            onButtonPress={() => navigation.navigate('Register')}
        />
    </Background>
);

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        textAlign: 'center',
        color: '#120078',
        fontWeight: 'bold'
    },
    text: {
        textAlign: 'center',
        margin: 10
    },
})

export default WelcomeScreen
