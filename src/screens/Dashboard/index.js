import React, { useEffect, useState } from "react"
import { SafeAreaView, FlatList, TouchableOpacity } from "react-native"
import { useDispatch } from 'react-redux'
import Block from '../../components/Block'
import Text from '../../components/Text'
import styles from './styles'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AdsCarousel from '../Carousel'
import { Navbar } from "../../layouts/Navbar"
import { fetchPostsService } from "../../services/post"
import { dateFormat } from "../../utils/common"
import { Loader } from "../../components/Loader"
import EmptyData from "../../components/EmptyData"


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
            setPosts(res?.data?.data ? JSON.parse(res.data.data) : [])
        }))
    }

    const renderPostsItem = ({ item, i }) => (

        <Block key={i} style={styles.item} margin={[0, 0, 10, 0]} flex={false}>
            <TouchableOpacity onPress={() => navigation.navigate('details', { post: item })}>
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
                                    ListEmptyComponent={
                                        <EmptyData text="No Posts Found" />
                                    }
                                    ListFooterComponent={
                                        <AdsCarousel />
                                    }
                                />
                            </Block>
                        </>
                }
            </SafeAreaView>
        </Block>

    );
}