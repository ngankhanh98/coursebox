import { Icon, MenuItem, OverflowMenu, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { getUserAvatarUrl } from '../selectors/user.selector'

const LogoIcon = (props) => (
    <Image source={require('../assets/logo.png')} style={{ width: 30, height: 30 }}>
    </Image>
);

const Search = (props) => (
    <Icon {...props} name='search-outline' />
);


const AvatarIcon = (props) => (
    <Icon {...props} name='people-outline' />
);

const InfoIcon = (props) => (
    <Icon {...props} name='info' />
);

const LogoutIcon = (props) => (
    <Icon {...props} name='log-out' />
);

const TopNavigationBar = () => {

    const [menuVisible, setMenuVisible] = React.useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const renderMenuAction = () => (
        <TopNavigationAction icon={AvatarIcon} onPress={toggleMenu} />
    );

    const renderRightActions = () => (<>
        <TopNavigationAction icon={Search} />
        <OverflowMenu
            anchor={renderMenuAction}
            visible={menuVisible}
            onBackdropPress={toggleMenu}>
            <MenuItem accessoryLeft={InfoIcon} title='About' />
            <MenuItem accessoryLeft={LogoutIcon} title='Logout' />
        </OverflowMenu>
    </>
    );

    const renderBackAction = () => (
        <TopNavigationAction icon={LogoIcon} />
    );

    return (
        <TopNavigation
            alignment='center'
            accessoryLeft={renderBackAction}
            accessoryRight={renderRightActions}
            styles={styles.container}
        />
    );
};



const styles = StyleSheet.create({
    container: {
        minHeight: 10,
        backgroundColor: '#48426d'
    },
});

export default TopNavigationBar

