import React, { useEffect, useState } from "react"
import { Dimensions, SafeAreaView, FlatList, Image, TouchableOpacity } from "react-native"
import { useDispatch } from 'react-redux'
import Block from '../../components/Block'
import Text from '../../components/Text'
import styles from './styles'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Carousel from 'react-native-snap-carousel'
import { Navbar } from "../../layouts/Navbar"
import { fetchPostsService } from "../../services/post"
import { dateFormat } from "../../utils/common"
import { Loader } from "../../components/Loader"


const ADS = [
    {
        id: 1,
        image: require('../../assets/images/download.jpeg')
    },
    {
        id: 2,
        image: require('../../assets/images/download.jpeg')
    },
    {
        id: 3,
        image: require('../../assets/images/download.jpeg')
    },
    {
        id: 4,
        image: require('../../assets/images/download.jpeg')
    }
];


export default Dashboard = ({ navigation, carousel }) => {
    const dispatch = useDispatch()

    const [expand, setExpand] = useState(false)
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    console.log('posts', posts);

    useEffect(() => {
        getPostList()
    }, [])

    const expandClick = () => {
        setExpand(!expand)
    }

    const getPostList = () => {
        dispatch(fetchPostsService((res, err) => {
            setIsLoading(false)
            console.log('res', JSON.parse(res?.data?.data));
            setPosts(res?.data?.data ? JSON.parse(res.data.data) : [])
        }))
    }

    const renderPostsItem = ({ item }) => (

        <Block style={styles.item} margin={[0, 0, 10, 0]} flex={false}>
            <TouchableOpacity onPress={() => navigation.navigate('details')}>
                <Text bold textColor style={styles.post}>{item.title}</Text>
            </TouchableOpacity>

            <Text textColor center size={12} numberOfLines={expand ? null : 3} style={styles.des}>{item.body}</Text>
            <Block flex={false}>
                <Block flex={false} row center margin={[10, 0, 0]}>
                    <MaterialIcons style={{ marginRight: 5 }} name="date-range" />
                    <Text textColor size={12}>Publish Date: {dateFormat(item?.date?.$date)}</Text>
                </Block>
                <Block flex={false} row center>
                    <MaterialIcons style={{ marginRight: 5 }} name="person" />
                    <Text textColor size={12}>Author: {item?.user?.status || ''}</Text>
                </Block>
                <Block flex={false} row center>
                    <FontAwesome style={{ marginRight: 5 }} name="comments" />
                    <Text textColor size={12}>Comment</Text>
                </Block>
            </Block>

            <TouchableOpacity onPress={expandClick}>
                <Text style={{ color: 'blue', marginTop: 5 }}>
                    {!expand ? 'Read more' : 'Read less'}
                </Text>
            </TouchableOpacity>

        </Block>
    );

    const renderAdsItem = ({ item }) => {

        return (
            <Block center style={styles.slide} margin={[30, 0]} flex={false}>
                <Image style={styles.ads} source={item.image} />
            </Block>
        );
    }

    return (

        <Block block>
            <Navbar
                onPressProfile={() => navigation.navigate('profile')}
                onPressDrawer={() => navigation.openDrawer()}
            />
            <SafeAreaView style={styles.container} >
                {
                    isLoading ? <Loader /> :
                        <>
                            <Text textColor size={20}>Dashboard</Text>
                            <Block style={styles.block} flex={false}>
                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    data={posts}
                                    renderItem={renderPostsItem}
                                    keyExtractor={item => item._id.$oid.toString()}
                                    ListHeaderComponent={
                                        <Block flex={false} >
                                            <Block flex={false} style={styles.postBlock2}>
                                                <Text style={styles.title}>Posts</Text>
                                            </Block>
                                        </Block>

                                    }
                                    ListFooterComponent={
                                        <Block flex={false} center>
                                            <Carousel
                                                ref={(c) => { carousel = c; }}
                                                data={ADS}
                                                renderItem={renderAdsItem}
                                                sliderWidth={Dimensions.get('window').width}
                                                itemWidth={Dimensions.get('window').width - 20}
                                            />
                                        </Block>
                                    }
                                />
                            </Block>
                        </>
                }
            </SafeAreaView>
        </Block>

    );
}