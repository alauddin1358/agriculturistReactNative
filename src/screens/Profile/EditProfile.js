import React, { useEffect, useState } from "react"
import { ScrollView, SafeAreaView, TouchableOpacity, Image, ImageBackground } from "react-native"
import Block from '../../components/Block'
import Text from '../../components/Text'
import styles from './styles'
import { ProfileInput } from '../../components/TextInput'
import { SecondaryButton } from '../../components/Button'
import { Navbar } from "../../layouts/Navbar"
import DropDownPicker from 'react-native-dropdown-picker'
import data from './country.json'
import { updatePersonalInfoService } from "../../services/user"
import { useDispatch } from "react-redux"
import ImagePicker from 'react-native-image-crop-picker'
import RNFS from 'react-native-fs'
import Toast from 'react-native-simple-toast'
import { useNavigation } from '@react-navigation/native'


console.log('data', data);


export default EditProfile = props => {
    const dispatch = useDispatch()
    const navigation = useNavigation();


    const userInfo = props?.route?.params?.userInfo

    const [userCategory, setUserCategory] = useState('')
    const [job, setJob] = useState('')
    const [specialization, setSpecialization] = useState('')
    const [openStudentType, setOpenStudentType] = useState(false)
    const [studentType, setStudentType] = useState('')
    const [openJob, setOpenJob] = useState(false)
    const [openSpecialization, setOpenSpecialization] = useState(false)
    const [firstname, setFirstname] = useState('')
    const [middlename, setMiddlename] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [country, setCountry] = useState('')
    const [openCountry, setopenCountry] = useState('')
    const [countries, setCountries] = useState(data)
    const [imageFile, setImageFile] = useState({})
    const [image, setImage] = useState('')
    const [referrerName, setReferrerName] = useState('')
    const [referrerEmail, setReferrerEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    console.log('countries', countries);

    useEffect(() => {
        setUserCategory(userInfo?.user_category)
        setJob(userInfo?.job_type)
        setSpecialization(userInfo?.specialization_type)
        setStudentType(userInfo?.student_type)
        setFirstname(userInfo?.firstname)
        setMiddlename(userInfo?.middlename)
        setLastname(userInfo?.lastname)
        setEmail(userInfo?.email)
        setPhone(userInfo?.phone)
        setAddress(userInfo?.address)
        setCountry(userInfo?.country)
        setImageFile(userInfo?.image)
        setImage(userInfo?.image)
        setReferrerName(userInfo?.referrer_name)
        setReferrerEmail(userInfo?.referrer_email)
        setPassword(userInfo?.password)
        setPasswordConfirm(userInfo?.passwordconfirm)
    }, [])


    const uploadAvatar = async () => {
        const img = await ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: false
        })
        setImageFile(img)

        const res = await RNFS.readFile(img.path, 'base64')
        setImage(res)
    }



    const saveProfileInfo = () => {

        let formData = new FormData()
        formData.append('firstname', firstname)
        formData.append('middlename', middlename)
        formData.append('lastname', lastname)
        formData.append('user_category', userCategory)
        formData.append('email', email)
        formData.append('phone', phone)
        formData.append('password', password)
        formData.append('passwordconfirm', passwordConfirm)
        formData.append('address', address)
        formData.append('country', country)
        formData.append('image', image)
        formData.append('referrer_name', referrerName)
        formData.append('referrer_email', referrerEmail)
        formData.append('emailconfirm', false)
        formData.append('job_type', job)
        formData.append('student_type', studentType)
        formData.append('viewImage', userInfo.image)
        formData.append('file', '')
        formData.append('specialization_type', specialization)

        dispatch(updatePersonalInfoService(userInfo._id.$oid, formData, (res, err) => {

            if (res) {
                if (res?.data?.result?.isError == 'true') {
                    Toast.show(res?.data?.result?.message, Toast.LONG)
                } else {
                    Toast.show(res?.data?.result?.message, Toast.LONG)
                    // navigation.navigate('profile')
                    navigation.push('profile')
                }
            }
        }))
    }

    return (

        <Block block>
            <SafeAreaView style={{ flex: 1 }}>
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
                                open={openStudentType}
                                setOpen={setOpenStudentType}
                                items={[
                                    { label: 'Bsc', value: 'Bsc' },
                                    { label: 'Msc', value: 'Msc' },
                                    { label: 'Phd', value: 'Phd' }
                                ]}
                                value={studentType}
                                setValue={setStudentType}
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
                                containerStyle={{}}
                                textStyle={{ color: 'gray' }}
                                placeholder="Select Country"
                                open={openCountry}
                                setOpen={setopenCountry}
                                items={countries}
                                setItems={setCountries}
                                value={country}
                                setValue={setCountry}
                            />
                        </Block>
                        <Text size={15} bold style={{ paddingVertical: 5 }}>Profile Image</Text>
                        <Block>
                            <Image source={{ uri: imageFile ? imageFile.path : userInfo?.image }} style={{
                                width: 100,
                                height: 100,
                            }} />
                        </Block>
                        <TouchableOpacity style={styles.imgFile} onPress={uploadAvatar}>
                            <Text>Select Image File</Text>
                        </TouchableOpacity>
                        <Block flex={false} margin={[0, 0, 30, 0]}>
                            <ProfileInput
                                title="Reffered by"
                                value={referrerName}
                                onChangeText={(val) => setReferrerName(val)}
                            />
                            <ProfileInput
                                value={referrerEmail}
                                onChangeText={(val) => setReferrerEmail(val)}
                            />
                        </Block>

                        <SecondaryButton btnText="Save" onPress={saveProfileInfo} />
                    </Block>
                </ScrollView>
            </SafeAreaView>
        </Block>

    );
}