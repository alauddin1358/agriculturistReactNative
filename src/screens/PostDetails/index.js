import React, { useEffect, useState } from "react"
import { ScrollView, Image, TextInput, TouchableOpacity,ActivityIndicator } from "react-native"
import Block from '../../components/Block'
import Text from '../../components/Text'
import styles from './styles'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AdsCarousel from '../Carousel'
import { dateFormat } from "../../utils/common"
import { Navbar } from "../../layouts/Navbar"
import { postCommentService, updateCommentService } from "../../services/comments"
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import Comments from './comments'
import { Loader } from "../../components/Loader"
import { fetchSinglePost } from "../../services/post"




export default PostDetails = (props) => {

    const dispatch = useDispatch()
    const navigation = useNavigation();

    const postId = props?.route?.params?.post?._id?.$oid;


    const [post, setPost] = useState({})
    const [commentBody, setCommentBody] = useState('')
    const [cmntBody, setCmntBody] = useState(post?.cmntBody)
    const [isLoading, setIsLoading] = useState(true)
    const [isBtnLoading, setIsBtnLoading] = useState(true)
    const [commentId, setCommentId] = useState('')
    const [edit, setEdit] = useState(false)


    useEffect(() => {
        getSinglePost()
    }, [])


    const onSubmitComment = () => {
        dispatch(postCommentService(postId, commentBody, (res, err) => {
            getSinglePost()
            setIsBtnLoading(false)
        }))
    }


    const getSinglePost = () => {
        dispatch(fetchSinglePost(postId, (res, err) => {
            setPost(res?.data?.data?.post ? JSON.parse(res.data.data.post) : {})
            setIsLoading(false)
        }))
    }

    const onUpdateComment = () => {
        dispatch(updateCommentService(postId, commentId, cmntBody, (res, err) => {
            setEdit(false)
            getSinglePost()
        }))
    }

    const onEditPressed = (value) => {
        setEdit(!edit)
        setCommentId(value)
    }


    return (

        <Block block>
            <Navbar
                onPressProfile={() => navigation.navigate('profile')}
                onPressDrawer={() => navigation.openDrawer()}
            />
            <ScrollView block style={styles.container}>
                {
                    isLoading ? <Loader /> :
                        <Block style={styles.block} flex={false}>
                            <Block flex={false} style={styles.item} margin={[0, 0, 10, 0]}>
                                <Text bold textColor style={styles.post}>{post?.title}
                                </Text>
                                <Block flex={false} row center style={{ maxWidth: 300 }}>
                                    <Block flex={false} row center margin={[5, 5, 0]}>
                                        <MaterialIcons style={{ marginRight: 5 }} name="date-range" />
                                        <Text textColor size={12}>Publish Date: {dateFormat(post?.date?.$date)}</Text>
                                    </Block>
                                    <Block flex={false} row center margin={[5, 5, 0]}>
                                        <MaterialIcons style={{ marginRight: 5 }} name="person" />
                                        <Text textColor size={12}>Author: {post?.user?.status || ''}</Text>
                                    </Block>
                                </Block>

                                <Block flex={false} margin={[10, 0]}>
                                    <Text textColor size={12} style={styles.des}>{post?.body}</Text>

                                </Block>
                            </Block>
                            <Block flex={false} style={styles.comments}>
                                <Text size={19}>Comments</Text>
                                <TextInput
                                    style={styles.input}
                                    multiline={true}
                                    value={commentBody}
                                    onChangeText={(value) => setCommentBody(value)}
                                    placeholder="Enter Your Comment"
                                    numberOfLines={4} />
                                <TouchableOpacity onPress={onSubmitComment} style={styles.btn}>
                                    <Text white>Submit</Text>{isBtnLoading && <ActivityIndicator />}
                                </TouchableOpacity>

                                {post && post?.comments.length > 0 && post.comments.map((item, i) => {
                                    return <Comments post={item} postId={postId} key={i} />
                                })}

                            </Block>
                            <AdsCarousel />
                        </Block>
                }
            </ScrollView>
        </Block>

    );
}