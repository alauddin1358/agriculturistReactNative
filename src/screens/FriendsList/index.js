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
import { rmFriendService, FriendService } from "../../services/friend"
import { colors } from "../../styles/theme"
import AdsCarousel from '../Carousel'
import EmptyData from "../../components/EmptyData"



export default FriendsList = ({ navigation, _carousel }) => {

    const [isLoading, setIsLoading] = useState(true)

    console.log('friendReq', friendReq);
    console.log('peopleMayKnowList', peopleMayKnowList);
    const renderPeopleYouMayKnow = ({ item, index }) => (
        <Block row center style={styles.styleBlock} flex={false}>
            <Block flex={false} margin={[0, 20, 0, 0]}>
                <Image
                    style={styles.avatar}
                    source={item.image ? { uri: item.image } : require('../../assets/images/ala.jpeg')} />
            </Block>
            <Block flex={false}>
                <Text bold size={19} style={{ maxWidth: 100 }} textColor>
                    {item.name}
                </Text>
                <TouchableOpacity
                    style={
                        [styles.btn,
                        {
                            backgroundColor: colors.primaryColor,
                        }]
                    }
                    onPress={() => rmFriend(item._id.$oid)}>
                    <>
                        <Text
                            size={14}
                            color={colors.white}>
                            Unfriend
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

    const rmFriend = id => {
        dispatch(rmFriendService(id, (res, err) => {
            if (res?.data?.result) {
                Toast.show(res?.data?.result?.message, Toast.LONG)
                getPeopleYouMayKnow()
            }

        }))
    }

    return (

        <Block block>
            <SafeAreaView style={styles.container}>
                <Navbar
                    onPressProfile={() => navigation.navigate('profile')}
                    onPressDrawer={() => navigation.openDrawer()}
                />
                <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
                    <Text textColor size={20}>Friends</Text>
                    <Block block >
                        {/* <Block flex={false} style={styles.postBlock2} margin={[0, 0, 20, 0]}>
                            <Text style={styles.title}>Friend Requests</Text>
                        </Block> */}
                        <Block flex={false} style={styles.postBlock2}>
                            <Text style={styles.title}>My Friends</Text>

                            {
                                isLoading ? <Loader /> :
                                    <FlatList
                                        showsVerticalScrollIndicator={false}
                                        data={friendReq}
                                        renderItem={renderPeopleYouMayKnow}
                                        keyExtractor={item => item._id.$oid.toString()}
                                        ListEmptyComponent={
                                            <EmptyData text="No Friends Found" />
                                        }
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