import React, { useEffect, useState } from "react"
import { Dimensions, ScrollView, SafeAreaView, Image, TouchableOpacity, ImageBackground } from "react-native"
import Block from '../../components/Block'
import Text from '../../components/Text'
import styles from './styles'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import { colors } from "../../styles/theme"
import { Navbar } from "../../layouts/Navbar"
import { getUserInfoService } from '../../services/user'
import { useDispatch } from "react-redux"




export default Profile = ({ navigation }) => {
    const dispatch = useDispatch()

    const [userInfo, setUserInfo] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [addFriendLoading, setAddFriendLoading] = useState(false)

    useEffect(() => {
        getUserInfo()
    }, [])

    const getUserInfo = () => {
        setIsLoading(true)
        dispatch(getUserInfoService((res, err) => {
            setIsLoading(false)
            if (res) {
                setUserInfo(res?.data?.data ? JSON.parse(res.data.data) : [])
            }
        }))
    }

    console.log(userInfo);

    return (

        <Block block>
            <SafeAreaView style={styles.container}>
                <Navbar />
                <ScrollView block style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
                    <Text textColor size={20}>Profile</Text>
                    <ImageBackground imageStyle={{ borderRadius: 5 }} source={require('../../assets/images/green-bg-1.jpg')} style={styles.bgImg}>
                        <Block flex={false} style={styles.block}>
                            <Image style={{ width: 150, height: 150 }} source={require('../../assets/images/user-profile.png')} />
                        </Block>
                        <TouchableOpacity style={styles.btn}>
                            <Text white bold>Add Contact</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn2}>
                            <Text white bold>Message</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.camera} onPress={() => navigation.navigate('editProfile', { userInfo: userInfo })}>
                            <AntDesign name="camera" color="#fff" size={20} />
                        </TouchableOpacity>
                    </ImageBackground>
                    <Block flex={false} style={styles.infoblock}>
                        <TouchableOpacity style={styles.edit} onPress={() => navigation.navigate('editProfile', { userInfo: userInfo })}>
                            <Entypo name="edit" size={19} color={colors.primaryColor} />
                        </TouchableOpacity>
                        <Text bold style={{ padding: 10 }}>Personal Info</Text>
                        <Block row width spaceBetween flex={false} padding={[10]}>
                            <Text size={12}>Name</Text>
                            <Text textColor size={12}>{userInfo?.name}</Text>
                        </Block>
                        <Block row width spaceBetween flex={false} padding={[10]}>
                            <Text size={12}>Email</Text>
                            <Text textColor size={12}>{userInfo?.email}</Text>
                        </Block>
                        <Block row width spaceBetween flex={false} padding={[10]}>
                            <Text size={12}>Phone</Text>
                            <Text textColor size={12}>{userInfo?.phone}</Text>
                        </Block>
                    </Block>
                    <Block flex={false} style={styles.infoblock}>
                        <TouchableOpacity style={styles.edit} onPress={() => navigation.navigate('editProfile', { userInfo: userInfo })}>
                            <Entypo name="edit" size={19} color={colors.primaryColor} />
                        </TouchableOpacity>
                        <Text bold style={{ padding: 10 }}>User Type</Text>
                        <Block row width spaceBetween flex={false} padding={[10]}>
                            <Text size={12}>User Category</Text>
                            <Text textColor size={12}>{userInfo?.user_category}</Text>
                        </Block>
                        <Block row width spaceBetween flex={false} padding={[10]}>
                            <Text size={12}>Job</Text>
                            <Text textColor size={12}>{userInfo?.job_type}</Text>
                        </Block>
                        <Block row width spaceBetween flex={false} padding={[10]}>
                            <Text size={12}>Specialization</Text>
                            <Text textColor size={12}>{userInfo?.specialization_type}</Text>
                        </Block>
                    </Block>
                    <Block flex={false} style={styles.infoblock} margin={[10, 10, 50, 10]}>
                        <TouchableOpacity style={styles.edit} onPress={() => navigation.navigate('editProfile', { userInfo: userInfo })}>
                            <Entypo name="edit" size={19} color={colors.primaryColor} />
                        </TouchableOpacity>
                        <Text bold style={{ padding: 10 }}>Other Info</Text>
                        <Block row width spaceBetween flex={false} padding={[10]}>
                            <Text size={12}>Address</Text>
                            <Text textColor size={12}>{userInfo?.address}</Text>
                        </Block>
                        <Block row width spaceBetween flex={false} padding={[10]}>
                            <Text size={12}>Country</Text>
                            <Text textColor size={12}>{userInfo?.country}</Text>
                        </Block>
                    </Block>
                </ScrollView>
            </SafeAreaView>
        </Block>

    );
}