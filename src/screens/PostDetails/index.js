import React, { useEffect, useState } from "react"
import { ScrollView, Image, TextInput, SafeAreaView, TouchableOpacity, ActivityIndicator, Modal } from "react-native"
import Block from '../../components/Block'
import Text from '../../components/Text'
import styles from './styles'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AdsCarousel from '../Carousel'
import { dateFormat } from "../../utils/common"
import { Navbar } from "../../layouts/Navbar"
import { postCommentService, updateCommentService, deleteCommentService } from "../../services/comments"
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { Loader } from "../../components/Loader"
import { fetchSinglePost } from "../../services/post"
import { PrimaryButton } from "../../components/Button"
import AntDesign from 'react-native-vector-icons/AntDesign'





export default PostDetails = (props) => {

    const dispatch = useDispatch()
    const navigation = useNavigation();

    const postId = props?.route?.params?.post?._id?.$oid;


    const [post, setPost] = useState({})
    const [commentBody, setCommentBody] = useState('')
    const [cmntBody, setCmntBody] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [isBtnLoading, setIsBtnLoading] = useState(false)
    const [isBtn2Loading, setIsBtn2Loading] = useState(false)
    const [commentId, setCommentId] = useState('')
    const [edit, setEdit] = useState(null)
    const [modalVisible, setModalVisible] = useState(false)


    useEffect(() => {
        getSinglePost()
    }, [postId])


    const onSubmitComment = () => {
        setIsBtnLoading(true)
        dispatch(postCommentService(postId, commentBody, (res, err) => {
            getSinglePost()
            setIsBtnLoading(false)
        }))
    }


    const getSinglePost = () => {
        setIsLoading(true)
        dispatch(fetchSinglePost(postId, (res, err) => {
            setPost(res?.data?.data?.post ? JSON.parse(res.data.data.post) : {})
            setIsLoading(false)
        }))
    }

    const onUpdateComment = () => {
        setIsBtn2Loading(true)
        dispatch(updateCommentService(postId, commentId, cmntBody, (res, err) => {
            setEdit(1)
            setIsBtn2Loading(false)
            getSinglePost()
        }))
    }

    const onDeleteComment = () => {
        setModalVisible(false)
        dispatch(deleteCommentService(postId, commentId, (res, err) => {
            getSinglePost()
        }))
    }

    const onPressEdit = (item) => {
        setEdit(item._id.$oid)
        setCmntBody(item.cmntBody)
        setCommentId(item._id.$oid)
    }

    const onPressDelete = (item) => {
        setCommentId(item._id.$oid)
        setModalVisible(true)
    }

    return (

        <Block block>
            <SafeAreaView style={styles.container}>
                <Navbar/>
                <ScrollView block style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
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
                                        placeholderTextColor="#d2d2d2"
                                        numberOfLines={4} />
                                    <TouchableOpacity onPress={onSubmitComment} style={styles.btn}>
                                        <Text white style={{ marginRight: 5 }}>Submit</Text>{isBtnLoading && <ActivityIndicator color="white" />}
                                    </TouchableOpacity>

                                    {post && post?.comments.length > 0 && post.comments.map((item, i) => {
                                        return <Block block key={i}>
                                            <Block flex={false} margin={[20, 0, 0]}>
                                                <Block width flex={false}>
                                                    {edit == item._id.$oid ?
                                                        <Block row center flex={false} >
                                                            <Image style={styles.avatar} source={require('../../assets/images/ala.jpeg')} />
                                                            <Block flex={false}></Block>
                                                            <Block flex={false} >
                                                                <TextInput
                                                                    style={styles.input2}
                                                                    multiline={true}
                                                                    value={cmntBody}
                                                                    onChangeText={(value) => setCmntBody(value)}
                                                                    placeholder="Enter Your Comment"
                                                                    numberOfLines={2} />
                                                            </Block>
                                                        </Block>
                                                        :
                                                        <Block row center flex={false} >
                                                            <Image style={styles.avatar} source={require('../../assets/images/ala.jpeg')} />
                                                            <Block flex={false} style={styles.dot}></Block>
                                                            <Block flex={false} style={styles.com}>
                                                                <Text textColor>{item?.cmntBody}</Text>
                                                            </Block>
                                                        </Block>
                                                    }

                                                    <Block row bottom center flex={false} padding={[10]}>
                                                        <TouchableOpacity style={{ flexDirection: 'row', marginRight: 10 }} onPress={() => onPressEdit(item)}>
                                                            <AntDesign size={18} style={{ marginRight: 5 }} name="edit" />
                                                            <Text>Edit</Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => onPressDelete(item)}>
                                                            <AntDesign size={18} style={{ marginRight: 5 }} color="red" name="delete" />
                                                            <Text>Delete</Text>
                                                        </TouchableOpacity>
                                                    </Block>
                                                </Block>

                                                {edit == item._id.$oid &&
                                                    <TouchableOpacity onPress={onUpdateComment} style={styles.btn}>
                                                        <Text white>Submit</Text>{isBtn2Loading && <ActivityIndicator color="white" />}
                                                    </TouchableOpacity>
                                                }

                                            </Block>
                                        </Block>
                                    })}

                                    <Modal
                                        animationType="fade"
                                        transparent={true}
                                        visible={modalVisible}
                                        onRequestClose={() => {
                                            setModalVisible(!modalVisible);
                                        }}
                                    >
                                        <Block style={styles.centeredView} flex={1}>
                                            <Block style={styles.modalView} center flex={false}>
                                                <Text style={styles.modalText}>Want to delete comment!</Text>
                                                <Block flex={false} row center>
                                                    <TouchableOpacity style={styles.btn3} onPress={() => {
                                                        setModalVisible(false);
                                                    }}>
                                                        <Text white>Cancel</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={styles.btn2} onPress={onDeleteComment}>
                                                        <Text white>Confirm</Text>
                                                    </TouchableOpacity>
                                                </Block>
                                            </Block>
                                        </Block>
                                    </Modal>

                                </Block>
                                <AdsCarousel />
                            </Block>
                    }
                </ScrollView>
            </SafeAreaView>
        </Block>

    );
}