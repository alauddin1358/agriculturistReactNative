import React, { useEffect, useState } from "react"
import { ScrollView, TextInput, SafeAreaView } from "react-native"
import Toast from 'react-native-simple-toast'
import Block from '../../components/Block'
import Text from '../../components/Text'
import styles from './styles'
import { Navbar } from "../../layouts/Navbar"
import AdsCarousel from '../Carousel'
import { SecondaryButton } from '../../components/Button'
import { addPostService, updatePostService } from "../../services/post"
import { useDispatch } from "react-redux"
import checkPostValidation from "./validate"
import { useNavigation } from "@react-navigation/native"


export default AddPost = props => {
    const dispatch = useDispatch()
    const navigation = useNavigation()

    const singlePost = props?.route?.params?.post
    const id = props?.route?.params?.post?._id?.$oid

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [addPostLoading, setaddPostLoading] = useState(false)

    useEffect(() => {
        setPostData()
    }, [singlePost])

    const setPostData = () => {
        if (singlePost) {
            setTitle(singlePost.title)
            setBody(singlePost.body)
        }
    }

    const addPost = () => {
        if (checkPostValidation(title, body)) {
            setaddPostLoading(true)

            // const formData = new FormData()
            // formData.append('title', title)
            // formData.append('body', body)


            dispatch(addPostService(id, title, body, (res, err) => {
                setaddPostLoading(false)
                if (res?.data?.result) {
                    Toast.show(res?.data?.result?.message, Toast.LONG)
                    navigation.navigate('dashboard')
                }
            }))
        }
    }

    const updatePost = () => {
        if (checkPostValidation(title, body)) {
            setaddPostLoading(true)

            const formData = {
                title,
                body,
                // user: {
                //     'userId': singlePost._id.$oid,
                //     'status': singlePost.user.status,
                //     'image': singlePost.user.image
                // },
                // comments: [],
                // date: new Date()
            }

            // const formData = new FormData()
            // formData.append('title', title)
            // formData.append('body', body)
            // formData.append('user', {
            //     'userId': singlePost._id.$oid,
            //     'status': singlePost.user.status,
            //     'image': singlePost.user.image
            // })
            // formData.append('comments', [])
            // formData.append('date', new Date())

            dispatch(updatePostService(singlePost._id.$oid, formData, (res, err) => {
                setaddPostLoading(false)
                if (res?.data?.result) {
                    Toast.show(res?.data?.result?.message, Toast.LONG)
                    navigation.navigate('dashboard')
                }
            }))
        }
    }


    return (

        <Block block>
            <SafeAreaView style={styles.container} >
                <Navbar
                    onPressProfile={() => navigation.navigate('profile')}
                    onPressDrawer={() => navigation.openDrawer()}
                />
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={styles.container}>
                    <Block style={styles.block} flex={false}>
                        <Block flex={false} style={styles.postBlock2}>
                            <Text style={styles.title}>Add Post</Text>
                        </Block>
                        <Block flex={false} padding={[20, 10]}>
                            <Text size={16} textColor>Title</Text>
                            <TextInput
                                style={styles.titleBlock}
                                placeholder="Enter title"
                                value={title}
                                onChangeText={val => setTitle(val)}
                            />
                        </Block>
                        <Block flex={false} padding={[20, 10]}>
                            <Text size={16} textColor>Body</Text>
                            <TextInput
                                multiline
                                style={styles.BodyBlock}
                                placeholder="Enter Body"
                                value={body}
                                onChangeText={val => setBody(val)}
                            />
                        </Block>
                        <SecondaryButton
                            loading={addPostLoading}
                            btnText={singlePost ? 'Edit Post' : 'Add Post'}
                            btnStyle={{ width: '40%', marginBottom: 20 }}
                            onPress={singlePost ? updatePost : addPost} />
                    </Block>
                    <AdsCarousel />
                </ScrollView>
            </SafeAreaView>
        </Block>

    );
}