import React, { useState } from "react"
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



export default EditProfile = props => {
    const dispatch = useDispatch()
    const navigation = useNavigation();


    const userInfo = props?.route?.params?.userInfo

    const [expand, setExpand] = useState(false)
    const [userCategory, setUserCategory] = useState(userInfo?.user_category)
    const [job, setJob] = useState(userInfo?.job_type)
    const [specialization, setSpecialization] = useState(userInfo?.specialization_type)
    const [openStudentType, setOpenStudentType] = useState(false)
    const [studentType, setStudentType] = useState(userInfo?.student_type)
    const [openJob, setOpenJob] = useState(false)
    const [openSpecialization, setOpenSpecialization] = useState(false)
    const [firstname, setFirstname] = useState(userInfo?.firstname)
    const [middlename, setMiddlename] = useState(userInfo?.middlename)
    const [lastname, setLastname] = useState(userInfo?.lastname)
    const [email, setEmail] = useState(userInfo?.email)
    const [phone, setPhone] = useState(userInfo?.phone)
    const [address, setAddress] = useState(userInfo?.address)
    const [country, setCountry] = useState(userInfo?.country)
    const [imageFile, setImageFile] = useState(userInfo?.image)
    const [image, setImage] = useState(userInfo?.image)
    const [referrerName, setReferrerName] = useState(userInfo?.referrer_name)
    const [referrerEmail, setReferrerEmail] = useState(userInfo?.referrer_email)
    const [isLoading, setIsLoading] = useState(false)
    const [password, setPassword] = useState(userInfo?.password)
    const [passwordConfirm, setPasswordConfirm] = useState(userInfo?.passwordconfirm)

    console.log('userinfo', userInfo);


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
        const formData = {
            firstname ,
            middlename,
            lastname,
            userCategory,
            studentType,
            job,
            specialization,
            email,
            phone,
            address,
            country,
            image,
            password,
            passwordConfirm,
            referrerName,
            referrerEmail
        }

        dispatch(updatePersonalInfoService(userInfo._id.$oid, formData, (res, err) => {

            if(res){
                if (res?.data?.result?.isError == 'true') {
                    Toast.show(res?.data?.result?.message, Toast.LONG)
                }else{
                    navigation.navigate('profile')
                }
            }
        }))
    }

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
                                textStyle={{ color: 'gray' }}
                                placeholder="Select Country"
                                open={openStudentType}
                                setOpen={setStudentType}
                                items={data && data}
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