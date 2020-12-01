import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native';
import { Button as UIButton, Layout } from '@ui-kitten/components'

function Button({ onButtonPress, name, ...props }) {
    return (
        <UIButton {...props} onPress={() => onButtonPress()} style={styles.main}>
            {name.toString().toUpperCase()}
        </UIButton>
    )
}

Button.propTypes = {
    onButtonPress: PropTypes.func,
    name: PropTypes.string
}

const styles = StyleSheet.create({
    main: {
        margin: 8
    }
})


export default Button

