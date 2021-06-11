import React from "react";
import { TouchableOpacity } from "react-native";
import LinearGradient from 'react-native-linear-gradient'
import Block from '../Block'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Text from '../Text'
import styles from './styles'
import { colors } from '../../styles/theme'




const SectionBtn = ({ onPress, title, heading, color }) => {

    return (

        <TouchableOpacity onPress={onPress}>
            <LinearGradient
                start={{ x: 1, y: 1 }}
                end={{ x: 1, y: 0 }}
                colors={color ? color : [colors.primaryColor, '#08e287'] }
                style={styles.centerBtn}>
                <Text center size={17} white>{heading}</Text>
                {title && <Text center size={13} style={{ maxWidth: 110 }} white>{title}</Text>}
            </LinearGradient>
        </TouchableOpacity>

    );
}

const SectionBtnBlock = ({ onPress, title, heading, btnStyle }) => {

    return (

        <TouchableOpacity onPress={onPress}>

            <LinearGradient
                start={{ x: 1, y: 1 }}
                end={{ x: 1, y: 0 }}
                colors={[colors.primaryColor, '#08e287']}
                style={[styles.centerBtnList, btnStyle]}>
                <Text center bold style={{ marginRight: 10 }} size={17} white>{heading}</Text>
                {title && <Text bold center size={15} white>{title}</Text>}
            </LinearGradient>
        </TouchableOpacity >

    );
}


const SectionBtnBlock2 = ({ onPress, title, heading, color }) => {

    return (

        <TouchableOpacity onPress={onPress}>

            <LinearGradient
                start={{ x: 1, y: 1 }}
                end={{ x: 1, y: 0 }}
                colors={color ? color : [colors.primaryColor, '#08e287']}
                style={styles.centerBtnList2}>
                <Text center bold style={{ marginRight: 10 }} size={14} white>{heading}</Text>
                {title && <Text bold center size={12} white>{title}</Text>}
            </LinearGradient>
        </TouchableOpacity >

    );
}


const SectionBtn2 = ({ onPress, title }) => {

    return (

        <TouchableOpacity onPress={onPress}>
            <LinearGradient
                start={{ x: 1, y: 1 }}
                end={{ x: 1, y: 0 }}
                color={['#670021', '#08e287']}
                style={styles.centerBtn2}>
                <Text size={15} white>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>

    );
}


const BottomBtn = ({ onPress, title, btnStyle, color }) => {

    return (

        <TouchableOpacity onPress={onPress}>
            <LinearGradient
                start={{ x: 1, y: 1 }}
                end={{ x: 1, y: 0 }}
                colors={color ? color : [colors.primaryColor, '#04bfb2']}
                style={[styles.bottomBtn, btnStyle]}>
                <Text size={15} white>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>


    );
}


export {
    SectionBtn,
    SectionBtn2,
    BottomBtn,
    SectionBtnBlock,
    SectionBtnBlock2,
}