import React, { useEffect, useState } from "react"
import { FlatList, TouchableOpacity, Image, TextInput } from "react-native"
import Block from '../../components/Block'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Text from '../../components/Text'
import styles from './styles'
import { colors } from '../../styles/theme'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from "react-redux"
import EmptyData from "../../components/EmptyData"
import { getUsersService } from "../../services/user"


const Navbar = (props) => {
    const dispatch = useDispatch()

    const navigation = useNavigation();

    const [search, setSearch] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [searchedUsers, setSearchedUsers] = useState([])
    const [allUsers, setAllUsers] = useState([])
    const [notifications, setNotifications] = useState([])
    const [application, setApplication] = useState(false)
    const [notification, setNotification] = useState(false)
    const [openSearchBox, setOpenSearchBox] = useState(false)
    const [profile, setProfile] = useState(false)
    const [typeSearch, setTypeSearch] = useState(false)


    useEffect(() => {
        allFriend()
    }, [])

    const onPressNotification = () => {
        setApplication(false)
        setOpenSearchBox(false)
        setProfile(false)
        setNotification(!notification)
    }

    const allFriend = () => {
        setIsLoading(true)
        dispatch(getUsersService((res, err) => {
            setIsLoading(false)
            if (res?.data?.data) {
                const users = JSON.parse(res.data.data)
                setAllUsers(users)
                const friendRequest = users.filter(people => people.isFrndReqAccepted == false)
                setNotifications(friendRequest || [])
            }
        }))
    }

    const onChangeSearch = val => {
        setSearch(val)
        if (val === '') {
            setTypeSearch(false)
            setSearchedUsers([])
            return
        }

        const matchedUsers = allUsers.filter((obj) => JSON.stringify(obj.name).toLowerCase().includes(val.toLowerCase()))
        if (matchedUsers.length > 0) {
            setTypeSearch(true)
        } else {
            setTypeSearch(false)
        }
        setSearchedUsers(matchedUsers)

    }


    const onPressApplication = () => {
        setApplication(!application)
        setOpenSearchBox(false)
        setProfile(false)
        setNotification(false)
    }

    const onPressSearch = () => {
        setApplication(false)
        setOpenSearchBox(!openSearchBox)
        setProfile(false)
        setNotification(false)
    }

    const onPressProfileIcon = () => {
        setProfile(!profile)
        setApplication(false)
        setOpenSearchBox(false)
        setNotification(false)
    }

    const onPressProfile = () => {
        navigation.navigate('profile')
        setProfile(false)
        setApplication(false)
        setOpenSearchBox(false)
        setNotification(false)
    }

    const onPressDrawer = () => {
        navigation.openDrawer()
        setProfile(false)
        setApplication(false)
        setOpenSearchBox(false)
        setNotification(false)
    }

    const redirectRequest = () => {
        navigation.navigate('friends')
        setProfile(false)
        setApplication(false)
        setOpenSearchBox(false)
        setNotification(false)
    }

    const renderNotificationsItem = ({ item, index }) => (
        <TouchableOpacity style={styles.singleNotify} onPress={redirectRequest}>
            <Image style={styles.avatar} source={item.image ? { uri: item.image } : require('../../assets/images/ala.jpeg')} />
            <Block flex={false}>
                <Text bold size={16} color={colors.primaryColor}>{item.name}</Text>
                <Text bold>Wants to be your friend</Text>
            </Block>
        </TouchableOpacity>
    )
    const renderSearchItem = ({ item, index }) => (
        <TouchableOpacity style={styles.singleSearch} onPress={redirectRequest}>
            <Image style={styles.avatar2} source={item.image ? { uri: item.image } : require('../../assets/images/ala.jpeg')} />
            <Block flex={false}>
                <Text bold size={16} textColor>{item.name}</Text>
            </Block>
        </TouchableOpacity>
    )

    return (

        <Block flex={false}>
            <Block row spaceBetween center flex={false} style={styles.navbar}>
                <Block row center flex={false}>
                    <TouchableOpacity style={styles.bars} onPress={onPressDrawer}>
                        <FontAwesome color="#fff" size={15} name="bars" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.application} onPress={onPressApplication}>
                        <Text color={colors.primaryColor}>Applications</Text>
                        <MaterialIcons size={17} color={colors.primaryColor} name="arrow-drop-down" />
                    </TouchableOpacity>
                </Block>
                <Block row center flex={false}>
                    <TouchableOpacity style={{ marginHorizontal: 5 }} onPress={onPressSearch}>
                        <FontAwesome color={colors.borderColor} size={17} name="search" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginHorizontal: 5 }} onPress={onPressNotification}>
                        <FontAwesome name="bell-o" color={colors.borderColor} size={17} />
                        <Block flex={false} style={styles.notify}>
                            <Text size={11} white >{notifications?.length}</Text>
                        </Block>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginHorizontal: 5 }}>
                        <AntDesign name="mail" color={colors.borderColor} size={17} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginHorizontal: 5 }} onPress={onPressProfileIcon}>
                        <Ionicons name="person-circle-sharp" color={colors.textColor} size={22} />
                    </TouchableOpacity>
                </Block>
            </Block>

            {notification &&
                <Block flex={false} style={styles.notifyBlock}>
                    <Block width style={styles.header} flex={false}>
                        <Text white>NOTIFICATION CENTER</Text>
                    </Block>
                    <Block flex={false} padding={[10]}>

                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={notifications}
                            renderItem={renderNotificationsItem}
                            keyExtractor={item => item._id.$oid.toString()}
                            ListEmptyComponent={
                                <EmptyData text="No Notification" />
                            }
                        />
                    </Block>
                </Block>
            }

            {application && <Block flex={false} style={styles.expandAppli}>
                <TouchableOpacity style={{ paddingVertical: 5 }}>
                    <Text textColor>Pages</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text textColor>Groups</Text>
                </TouchableOpacity>
            </Block>}

            {openSearchBox && <Block flex={false} style={styles.expandSea}>
                <Block row center width flex={false} style={styles.input}>
                    <TextInput
                        style={{ height: 40,zIndex:999999, width: '100%' }}
                        placeholder="Search for..."
                        value={search}
                        onChangeText={onChangeSearch}
                    />
                    <FontAwesome color={colors.white} style={styles.searchBox} size={17} name="search" />
                </Block>
            </Block>}

            {typeSearch &&
                <Block flex={false} style={styles.searchBlock}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={searchedUsers}
                        renderItem={renderSearchItem}
                        keyExtractor={item => item._id.$oid.toString()}
                        ListEmptyComponent={
                            <EmptyData text="No User" />
                        }
                    />
                </Block>

            }

            {
                profile && <Block flex={false} style={styles.expandSea}>
                    <TouchableOpacity style={styles.devide} onPress={onPressProfile}>
                        <Ionicons name="person-circle-sharp" color={colors.borderColor} style={{ marginRight: 5 }} size={18} />
                        <Text textColor>Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ paddingVertical: 5, flexDirection: 'row' }}>
                        <AntDesign name="logout" color={colors.borderColor} style={{ marginRight: 5 }} size={18} />
                        <Text textColor>Logout</Text>
                    </TouchableOpacity>
                </Block>
            }
        </Block >

    );
}


export {
    Navbar,
}