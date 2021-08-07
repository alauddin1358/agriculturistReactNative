import React, { useState } from "react";
import { ImageBackground, Image } from "react-native";
import Block from '../../components/Block'
import Text from '../../components/Text'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './styles'
import { colors } from '../../styles/theme'
import { TouchableOpacity } from "react-native-gesture-handler";





export default Sidebar = ({ navigation }) => {

    const [posts, setPost] = useState(false)
    const [files, setFiles] = useState(false)
    const [friends, setFriends] = useState(false)

    const onPressPosts = () => {
        setPost(!posts)
        setFiles(false)
        setFriends(false)
    }
    const addPost = () => {
        navigation.navigate('addPost')
        setPost(false)
        setFiles(false)
        setFriends(false)
    }

    const onPressFriends = () => {
        setPost(false)
        setFiles(false)
        setFriends(!friends)
    }

    const onPressFiles = () => {
        setPost(false)
        setFiles(!files)
        setFriends(false)
    }

    const onPressAddFriends = () => {
        navigation.navigate('friends')
        setPost(false)
        setFiles(false)
        setFriends(false)
    }
    const onPressShowFriend = () => {
        navigation.navigate('friendsList')
        setPost(false)
        setFiles(false)
        setFriends(false)
    }
    const onPressAddFile = () => {
        navigation.navigate('addFile', { step: 1 })
        setPost(false)
        setFiles(false)
        setFriends(false)
    }

    const onPressShowFile = () => {
        navigation.navigate('addFile', { step: 2 })
        setPost(false)
        setFiles(false)
        setFriends(false)
    }

    const onPressShowPosts = () => {
        navigation.navigate('dashboard')
        setPost(false)
        setFiles(false)
        setFriends(false)
    }

    return (

        <Block flex={1}>
            <Block flex={1} padding={[0, 5, 20, 5]} style={styles.sidebar}>
                <Image style={styles.img} source={require('../../assets/logo.png')} />
                <Text white bold size={16}>Agriculturist</Text>

                <TouchableOpacity style={{ alignItems: 'center', marginTop: 40 }} onPress={() => navigation.navigate('dashboard')}>
                    <FontAwesome size={20} color="#FFF" name="dashboard" />
                    <Text white size={12}>Dashboard</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressPosts} style={{ alignItems: 'center', marginTop: 40 }}>
                    <Ionicons size={20} color="#FFF" name="person-add" />
                    <Text white size={12}>Posts</Text>
                </TouchableOpacity>
                {posts &&
                    <Block flex={false} style={styles.posts}>
                        <TouchableOpacity onPress={addPost} style={{ padding: 5 }}>
                            <Text textColor>Add Posts</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ padding: 5 }} onPress={onPressShowPosts}>
                            <Text textColor>Show My Posts</Text>
                        </TouchableOpacity>
                    </Block>
                }
                <TouchableOpacity onPress={onPressFiles} style={{ alignItems: 'center', marginTop: 40 }}>
                    <FontAwesome size={20} color="#FFF" name="file" />
                    <Text white size={12}>Files</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressFriends} style={{ alignItems: 'center', marginTop: 40 }}>
                    <Ionicons size={20} color="#FFF" name="people" />
                    <Text white size={12}>Friends</Text>
                </TouchableOpacity>
                {friends &&
                    <Block flex={false} style={styles.friends}>
                        <TouchableOpacity style={{ padding: 5 }} onPress={onPressAddFriends}>
                            <Text textColor>Add Friends</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ padding: 5 }} onPress={onPressShowFriend}>
                            <Text textColor>Show My Friends</Text>
                        </TouchableOpacity>
                    </Block>
                }
                {files &&
                    <Block flex={false} style={styles.files}>
                        <TouchableOpacity style={{ padding: 5 }} onPress={onPressAddFile}>
                            <Text textColor>Add Files</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ padding: 5 }} onPress={onPressShowFile}>
                            <Text textColor>Show My Files</Text>
                        </TouchableOpacity>
                    </Block>
                }
            </Block>
        </Block>

    );
}