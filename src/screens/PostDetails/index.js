import React, { useEffect, useState } from "react"
import { ScrollView, Image, TextInput, TouchableOpacity } from "react-native"
import Block from '../../components/Block'
import Text from '../../components/Text'
import styles from './styles'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import AdsCarousel from '../Carousel'
import { dateFormat } from "../../utils/common"
import { Navbar } from "../../layouts/Navbar"
import { postCommentService } from "../../services/comments"
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import Comments from './comments'



export default PostDetails = (props) => {
    const dispatch = useDispatch()

    const navigation = useNavigation();

    const post = props?.route?.params?.post;
    const postId = props?.route?.params?.post?._id?.$oid;

    const [commentBody, setCommentBody] = useState('')
    const [comments, setComments] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const onSubmitComment = () => {
        dispatch(postCommentService(postId, commentBody, (res, err) => {
            setIsLoading(false)
            setComments(res?.data?.data ? JSON.parse(res.data.data) : [])
        }))
    }
    console.log('comment', comments);
    console.log('post', post);

    const renderAdsItem = ({ item, index }) => {

        return (
            <Block style={styles.slide} margin={[30, 0]}>
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
            <ScrollView block style={styles.container}>
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
                            <Text white>Submit</Text>
                        </TouchableOpacity>

                        {post?.comments.length > 0 && post.comments.map((item, i) => {
                            return <Comments key={i} post={item} postId={post?._id?.$oid} />
                        })}


                    </Block>
                    <AdsCarousel />
                </Block>
            </ScrollView>
        </Block>

    );
}