import React from 'react'
import { Image, StyleSheet } from 'react-native'
import Text from '../Text'
import Block from '../Block'

const EmptyData = ({ text }) => {

    return (
        <Block block center middle margin={[0, 0, 0]}>
            <Image
                resizeMode='contain'
                style={styles.img}
                source={require('../../assets/images/emptyData.png')}
            />
            <Text style={styles.text} textColor2>{text}</Text>
        </Block>
    )
}

EmptyData.defaultProps = {
    text: 'No data found',
}

const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: 160
    },
    text: {
        marginTop: 10,
        fontFamily: 'QuickSand-Bold',
        fontSize: 14
    },
})

export default EmptyData