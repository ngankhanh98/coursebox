import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';
import React, { useEffect } from 'react';
import { ToastAndroid } from 'react-native';
import { connect } from 'react-redux';
import { getToast } from '../../selectors/toast.selector';
import { getUserToken } from '../../selectors/user.selector'
import AuthNavigator from '../Auth';
import BrowseScreen from './BrowseScreen';

const { Navigator, Screen } = createBottomTabNavigator();



const BottomTabBar = ({ navigation, state }) => (
    <BottomNavigation
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <BottomNavigationTab title='Browser' />
        <BottomNavigationTab title='User' />
    </BottomNavigation>
);


const TabNavigator = () => {
    return (
        <Navigator tabBar={props => <BottomTabBar {...props} />}>
            <Screen name='Browse' component={BrowseScreen} />
            <Screen name='User' component={AuthNavigator} />
        </Navigator>
    )
}

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