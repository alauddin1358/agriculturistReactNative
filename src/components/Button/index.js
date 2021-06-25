import React from 'react'
import { TouchableOpacity, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'
import Text from '../Text'
import styles from './styles'


export const PrimaryButton = ({ onPress, btnStyle, btnText, spinnerColor, spinnerSize, loading }) => {

    return (
        <TouchableOpacity disabled={loading} onPress={onPress} style={[styles.btn, btnStyle]}>
            <Text
                center
                bold
                size={16}
                textColor
            >
                {btnText}
            </Text>

            {
                loading &&
                <ActivityIndicator
                    color={spinnerColor}
                    size={spinnerSize}
                    style={styles.spinner} />
            }
        </TouchableOpacity>
    )
}

PrimaryButton.propTypes = {
    btnText: PropTypes.string,
    loading: PropTypes.bool,
}

PrimaryButton.defaultProps = {
    spinnerColor: '#000',
    spinnerSize: 'small',
}

export const SecondaryButton = ({ onPress, btnStyle, btnText, spinnerColor, spinnerSize, loading }) => {

    return (
        <TouchableOpacity disabled={loading} onPress={onPress} style={[styles.secondbtn, btnStyle]}>
            <Text
                center
                size={16}
                white
            >
                {btnText}
            </Text>

            {
                loading &&
                <ActivityIndicator
                    color={spinnerColor}
                    size={spinnerSize}
                    style={styles.spinner} />
            }
        </TouchableOpacity>
    )
}

SecondaryButton.propTypes = {
    btnText: PropTypes.string,
    loading: PropTypes.bool,
}

SecondaryButton.defaultProps = {
    spinnerColor: '#fff',
    spinnerSize: 'small',
}