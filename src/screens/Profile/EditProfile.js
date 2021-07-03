import React, { useState } from "react"
import { Dimensions, ScrollView, SafeAreaView, Image, TouchableOpacity, ImageBackground } from "react-native"
import Block from '../../components/Block'
import Text from '../../components/Text'
import styles from './styles'
import { ProfileInput } from '../../components/TextInput'
import { SecondaryButton } from '../../components/Button'
import { colors } from "../../styles/theme"
import { Navbar } from "../../layouts/Navbar"
import DropDownPicker from 'react-native-dropdown-picker'
import data from './country.json'




export default EditProfile = props => {

    const userInfo = props?.route?.params?.userInfo

    const [expand, setExpand] = useState(false)
    const [userCategory, setUserCategory] = useState('')
    const [job, setJob] = useState('')
    const [specialization, setSpecialization] = useState('')
    const [openUserCategory, setOpenUserCategory] = useState(false)
    const [openJob, setOpenJob] = useState(false)
    const [openSpecialization, setOpenSpecialization] = useState(false)
    const [openCountry, setOpenCountry] = useState(false)
    const [firstname, setFirstname] = useState('')
    const [middlename, setMiddlename] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [address, setAddress] = useState('')
    const [country, setCountry] = useState('')
    const [imageFile, setImageFile] = useState('')
    const [image, setImage] = useState('')
    const [referrerName, setReferrerName] = useState('')
    const [referrerEmail, setReferrerEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    console.log('userinfo', userInfo);

    return (

        <Block block>
            <SafeAreaView style={styles.container}>
                <Navbar />
                <ScrollView block style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
                    <Text textColor size={20}>Edit Profile</Text>
                    <Text bold style={{ paddingVertical: 10 }} size={17}>Personal Info :</Text>
                    <Block flex={false} margin={[0, 0, 50, 0]}>
                        <ProfileInput
                            title="First Name"
                            value={firstname}
                            onChangeText={(val) => setFirstname(val)}
                        />
                        <ProfileInput
                            title="Middle Name"
                            value={middlename}
                            onChangeText={(val) => setMiddlename(val)}
                        />
                        <ProfileInput
                            title="Last Name"
                            value={lastname}
                            onChangeText={(val) => setLastname(val)}
                        />

                        <Text bold style={{ paddingVertical: 10 }} size={17}>User Type :</Text>
                        <Block flex={false} margin={[0, 0, 10, 0]}>
                            <Text size={15} bold style={{ paddingVertical: 5 }}>Select Student</Text>
                            <DropDownPicker
                                style={styles.pickerEdit}
                                dropDownContainerStyle={styles.pickerInner}
                                textStyle={{ color: 'gray' }}
                                placeholder="Select Student"
                                open={openUserCategory}
                                setOpen={setOpenUserCategory}
                                items={[
                                    { label: 'Bsc', value: 'Bsc' },
                                    { label: 'Msc', value: 'Msc' },
                                    { label: 'Phd', value: 'Phd' }
                                ]}
                                value={userCategory}
                                setValue={setUserCategory}
                            />
                        </Block>
                        <Block flex={false} margin={[0, 0, 10, 0]}>
                            <Text size={15} bold style={{ paddingVertical: 5 }}>Select Job</Text>
                            <DropDownPicker
                                style={styles.pickerEdit}
                                dropDownContainerStyle={styles.pickerInner}
                                textStyle={{ color: 'gray' }}
                                placeholder="Select Job"
                                open={openJob}
                                setOpen={setOpenJob}
                                items={[
                                    { label: 'job1', value: 'job1' },
                                    { label: 'job2', value: 'job2' },
                                    { label: 'job3', value: 'job3' }
                                ]}
                                value={job}
                                setValue={setJob}
                            />
                        </Block>
                        <Block flex={false} margin={[0, 0, 10, 0]}>
                            <Text size={15} bold style={{ paddingVertical: 5 }}>Select Specialization</Text>
                            <DropDownPicker
                                style={styles.pickerEdit}
                                dropDownContainerStyle={styles.pickerInner}
                                textStyle={{ color: 'gray' }}
                                placeholder="Select Specialization"
                                open={openSpecialization}
                                setOpen={setOpenSpecialization}
                                items={[
                                    { label: 'option1', value: 'option1' },
                                    { label: 'option2', value: 'option2' },
                                    { label: 'option3', value: 'option3' }
                                ]}
                                value={specialization}
                                setValue={setSpecialization}
                            />
                        </Block>
                        <Text bold style={{ paddingVertical: 10 }} size={17}>Other Info :</Text>
                        <ProfileInput
                            title="Email Address"
                            value={email}
                            onChangeText={(val) => setEmail(val)}
                        />
                        <ProfileInput
                            title="Address"
                            value={address}
                            onChangeText={(val) => setAddress(val)}
                        />
                        <ProfileInput
                            title="Phone"
                            value={phone}
                            onChangeText={(val) => setPhone(val)}
                        />
                        <Block flex={false} margin={[0, 0, 10, 0]}>
                            <Text size={15} bold style={{ paddingVertical: 5 }}>Country</Text>
                            <DropDownPicker
                                style={styles.pickerEdit}
                                dropDownContainerStyle={styles.pickerInner}
                                textStyle={{ color: 'gray' }}
                                placeholder="Select Country"
                                open={openUserCategory}
                                setOpen={setOpenUserCategory}
                                items={data && data}
                                value={country}
                                setValue={setCountry}
                            />
                        </Block>
                        <Text size={15} bold style={{ paddingVertical: 5 }}>Profile Image</Text>
                        <TouchableOpacity style={styles.imgFile}>
                            <Text>Select Image File</Text>
                        </TouchableOpacity>

                        <SecondaryButton btnText="Save" />
                    </Block>
                </ScrollView>
            </SafeAreaView>
        </Block>

    );
}