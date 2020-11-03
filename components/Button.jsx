import React from 'react'
import PropTypes from 'prop-types'

function Button({ onPress, name }) {
    return (
        <Button onPress={onPress}>
            {{ name }}
        </Button>
    )
}

Button.propTypes = {
    onPress: PropTypes.func,
    name: PropTypes.string
}

export default Button

