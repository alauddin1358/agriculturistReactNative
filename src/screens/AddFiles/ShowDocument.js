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


export default ShowDocument = ({ navigation }) => {



    return (

        <Block block padding={[30,0]}>
            <Block style={styles.table}>
                <Text style={styles.td}>Title</Text>
                <Text style={styles.td}>Description</Text>
                <Text style={styles.td}>View File</Text>
                <Text style={styles.td}>Download File</Text>
            </Block>
            <Block style={styles.table}>
                <Text style={styles.td}>aaa</Text>
                <Text style={styles.td}>sss</Text>
                <TouchableOpacity style={styles.td}>
                    <Text color={colors.primaryColor}>View</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.td}>
                    <Text color={colors.primaryColor}>Download</Text>
                </TouchableOpacity>
            </Block>
        </Block>

    );
}