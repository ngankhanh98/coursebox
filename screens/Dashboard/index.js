import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';
import React, { useEffect } from 'react';
import { ToastAndroid } from 'react-native';
import { connect } from 'react-redux';
import { getToast } from '../../selectors/toast.selector';
import { LoginScreen, RegisterScreen, ResetPasswordScreen, WelcomeScreen } from '../Auth';
import AccountScreen from './AccountScreen';
import BrowseScreen from './BrowseScreen';




const { Navigator, Screen } = createBottomTabNavigator();
const Stack = createStackNavigator();

const AuthNavigator = () =>
    <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Account" component={AccountScreen} options={{ headerShown: false }} />
    </Stack.Navigator>


const BottomTabBar = ({ navigation, state }) => (
    <BottomNavigation
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <BottomNavigationTab title='Browser' />
        <BottomNavigationTab title='User' />
    </BottomNavigation>
);


const TabNavigator = () => (
    <Navigator tabBar={props => <BottomTabBar {...props} />}>
        <Screen name='Browse' component={BrowseScreen} />
        <Screen name='User' component={AuthNavigator} />
    </Navigator>
);

const AppNavigator = ({ toast }) => {

    useEffect(() => {
        ToastAndroid.show(toast.message, ToastAndroid.SHORT)
    }, [toast])

    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>)
}

const mapStateToProps = (state) => {
    toast = getToast(state)
    return { toast }
}
export default connect(mapStateToProps)(AppNavigator)