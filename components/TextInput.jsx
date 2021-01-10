import React, { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Icon, Input, useTheme } from '@ui-kitten/components';
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native';
import { INPUT_TYPE } from '../contants';


const AlertIcon = (props) => (
    <Icon {...props} name='alert-circle-outline' />
);

const TextInput = ({ value, type, onTextChange, placeholder, caption, label }) => {

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
        <Input style={styles.main}
            size='large'
            status={!caption ? null : 'danger'}
            value={value}
            placeholder={placeholder}
            caption={caption}
            accessoryRight={type === INPUT_TYPE.PASSWORD ? renderIcon : null}
            captionIcon={caption ? AlertIcon : null}
            secureTextEntry={secureTextEntry}
            onChangeText={(e) => onTextChange(e)}
        />
    );
};

TextInput.propTypes = {
    value: PropTypes.string,
    type: PropTypes.string,
    onTextChange: PropTypes.func,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    caption: PropTypes.string,
};


const styles = StyleSheet.create({
    main: {
        marginVertical: 7,
    }
})

export default TextInput


