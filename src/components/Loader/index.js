import React from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import Block from '../Block'

export const Loader = ({ size, color }) => {

    return (
        <Block block center middle style={styles.loading}>
            <ActivityIndicator size={size} color={color} />
        </Block>
    )
}

Loader.defaultProps = {
    color: '#222',
    size: 'large',
}

const styles = StyleSheet.create({
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        opacity: 0.9,
        zIndex: 999999999,
        backgroundColor: '#FFFFFF',
    },
})