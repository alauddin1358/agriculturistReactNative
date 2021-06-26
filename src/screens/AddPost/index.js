import React, { useState } from "react"
import { ScrollView, TextInput } from "react-native"
import Toast from 'react-native-simple-toast'
import Block from '../../components/Block'
import Text from '../../components/Text'
import styles from './styles'
import { Navbar } from "../../layouts/Navbar"
import AdsCarousel from '../Carousel'
import { SecondaryButton } from '../../components/Button'
import { addPostService } from "../../services/post"
import { useDispatch } from "react-redux"
import checkPostValidation from "./validate"


export default AddPost = ({ navigation }) => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [addPostLoading, setaddPostLoading] = useState(false)

    const addPost = () => {
        if (checkPostValidation(title, body)) {
            setaddPostLoading(true)

            const formData = new FormData()
            formData.append('title', title)
            formData.append('body', body)

            dispatch(addPostService(formData, (res, err) => {
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
                        btnText="Add Post"
                        btnStyle={{ width: '40%', marginBottom: 20 }}
                        onPress={addPost} />
                </Block>
                <AdsCarousel />
            </ScrollView>
        </Block>

    );
}