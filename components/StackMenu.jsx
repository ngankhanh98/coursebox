import React from 'react';
import { Button, Icon, List, ListItem } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

// const data = new Array(8).fill({
//     title: 'Title for Item',
// });

const data = [{ title: 'Personal infor' },
{ title: 'Enrolled courses' },
{ title: 'Settings' },
{ title: 'Logout' },]
function StackMenu() {

    const renderItemAccessory = (props) => (
        <Button size='tiny'>FOLLOW</Button>
    );

    const renderItemIcon = (props) => (
        <Icon {...props} name='person' />
    );

    const renderItem = ({ item, index }) => (
        <ListItem
            title={item.title}
            accessoryLeft={renderItemIcon}
            accessoryRight={renderItemAccessory}
        />
    );

    return (
        <List
            data={data}
            renderItem={renderItem}
        />
    );
};



export default StackMenu