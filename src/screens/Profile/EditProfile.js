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




export default EditProfile = props => {

    const [expand, setExpand] = useState(false)
    const [userCategory, setUserCategory] = useState('')
    const [openUserCategory, setOpenUserCategory] = useState(false)
    const [openCountry, setOpenCountry] = useState(false)


    return (

        <Block block>
            <SafeAreaView style={styles.container}>
                <Navbar />
                <ScrollView block style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
                    <Text textColor size={20}>Edit Profile</Text>
                    <Text bold style={{ paddingVertical: 10 }} size={17}>Personal Info :</Text>
                    <Block flex={false} margin={[0, 0, 50, 0]}>
                        <ProfileInput title="Name" />
                        <ProfileInput title="Email" />
                        <ProfileInput title="Phone" />
                        <Text bold style={{ paddingVertical: 10 }} size={17}>User Type :</Text>
                        <Block flex={false} margin={[0, 0, 10, 0]}>
                            <Text size={15} bold style={{ paddingVertical: 5 }}>User Category</Text>
                            <DropDownPicker
                                style={styles.pickerEdit}
                                dropDownContainerStyle={styles.pickerInner}
                                textStyle={{ color: 'gray' }}
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
                        <ProfileInput title="Job" />
                        <ProfileInput title="Specialization" />
                        <Text bold style={{ paddingVertical: 10 }} size={17}>Other Info :</Text>
                        <ProfileInput title="Address" />
                        <Block flex={false} margin={[0, 0, 10, 0]}>
                            <Text size={15} bold style={{ paddingVertical: 5 }}>Country</Text>
                            <DropDownPicker
                                style={styles.pickerEdit}
                                dropDownContainerStyle={styles.pickerInner}
                                textStyle={{ color: 'gray' }}
                                placeholder="Select Country"
                                open={openUserCategory}
                                setOpen={setOpenUserCategory}
                                items={[
                                    { label: 'Apple', value: 'apple' },
                                    { label: 'Banana', value: 'banana' }
                                ]}
                            />
                        </Block>
                        <Text size={15} bold style={{ paddingVertical: 5 }}>Profile Image</Text>
                        <TouchableOpacity style={styles.imgFile}>
                            <Text>Select Image File</Text>
                        </TouchableOpacity>

                        <SecondaryButton btnText="Save"/>
                    </Block>
                </ScrollView>
            </SafeAreaView>
        </Block>

    );
}