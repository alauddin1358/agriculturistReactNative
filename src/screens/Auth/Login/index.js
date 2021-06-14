import React, { useState } from "react"
import { ImageBackground, SafeAreaView, Image, TouchableOpacity } from "react-native"
import Block from '../../../components/Block'
import Text from '../../../components/Text'
import styles from './styles'
import { Actions } from "react-native-router-flux"
import { PrimaryInput } from "../../../components/TextInput"
import { PrimaryButton } from "../../../components/Button"
import checkLoginValidation from './validate'


export default LoginScreen = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitLogin = () => {
        if (checkLoginValidation(email, password)) {
            // Actions.drawer_dashboard()
        }
    }

    return (

        <Block block>
            <SafeAreaView block style={styles.container} >
                <ImageBackground style={styles.bgImg} source={require('../../../assets/images/green-bg-1.jpg')}>
                    <Block style={styles.loginBlock} center flex={false}>
                        <Image style={styles.logo} source={require('../../../assets/images/Social_Fish2.png')} />
                        <Text size={13} white>Login to Agriculturists</Text>

                        <PrimaryInput
                            placeholder="Enter Email"
                            autoCapitalize='none'
                            value={email}
                            onChangeText={val => setEmail(val)}
                        />
                        <PrimaryInput
                            placeholder="Enter Password"
                            secureTextEntry={true}
                            value={password}
                            onChangeText={val => setPassword(val)}
                        />

                        <Block flex={false} margin={[30, 0, 0]}>
                            <PrimaryButton onPress={submitLogin} btnText="Login" />
                        </Block>

                        <Block row center flex={false} padding={[10, 0]}>
                            <Text style={{ marginRight: 5 }} white>not a user ?</Text>
                            <TouchableOpacity onPress={() => Actions.regi()}>
                                <Text white>register here</Text>
                            </TouchableOpacity>
                        </Block>
                        <TouchableOpacity>
                            <Text white>Forgot Password ?</Text>
                        </TouchableOpacity>
                    </Block>
                </ImageBackground>
            </SafeAreaView>
        </Block>

    );
}