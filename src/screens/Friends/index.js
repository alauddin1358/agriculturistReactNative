import React, { useEffect, useState } from "react"
import {
    SafeAreaView, ScrollView, Image, TouchableOpacity, FlatList, ActivityIndicator
} from "react-native"
import Toast from 'react-native-simple-toast'
import Block from '../../components/Block'
import Text from '../../components/Text'
import styles from './styles'
import { Navbar } from "../../layouts/Navbar"
import { useDispatch } from "react-redux"
import { getUsersService } from "../../services/user"
import { Loader } from "../../components/Loader"
import { addFriendService, acceptFriendService, deleteFriendService } from "../../services/friend"
import { colors } from "../../styles/theme"
import AdsCarousel from '../Carousel'




export default Friends = ({ navigation, _carousel }) => {
    const dispatch = useDispatch()
    const [peopleMayKnowList, setPeopleMayKnowList] = useState([])
    const [friendReq, setFriendReq] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [addFriendLoading, setAddFriendLoading] = useState(false)
    const [acceptFriendLoading, setAcceptFriendLoading] = useState(false)
    const [deleteFriendLoading, setDeleteFriendLoading] = useState(false)

    useEffect(() => {
        getPeopleYouMayKnow()
    }, [])

    const getPeopleYouMayKnow = () => {
        setIsLoading(true)
        dispatch(getUsersService((res, err) => {
            setIsLoading(false)
            if (res) {
                setPeopleMayKnowList(res?.data?.data ? JSON.parse(res.data.data) : [])
                setFriendReq(peopleMayKnowList.filter((item)=>item.isFrndReqAccepted == false))
            }
        }))
    }

console.log('friendReq',friendReq);
console.log('peopleMayKnowList',peopleMayKnowList);

    const renderPeopleYouMayKnow = ({ item, index }) => (
        <Block row center style={styles.styleBlock} flex={false}>
            <Block flex={false} margin={[0, 20, 0, 0]}>
                <Image
                    style={styles.avatar}
                    source={item.image ? { uri: item.image } : require('../../assets/images/ala.jpeg')} />
            </Block>
            <Block flex={false}>
                <Text bold size={19} style={{ maxWidth: 180 }} textColor>
                    {item.name}
                </Text>
                <TouchableOpacity
                    style={
                        [styles.btn,
                        {
                            backgroundColor: item.isFrndReqAccepted ? colors.gray3 : colors.primaryColor,
                        }]
                    }
                    onPress={() => addFriend(item._id.$oid)}>
                    <>
                        <Text
                            size={14}
                            color={item.isFrndReqAccepted ? colors.black : colors.white}>
                            {item.isFrndReqAccepted ? 'Cancel Request' : 'Add Friend'}
                        </Text>

                        {
                            addFriendLoading && <ActivityIndicator
                                style={{ marginLeft: 10 }}
                                color={colors.white}
                                size='small' />
                        }
                    </>
                </TouchableOpacity>
            </Block>
        </Block>
    )

    const addFriend = id => {
        setAddFriendLoading(true)
        dispatch(addFriendService(id, (res, err) => {
            if (res?.data?.result) {
                Toast.show(res?.data?.result?.message, Toast.LONG)
                getPeopleYouMayKnow()
                setAddFriendLoading(false)
            }

        }))
    }

    const renderFriendReq = ({ item, index }) => (
        <Block row center style={styles.styleBlock} flex={false}>
            <Block flex={false} margin={[0, 20, 0, 0]}>
                <Image
                    style={styles.avatar}
                    source={item.image ? { uri: item.image } : require('../../assets/images/ala.jpeg')} />
            </Block>
            <Block flex={false}>
                <Text bold size={19} style={{ maxWidth: 180 }} textColor>
                    {item.name}
                </Text>
                <TouchableOpacity
                    style={
                        [styles.btn,
                        {
                            backgroundColor: colors.primaryColor,
                        }]
                    }
                    onPress={() => AcceptFriend(item._id.$oid)}>
                    <>
                        <Text
                            size={14}
                            color={item.isFrndReqAccepted ? colors.black : colors.white}>
                            Accept Request
                        </Text>

                        {
                             acceptFriendLoading && <ActivityIndicator
                                style={{ marginLeft: 10 }}
                                color={colors.white}
                                size='small' />
                        }
                    </>
                </TouchableOpacity>
                <TouchableOpacity
                    style={
                        [styles.btn,
                        {
                            backgroundColor: colors.gray3,
                        }]
                    }
                    onPress={() => DeleteFriend(item._id.$oid)}>
                    <>
                        <Text
                            size={14}
                            color={colors.black}>
                            Delete Request
                        </Text>

                        {
                            deleteFriendLoading && <ActivityIndicator
                                style={{ marginLeft: 10 }}
                                color={colors.primary}
                                size='small' />
                        }
                    </>
                </TouchableOpacity>
            </Block>
        </Block>
    )

    const AcceptFriend = id => {
        setAcceptFriendLoading(true)
        dispatch(acceptFriendService(id, (res, err) => {
            if (res?.data?.result) {
                Toast.show(res?.data?.result?.message, Toast.LONG)
                getPeopleYouMayKnow()
                setAcceptFriendLoading(false)
            }

        }))
    }

    const DeleteFriend = id => {
        setDeleteFriendLoading(true)
        dispatch(deleteFriendService(id, (res, err) => {
            if (res?.data?.result) {
                Toast.show(res?.data?.result?.message, Toast.LONG)
                getPeopleYouMayKnow()
                setDeleteFriendLoading(false)
            }

        }))
    }
  

    return (

        <Block block>
            <SafeAreaView style={styles.container} >
                <Navbar
                    onPressProfile={() => navigation.navigate('profile')}
                    onPressDrawer={() => navigation.openDrawer()}
                />
                <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
                    <Text textColor size={20}>Friends</Text>
                    <Block block >
                        <Block flex={false} style={styles.postBlock2} margin={[0, 0, 20, 0]}>
                            <Text style={styles.title}>Friend Requests</Text>
                            {
                                isLoading ? <Loader /> :
                                    <FlatList
                                        showsVerticalScrollIndicator={false}
                                        data={friendReq}
                                        renderItem={renderFriendReq}
                                        keyExtractor={item => item._id.$oid.toString()}
                                    />
                            }
                        </Block>
                        <Block flex={false} style={styles.postBlock2}>
                            <Text style={styles.title}>People may you know</Text>

                            {
                                isLoading ? <Loader /> :
                                    <FlatList
                                        showsVerticalScrollIndicator={false}
                                        data={peopleMayKnowList}
                                        renderItem={renderPeopleYouMayKnow}
                                        keyExtractor={item => item._id.$oid.toString()}
                                    />
                            }
                        </Block>

                        <AdsCarousel />
                    </Block>
                </ScrollView>
            </SafeAreaView>
        </Block>

    );
}