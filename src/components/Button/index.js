import React from "react";
import { TouchableOpacity } from "react-native"
import Text from '../Text'
import styles from './styles'




const PrimaryButton = ({ onPress, btnText }) => {

    return (

        <TouchableOpacity onPress={onPress} style={styles.btn}>
                {btnText && <Text center size={13} textColor>{btnText}</Text>}
        </TouchableOpacity>

    );
}


export {
    PrimaryButton
}