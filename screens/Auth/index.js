import { createStackNavigator } from '@react-navigation/stack';
import { getUserToken } from '../../selectors/user.selector';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import ResetPasswordScreen from './ResetPasswordScreen';
import WelcomeScreen from './WelcomeScreen'
import AccountScreen from './AccountScreen'
import { connect } from 'react-redux';
import React from 'react';


const Stack = createStackNavigator();

const AuthNavigator = ({ token }) => {
    console.log('token', token)
    return <Stack.Navigator>
        {token ? (
            // User is signed in
            <Stack.Screen name="Account" component={AccountScreen} />
        ) : (
                // No token found, user isn't signed in
                <>
                    <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} options={{ headerShown: false }} />
                </>
            )}

    </Stack.Navigator>
}

const mapStateToProps = (state) => {
    const token = getUserToken(state)
    return { token }
}
export default connect(mapStateToProps)(AuthNavigator)
