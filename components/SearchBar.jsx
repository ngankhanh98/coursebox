import { Icon, Input, TopNavigation } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet } from 'react-native';


const SearchIcon = (props) => (
    <Icon {...props} name='search-outline' />
);

const SearchInput = () => (<Input accessoryLeft={SearchIcon} style={styles.searchBar} size='large' />)

export const SearchBar = () => (
    <TopNavigation
        accessoryLeft={SearchInput}
    />
);


const styles = StyleSheet.create({
    searchBar: {
        padding: 4,
        marginTop: 50,
        borderRadius: 40,
        minWidth: '100%',

    }
})

export default SearchBar