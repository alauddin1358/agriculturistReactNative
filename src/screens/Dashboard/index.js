import React, { useEffect, useState } from "react"
import { SafeAreaView, FlatList, TouchableOpacity, ScrollView } from "react-native"
import { useDispatch } from 'react-redux'
import Block from '../../components/Block'
import Text from '../../components/Text'
import styles from './styles'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Toast from 'react-native-simple-toast'
import AdsCarousel from '../Carousel'
import { Navbar } from "../../layouts/Navbar"
import { deletePostService, fetchPostsService } from "../../services/post"
import { dateFormat } from "../../utils/common"
import { Loader } from "../../components/Loader"
import EmptyData from "../../components/EmptyData"


export default Dashboard = ({ navigation, carousel }) => {
    const dispatch = useDispatch()

    const [expand, setExpand] = useState(null)
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getPostList()
    }, [])

    const expandClick = (item) => {
        setExpand(item)
    }

    const getPostList = () => {
        dispatch(fetchPostsService((res, err) => {
            setIsLoading(false)
            setPosts(res?.data?.data ? JSON.parse(res.data.data) : [])
        }))
    }

    const deletePost = postId => {
        dispatch(deletePostService(postId, (res, err) => {
            Toast.show(res?.data?.result?.message, Toast.LONG)
            getPostList()
        }))
    }

    const renderPostsItem = ({ item, i }) => (

        <Block key={i} style={styles.item} margin={[0, 0, 10, 0]} flex={false}>
            <TouchableOpacity onPress={() => navigation.navigate('details', { post: item })}>
                <Text bold textColor style={styles.post}>{item.title}</Text>
            </TouchableOpacity>

            <Text textColor center size={12} numberOfLines={expand === item?._id?.$oid ? null : 3} style={styles.des}>{item.body}</Text>
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
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
                        <FontAwesome style={{ marginRight: 5 }} name="comments" />
                        <Text textColor size={12}>Comment</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }} onPress={() => navigation.navigate('addPost', { post: item })}>
                        <AntDesign style={{ marginRight: 5 }} name="edit" />
                        <Text textColor size={12}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => deletePost(item._id.$oid)}>
                        <AntDesign style={{ marginRight: 5 }} name="delete" />
                        <Text textColor size={12}>Delete</Text>
                    </TouchableOpacity>
                </Block>
            </Block>
            {expand === item?._id?.$oid ?
                <TouchableOpacity onPress={() => expandClick(item)}>
                    <Text style={{ color: 'blue', marginTop: 5 }}>
                        Read Less
                    </Text>
                </TouchableOpacity> :
                <TouchableOpacity onPress={() => expandClick(item._id.$oid)}>
                    <Text style={{ color: 'blue', marginTop: 5 }}>
                        Read More
                    </Text>
                </TouchableOpacity>
            }



        </Block>
    );


    return (

        <Block block>
            <SafeAreaView style={{ flex: 1 }} >
                <Navbar />

                {
                    isLoading ? <Loader /> :
                        <Block padding={[10]} block>
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
                        </Block>
                }
            </SafeAreaView>
        </Block>

    );
}