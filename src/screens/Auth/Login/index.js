import React, { useState } from 'react'
import { ImageBackground, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import Toast from 'react-native-simple-toast'
import { useDispatch } from 'react-redux'
import Block from '../../../components/Block'
import Text from '../../../components/Text'
import styles from './styles'
import { PrimaryInput } from '../../../components/TextInput'
import { PrimaryButton } from '../../../components/Button'
import checkLoginValidation from './validate'
import { loginService } from '../../../services/auth'

export default LoginScreen = ({ navigation }) => {
    const dispatch = useDispatch()

    // const [email, setEmail] = useState('tasfiquealam1@gmail.com')
    // const [password, setPassword] = useState('alam123456')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const submitLogin = () => {
        if (checkLoginValidation(email, password)) {
            setIsLoading(true)

            dispatch(loginService(email, password, (res, err) => {

                setIsLoading(false)

                if (res) {
                    if (res?.result?.isError == 'false') {
                        navigation.navigate('dashboard')
                    } else {
                        Toast.show(res.result?.message)
                    }
                }
            }))
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

                        <Block width flex={false} margin={[30, 0, 0]}>
                            <PrimaryButton
                                loading={isLoading}
                                btnText="Login"
                                onPress={submitLogin} />
                        </Block>

                        <Block row center flex={false} padding={[10, 0]}>
                            <Text style={{ marginRight: 5 }} white>Not a user ?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('regi')}>
                                <Text white>Register here</Text>
                            </TouchableOpacity>
                        </Block>
                        <TouchableOpacity>
                            <Text white>Forgot Password ?</Text>
                        </TouchableOpacity>
                    </Block>
                </ImageBackground>
            </SafeAreaView>
        </Block>

    )
}