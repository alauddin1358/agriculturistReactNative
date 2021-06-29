import React, { useState } from "react"
import { ScrollView, TextInput, TouchableOpacity } from "react-native"
import Toast from 'react-native-simple-toast'
import Block from '../../components/Block'
import Text from '../../components/Text'
import styles from './styles'
import { Navbar } from "../../layouts/Navbar"
import AdsCarousel from '../Carousel'
import { SecondaryButton } from '../../components/Button'
import { colors } from "../../styles/theme"


export default AddDocument = ({ navigation }) => {



    return (

        <Block flex={false}>
            <Block flex={false} padding={[20, 0, 0]}>
                <TextInput
                    style={styles.titleBlock}
                    placeholder="Enter title"
                />
            </Block>
            <Block flex={false} padding={[10, 0]}>
                <TextInput
                    style={styles.titleBlock}
                    placeholder="Enter Description"
                />
            </Block>
            <TouchableOpacity style={styles.upload}>
                <Text textColor> Click here to select pdf file</Text>
            </TouchableOpacity>
            <SecondaryButton
                btnText="Submit"
                btnStyle={{ width: '40%', marginBottom: 20 }} />
        </Block>

    );
}