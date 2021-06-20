import React, { useState } from "react"
import { ImageBackground, ScrollView, Image, TouchableOpacity } from "react-native"
import Block from '../../../components/Block'
import Text from '../../../components/Text'
import styles from './styles'
import { colors } from "../../../styles/theme"
import DropDownPicker from 'react-native-dropdown-picker'
import { PrimaryInput } from "../../../components/TextInput"
import { PrimaryButton } from "../../../components/Button"
import { useDispatch } from "react-redux"


export default Registration = ({ navigation }) => {
    const dispatch = useDispatch()

    const [firstname, setFirstname] = useState('')
    const [middlename, setMiddlename] = useState('')
    const [lastname, setLastname] = useState('')
    const [userCategory, setUserCategory] = useState('')
    const [specializationType, setSpecializationType] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [address, setAddress] = useState('')
    const [country, setCountry] = useState('')
    const [image, setImage] = useState('')
    const [referrerName, setReferrerName] = useState('')
    const [referrerEmail, setReferrerEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false)


    const [openUserCategory, setOpenUserCategory] = useState(false)
    const [openCountry, setOpenCountry] = useState(false)

    console.log('openUserCategory', openUserCategory);

    const submitRegister = () => {

        const formData = {
            firstname,
            middlename,
            lastname,
            name: `${firstname} ${middlename} ${lastname}`,
            user_category: userCategory,
            specialization_type: specializationType,
            email,
            phone,
            password,
            passwordconfirm: passwordConfirm,
            address,
            country,
            image,
            referrer_name: referrerName,
            referrer_email: referrerEmail,
        }

        // navigation.navigate('login')
    }


    return (

        <Block block>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
                <ImageBackground style={styles.bgImg} source={require('../../../assets/images/green-bg-1.jpg')}>
                    <Block style={styles.loginBlock} flex={false}>
                        <Text size={27} bold white center>Registration</Text>
                        <Block padding={[15, 0]} flex={false}>
                            <Text white bold>Name* :</Text>
                            <PrimaryInput
                                placeholder="Enter First Name"
                                value={firstname}
                                onChangeText={val => setFirstname(val)}
                            />
                            <PrimaryInput
                                placeholder="Enter Middle Name"
                                value={middlename}
                                onChangeText={val => setMiddlename(val)}
                            />
                            <PrimaryInput
                                placeholder="Enter Last Name"
                                value={lastname}
                                onChangeText={val => setLastname(val)}
                            />
                        </Block>
                        <Block flex={false} padding={[15, 0]}>
                            <Text white bold>User category* :</Text>
                            <DropDownPicker
                                style={styles.picker}
                                dropDownContainerStyle={styles.pickerInner}
                                textStyle={{ color: '#d2d2d2' }}
                                placeholder="Select User Category"
                                open={openUserCategory}
                                setOpen={setOpenUserCategory}
                                items={[
                                    { label: 'Apple', value: 'apple' },
                                    { label: 'Banana', value: 'banana' }
                                ]}
                                value={userCategory}
                                setValue={setUserCategory}
                            />
                        </Block>
                        <Block flex={false} padding={[15, 0]}>
                            <Text white bold>Email* :</Text>
                            <PrimaryInput
                                placeholder="Enter Email"
                                value={email}
                                onChangeText={val => setEmail(val)}
                            />
                        </Block>
                        <Block flex={false} padding={[15, 0]}>
                            <Text white bold>Phone :</Text>
                            <PrimaryInput
                                placeholder="Enter Phone Number"
                                value={phone}
                                onChangeText={val => setPhone(val)}
                            />
                        </Block>
                        <Block flex={false} padding={[15, 0]}>
                            <Text white bold>Password* :</Text>
                            <PrimaryInput
                                placeholder="Enter Password"
                                value={password}
                                onChangeText={val => setPassword(val)}
                            />
                        </Block>
                        <Block flex={false} padding={[15, 0]}>
                            <Text white bold>Confirm Password* :</Text>
                            <PrimaryInput
                                placeholder="Enter Password Again"
                                value={passwordConfirm}
                                onChangeText={val => setPasswordConfirm(val)}
                            />
                        </Block>
                        <Block flex={false} padding={[15, 0]}>
                            <Text white bold>Address :</Text>
                            <PrimaryInput
                                placeholder="Enter Address"
                                value={address}
                                onChangeText={val => setAddress(val)}
                            />
                        </Block>
                        <Block flex={false} padding={[15, 0]}>
                            <Text white bold>Country :</Text>
                            <DropDownPicker
                                style={styles.picker}
                                dropDownContainerStyle={styles.pickerInner}
                                textStyle={{ color: '#d2d2d2' }}
                                placeholder="Select Country"
                                open={openCountry}
                                setOpen={setOpenCountry}
                                items={[
                                    { label: 'Apple', value: 'apple' },
                                    { label: 'Banana', value: 'banana' }
                                ]}
                                value={country}
                                setValue={setCountry}
                            />
                        </Block>
                        <Block flex={false} padding={[15, 0]}>
                            <Text white bold>Profile Picture :</Text>
                            <Block center middle style={styles.avatar} center bgWhite flex={false}>
                                <Image style={{ width: 100, height: 100 }} source={require('../../../assets/images/user-profile.png')} />
                            </Block>
                            <Block flex={false} margin={[20, 0, 10, 0]}>
                                <PrimaryButton btnText="Upload Picture" />
                            </Block>
                            <TouchableOpacity>
                                <Text center white>remove image</Text>
                            </TouchableOpacity>
                        </Block>
                        <Text size={27} bold white center>Refered by:</Text>
                        <Block flex={false} padding={[15, 0]}>
                            <Text white bold>Name* :</Text>
                            <PrimaryInput
                                placeholder="Enter Name"
                                value={referrerName}
                                onChangeText={val => setReferrerName(val)}
                            />
                        </Block>
                        <Block flex={false} padding={[15, 0]}>
                            <Text white bold>Email* :</Text>
                            <PrimaryInput
                                placeholder="Enter Email"
                                value={referrerEmail}
                                onChangeText={val => setReferrerEmail(val)}
                            />
                        </Block>
                        <Block flex={false} margin={[20, 0]}>
                            <PrimaryButton onPress={submitRegister} btnText="Registration" />
                        </Block>
                        <TouchableOpacity>
                            <Text white bold>* marked fields are required, Please fill up this fields ?</Text>
                        </TouchableOpacity>
                        <Block row center middle flex={false} padding={[10, 0]}>
                            <Text style={{ marginRight: 5 }} white>Already have an account ?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('login')}>
                                <Text white>login here</Text>
                            </TouchableOpacity>
                        </Block>
                    </Block>
                </ImageBackground>
            </ScrollView>
        </Block>

    )
}