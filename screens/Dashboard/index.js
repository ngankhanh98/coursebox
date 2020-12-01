import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';
import BrowseScreen from './BrowseScreen';
import AccountScreen from './AccountScreen'
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, RegisterScreen, ResetPasswordScreen, WelcomeScreen } from '../Auth';
const { Navigator, Screen } = createBottomTabNavigator();

const Stack = createStackNavigator();


const AuthNavigator = () =>
    // <NavigationContainer>
    <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Account" component={AccountScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
// </NavigationContainer>


const BottomTabBar = ({ navigation, state }) => (
    <BottomNavigation
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <BottomNavigationTab title='BROWSE' />
        <BottomNavigationTab title='USER' />
    </BottomNavigation>
);


const TabNavigator = () => (
    <Navigator tabBar={props => <BottomTabBar {...props} />}>
        <Screen name='Browse' component={BrowseScreen} />
        <Screen name='User' component={AuthNavigator} />
    </Navigator>
);


export default AppNavigator = () => (
    <NavigationContainer>
        <TabNavigator />
    </NavigationContainer>
);