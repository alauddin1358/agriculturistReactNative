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
import Autocomplete from "react-native-autocomplete-input"
import { useDispatch } from "react-redux"
import EmptyData from "../../components/EmptyData"
import { getUsersService } from "../../services/user"


const Navbar = (props) => {
    const dispatch = useDispatch()

    const navigation = useNavigation();

    const [isLoading, setIsLoading] = useState(true)
    const [notifications, setNotifications] = useState([])
    const [application, setApplication] = useState(false)
    const [notification, setNotification] = useState(false)
    const [search, setSearch] = useState(false)
    const [films, setFilms] = useState([]);
    const [filteredFilms, setFilteredFilms] = useState([]);
    const [selectedValue, setSelectedValue] = useState([]);
    const [profile, setProfile] = useState(false)
    const [typeSearch, setTypeSearch] = useState(true)

    const onPressNotification = () => {
        setApplication(false)
        setSearch(false)
        setProfile(false)
        setNotification(!notification)
    }


    const allFriend = () => {
        setIsLoading(true)
        dispatch(getUsersService((res, err) => {
            setIsLoading(false)
            if (res?.data?.data) {
                const users = JSON.parse(res.data.data)
                const friendRequest = users.filter(people => people.isFrndReqAccepted == false)
                setNotifications(friendRequest || [])
            }
        }))
    }




    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();


    useEffect(() => {
        allFriend()


        fetch('https://aboutreact.herokuapp.com/getpost.php?offset=1')
            .then((res) => res.json())
            .then((json) => {
                const { results: films } = json;
                setFilms(films);
                //setting the data in the films state
            })
            .catch((e) => {
                alert(e);
            });
    }, []);


    const findFilm = (query) => {
        //method called everytime when we change the value of the input
        if (query) {
            //making a case insensitive regular expression to get similar value from the film json
            const regex = new RegExp(`${query.trim()}`, 'i');
            //setting the filtered film array according the query from the input
            setFilteredFilms(films.filter((film) => film.title.search(regex) >= 0));
        } else {
            //if the query is null then return blank
            setFilteredFilms([]);
        }
    };


    const onPressApplication = () => {
        setApplication(!application)
        setSearch(false)
        setProfile(false)
        setNotification(false)
    }

    const onPressSearch = () => {
        setApplication(false)
        setSearch(!search)
        setProfile(false)
        setNotification(false)
    }

    const onPressProfileIcon = () => {
        setProfile(!profile)
        setApplication(false)
        setSearch(false)
        setNotification(false)
    }

    const onPressProfile = () => {
        navigation.navigate('profile')
        setProfile(false)
        setApplication(false)
        setSearch(false)
        setNotification(false)
    }

    const onPressDrawer = () => {
        navigation.openDrawer()
        setProfile(false)
        setApplication(false)
        setSearch(false)
        setNotification(false)
    }

    const redirectRequest = () => {
        navigation.navigate('friends')
        setProfile(false)
        setApplication(false)
        setSearch(false)
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

            {search && <Block flex={false} style={styles.expandSea}>
                <Block row center flex={false} style={styles.input}>
                    <TextInput
                        style={{ height: 40, width: '100%' }}
                        placeholder="Search for..."
                        onFocus={() => setTypeSearch(true)}
                    />
                    <FontAwesome color={colors.white} style={styles.searchBox} size={17} name="search" />
                </Block>
            </Block>}

            {typeSearch &&
                <Block flex={false} style={styles.searchBlock}>
                    <TouchableOpacity style={styles.singleSearch} onPress={redirectRequest}>
                        <Image style={styles.avatar2} source={require('../../assets/images/ala.jpeg')} />
                        <Block flex={false}>
                            <Text bold size={16} textColor>Tasfique alam</Text>
                        </Block>
                    </TouchableOpacity>
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