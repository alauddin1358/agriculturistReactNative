import React, { useEffect, useState } from "react"
import { ScrollView, TextInput, SafeAreaView } from "react-native"
import Toast from 'react-native-simple-toast'
import Block from '../../components/Block'
import Text from '../../components/Text'
import { Navbar } from "../../layouts/Navbar"
import AdsCarousel from '../Carousel'
import { SecondaryButton } from '../../components/Button'
import { updatePostService } from "../../services/post"
import { useDispatch } from "react-redux"
import checkPostValidation from "./validate"
import { useNavigation } from "@react-navigation/native"
import styles from './styles'


export default EditPost = props => {
    const dispatch = useDispatch()
    const navigation = useNavigation()

    const singlePost = props?.route?.params?.post

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [editPostLoading, setEditPostLoading] = useState(false)

    useEffect(() => {
        setPostData()
    }, [singlePost])

    const setPostData = () => {
        if (singlePost) {
            setTitle(singlePost.title)
            setBody(singlePost.body)
        }
    }


    const updatePost = () => {
        if (checkPostValidation(title, body)) {
            setEditPostLoading(true)

            const formData = {
                title,
                body,
            }

            dispatch(updatePostService(singlePost._id.$oid, formData, (res, err) => {
                setEditPostLoading(false)
                if (res?.data?.result) {
                    Toast.show(res?.data?.result?.message, Toast.LONG)
                    navigation.navigate('dashboard', { reload: true })
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
                            <Text style={styles.title}>Edit Post</Text>
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
                            loading={editPostLoading}
                            btnText={'Edit Post'}
                            btnStyle={{ width: '40%', marginBottom: 20 }}
                            onPress={updatePost} />
                    </Block>
                    <AdsCarousel />
                </ScrollView>
            </SafeAreaView>
        </Block>

    );
}