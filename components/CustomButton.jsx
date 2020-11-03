import React from 'react'
import PropTypes from 'prop-types'
import { Button, Layout } from '@ui-kitten/components'

function CustomButton({ onButtonPress, name }) {
    return (
        <Button onPress={() => onButtonPress()}>
            {name.toString().toUpperCase()}
        </Button>
    )
}

CustomButton.propTypes = {
    onButtonPress: PropTypes.func,
    name: PropTypes.string
}

export default CustomButton

