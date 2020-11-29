
import * as React from 'react'
import { LoginScreen, RegisterScreen, ResetPasswordScreen, WelcomeScreen } from '../screens/Auth'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

function AuthRouter() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AuthRouter
