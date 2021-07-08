import React, { useEffect, useState } from "react"
import { TextInput, TouchableOpacity, Image } from "react-native"
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



const AutocompleteExample = (film) => {
    const { title, director, opening_crawl, episode_id } = film;
    return (
        <Block>
            <Text>{title}</Text>
        </Block>
    );
}



const Navbar = (props) => {

    const navigation = useNavigation();

    const [application, setApplication] = useState(false)
    const [notification, setNotification] = useState(false)
    const [search, setSearch] = useState(false)
    const [films, setFilms] = useState([
        {
            title: 'abc'
        }
    ]);
    const [query, setQuery] = useState('');
    const [profile, setProfile] = useState(false)

    const onPressNotification = () => {
        setApplication(false)
        setSearch(false)
        setProfile(false)
        setNotification(!notification)
    }

    console.log('films', films);


    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();


    useEffect(() => {

        fetch(`https://swapi.co/api/films/`).then(res => res.json()).then((json) => {
            console.log('results', results);
            const { results: films } = json;
            // setFilms(films)
        });

    }, []);


    useEffect(() => {
        findFilm(query)
    }, [query]);


    console.log('query', query);


    const findFilm = (q) => {
        if (q === '') {
            return [];
        }
        const regex = new RegExp(`${q.trim()}`, 'i');
        return films.filter(film => film.title.search(regex) >= 0);
    }


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
                            <Text size={11} white >1</Text>
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
                        <TouchableOpacity style={styles.singleNotify}>
                            <Image style={styles.avatar} source={require('../../assets/images/ala.jpeg')} />
                            <Block flex={false}>
                                <Text bold size={16} color={colors.primaryColor}>Tasfique Alam</Text>
                                <Text bold>Wants to be your friend</Text>
                            </Block>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.singleNotify}>
                            <Image style={styles.avatar} source={require('../../assets/images/ala.jpeg')} />
                            <Block flex={false}>
                                <Text bold size={16} color={colors.primaryColor}>Tasfique Alam</Text>
                                <Text bold>Wants to be your friend</Text>
                            </Block>
                        </TouchableOpacity>
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

                    <Block>
                        <Autocomplete
                            autoCapitalize="none"
                            autoCorrect={false}
                            // containerStyle={}
                            data={films.length === 1 && comp(query, films[0].title) ? [] : films}
                            defaultValue={query}
                            onChangeText={text => setQuery(text)}
                            placeholder="Enter"
                            renderItem={({ title, release_date }) => (
                                <TouchableOpacity onPress={() => setQuery(title)}>
                                    <Text>
                                        {title} ({release_date.split('-')[0]})
              </Text>
                                </TouchableOpacity>
                            )}
                        />
                        {/* <Bloy */}
                    </Block>


                    <FontAwesome color={colors.white} style={styles.searchBox} size={17} name="search" />
                </Block>
            </Block>}

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