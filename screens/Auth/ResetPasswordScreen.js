import { Layout, StyleService, useStyleSheet, Text } from '@ui-kitten/components';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
// import BackButton from '../components/BackButton';
import Background from '../../components/Background';
import Button from '../../components/Button';
import Logo from '../../components/Logo';
import TextInput from '../../components/TextInput';


const ResetPasswordScreen = ({ navigation }) => {

    const styles = useStyleSheet(themedStyles)

    const [email, setEmail] = useState({ value: '', error: '' });

    const _onSendPressed = () => {
        // const emailError = emailValidator(email.value);

        if (emailError) {
            setEmail({ ...email, error: emailError });
            return;
        }

        // navigation.navigate('LoginScreen');
    };

    return (
        // <Layout>
        <Background>
            {/* <BackButton goBack={() => navigation.navigate('LoginScreen')} /> */}

            {/* <Logo /> */}

            {/* <Header>Restore Password</Header> */}
            <Text style={styles.text} category='h1'>Reset password</Text>

            <TextInput
                label="E-mail address"
                returnKeyType="done"
                value={email.value}
                onChangeText={text => setEmail({ value: text, error: '' })}
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
                placeholder="Email address"
            />

            <Button onButtonPress={_onSendPressed} style={styles.button} name="Reset password"></Button>

            <TouchableOpacity
                style={styles.back}
            onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.label}>← Back to login</Text>
            </TouchableOpacity>
        </Background>
    );
};

const themedStyles = StyleService.create({
    back: {
        width: '100%',
        marginTop: 12,
    },
    button: {
        marginTop: 12,
    },
    label: {
        color: 'blue',
        width: '100%',
    },
    text: {
        textAlign: 'center',
        color: '#120078',
        fontWeight: 'bold'
    },
});

export default ResetPasswordScreen;
