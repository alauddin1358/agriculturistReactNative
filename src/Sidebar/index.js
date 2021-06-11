import React, { useState } from "react";
import { ImageBackground, Image } from "react-native";
import { Actions } from "react-native-router-flux";
import Block from '../components/Block'
import Text from '../components/Text'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './styles'
import { colors } from '../styles/theme'
import { TouchableOpacity } from "react-native-gesture-handler";





export default Sidebar = (props) => {

    const [posts, setPost] = useState(false)
    const [files, setFiles] = useState(false)
    const [friends, setFriends] = useState(false)

    return (

        <Block flex={1}>
            <Block flex={1} padding={[0, 5, 20, 5]} style={styles.sidebar}>
                <Image style={styles.img} source={require('../assets/images/Social_Fish2.png')} />
                <Text white bold size={16}>Agriculturist</Text>

                <TouchableOpacity style={{ alignItems: 'center', marginTop: 40 }} onPress={()=> Actions.drawer_dash()}>
                    <FontAwesome size={20} color="#FFF" name="dashboard" />
                    <Text white size={12}>Dashboard</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setPost(!posts)} style={{ alignItems: 'center', marginTop: 40 }}>
                    <Ionicons size={20} color="#FFF" name="person-add" />
                    <Text white size={12}>Posts</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFiles(!files)} style={{ alignItems: 'center', marginTop: 40 }}>
                    <FontAwesome size={20} color="#FFF" name="file" />
                    <Text white size={12}>Files</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFriends(!friends)} style={{ alignItems: 'center', marginTop: 40 }}>
                    <Ionicons size={20} color="#FFF" name="people" />
                    <Text white size={12}>Friends</Text>
                </TouchableOpacity>
                {posts &&
                    <Block flex={false} style={styles.posts}>
                        <TouchableOpacity style={{ padding: 5 }}>
                            <Text textColor>Add Posts</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ padding: 5 }}>
                            <Text textColor>Show My Posts</Text>
                        </TouchableOpacity>
                    </Block>
                }
                {friends &&
                    <Block flex={false} style={styles.friends}>
                        <TouchableOpacity style={{ padding: 5 }} onPress={() => Actions.drawer_friends()}>
                            <Text textColor>Add Friends</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ padding: 5 }}>
                            <Text textColor>Show My Friends</Text>
                        </TouchableOpacity>
                    </Block>
                }
                {files &&
                    <Block flex={false} style={styles.files}>
                        <TouchableOpacity style={{ padding: 5 }}>
                            <Text textColor>Add Files</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ padding: 5 }}>
                            <Text textColor>Show My Files</Text>
                        </TouchableOpacity>
                    </Block>
                }
            </Block>
        </Block>

    );
}