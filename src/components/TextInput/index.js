import React from "react";
import { TextInput } from "react-native"
import Text from '../Text'
import styles from './styles'
import { colors } from '../../styles/theme'



const PrimaryInput = ({ ...rest }) => {

    return (

        <TextInput
            style={styles.input}
            placeholderTextColor="#d2d2d2"
            {...rest}
        />


    );
}


export {
    PrimaryInput,
}