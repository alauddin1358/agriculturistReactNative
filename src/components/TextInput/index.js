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

const ProfileInput = ({ title, ...rest }) => {

    return (

        <>
            <Text size={15} bold style={{ paddingVertical: 5 }}>{title}</Text>
            <TextInput
                style={styles.profileInput}
                placeholderTextColor="gray"
                {...rest}
            />
        </>


    );
}


export {
    PrimaryInput,
    ProfileInput
}