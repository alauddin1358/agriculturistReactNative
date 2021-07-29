import React, { useState } from 'react'
import { ImageBackground, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import Block from '../../../components/Block'
import Text from '../../../components/Text'
import styles from './styles'
import { PrimaryInput } from '../../../components/TextInput'
import { PrimaryButton } from '../../../components/Button'

export default ForgotPassword = ({ navigation }) => {


    return (

        <Block block>
            <SafeAreaView block style={styles.container} >
                <ImageBackground style={styles.bgImg} source={require('../../../assets/images/green-bg-1.jpg')}>
                    <Block style={styles.loginBlock} center flex={false}>
                        <Image style={styles.logo} source={require('../../../assets/logo.png')} />
                        <Text size={13} white>Forgot Password</Text>

                        <PrimaryInput
                            placeholder="Enter Email"
                            autoCapitalize='none'
                        />

                        <Block width flex={false} margin={[30, 0, 0]}>
                            <PrimaryButton
                                btnText="Send Email" />
                        </Block>
                        <Block width flex={false} margin={[20, 0, 0]}>
                            <PrimaryButton
                                onPress={() => navigation.navigate('login')}
                                btnText="Back" />
                        </Block>

                    </Block>
                </ImageBackground>
            </SafeAreaView>
        </Block>

    )
}