import React, { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Icon, Input } from '@ui-kitten/components';
import PropTypes from 'prop-types'
import { INPUT_TYPE } from '../contants';

const AlertIcon = (props) => (
    <Icon {...props} name='alert-circle-outline' />
);

const TextInputFields = ({ value, type, onTextChange, placeholder, caption, label, disable }) => {

    const [secureTextEntry, setSecureTextEntry] = useState(type === INPUT_TYPE.PASSWORD)

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    const renderIcon = (props) => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
            <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
        </TouchableWithoutFeedback>
    );

    return (
        <Input
            value={value}
            label={label}
            placeholder={placeholder}
            caption={caption}
            accessoryRight={type === INPUT_TYPE.PASSWORD ? renderIcon : null}
            captionIcon={caption ? AlertIcon : null}
            secureTextEntry={secureTextEntry}
            onChangeText={(e) => onTextChange(e)}
            disabled={disable}
        />
    );
};

TextInputFields.propTypes = {
    value: PropTypes.string,
    type: PropTypes.string,
    onTextChange: PropTypes.func,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    caption: PropTypes.string,
    disable: PropTypes.bool
};


export default TextInputFields


