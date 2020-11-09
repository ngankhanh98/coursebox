import { Block, Input, Text, theme } from 'galio-framework';
import { default as React } from 'react';
import PropTypes from 'prop-types'

import {
    Dimensions, StyleSheet
} from 'react-native';
import { Icon } from '.';
import { materialTheme } from '../constants';

const { width } = Dimensions.get('screen');

const thumbMeasure = (width - 48 - 32) / 3;

function CustomInput({ label, placeholder, type }) {
    return (
        <Block flex style={styles.group}>
            <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
                <Text bold size={16} style={styles.title}>{label}</Text>
                <Input
                    right
                    placeholder={placeholder}
                    placeholderTextColor={materialTheme.COLORS.DEFAULT}
                    style={{ borderRadius: 3, borderColor: materialTheme.COLORS.INPUT }}
                    // {...type === 'password' ? 'password' : null}
                    password={type === 'password'}
                    iconContent={<Icon name='alert-circle-outline' />}
                /*iconContent={<Icon size={16} color={theme.COLORS.ICON} name="camera-18" family="GalioExtra" />}*/
                />
            </Block>
        </Block>
    )
}

const styles = StyleSheet.create({
    // title: {
    // paddingVertical: theme.SIZES.BASE,
    // paddingHorizontal: theme.SIZES.BASE,
    // },
    group: {
        paddingTop: theme.SIZES.BASE * 2,
    },
})

CustomInput.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string
}

export default CustomInput

