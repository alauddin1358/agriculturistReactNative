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
import AddDocument from "./AddDocument"
import ShowDocument from "./ShowDocument"


export default AddFile = ({ navigation }) => {

    const [setp, setStep] = useState(1)

    const renderStep = () => {
        switch (setp) {
            case 1:
                return (
                    <AddDocument />
                )
            case 2:
                return (
                    <ShowDocument />

                )
        }
    }


    return (

        <Block block>
            <Navbar
                onPressProfile={() => navigation.navigate('profile')}
                onPressDrawer={() => navigation.openDrawer()}
            />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={styles.container}>
                <Text textColor size={20}>File Upload And Download</Text>
                <Block flex={false} row center>
                    <TouchableOpacity onPress={()=> setStep(1)} style={{ padding: 10 }}>
                        <Text color={colors.primaryColor} size={18}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> setStep(2)} style={{ padding: 10 }}>
                        <Text size={18} color={colors.primaryColor}>Files List</Text>
                    </TouchableOpacity>
                </Block>
                <Block flex={false}>
                    {renderStep()}
                </Block>
                <AdsCarousel />
            </ScrollView>
        </Block>

    );
}