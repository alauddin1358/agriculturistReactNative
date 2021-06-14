import React from "react";
import { TextInput } from "react-native"
import Text from '../Text'
import styles from './styles'
import { colors } from '../../styles/theme'



const PrimaryInput = ({ ...rest }) => {

    return (

        <TextInput
            style={styles.input}
            placeholderTextColor="#fff"
            {...rest}
        />


    );
}


export {
    PrimaryInput,
}