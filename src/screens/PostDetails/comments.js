import React, { useEffect, useState } from "react"
import { ScrollView, Image, TextInput, TouchableOpacity } from "react-native"
import Block from '../../components/Block'
import Text from '../../components/Text'
import styles from './styles'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { updateCommentService } from "../../services/comments"
import { useDispatch } from 'react-redux'





export default Comments = ({ post, postId }) => {

    const dispatch = useDispatch()

    const [edit, setEdit] = useState(false)
    const [commentBody, setCommentBody] = useState(post?.cmntBody)
    const [isLoading, setIsLoading] = useState(true)
    const [comments, setComments] = useState()


    const commentId = post?._id?.$oid

    const onSubmitComment = () => {
        dispatch(updateCommentService(postId, commentId, commentBody, (res, err) => {
            setIsLoading(false)
            setEdit(false)
            // setComments(res?.data?.data ? JSON.parse(res.data.data) : [])
            console.log(res);
        }))
    }



    return (

        <Block block>
            <Block flex={false} margin={[20, 0, 0]}>
                <Block row center width flex={false}>
                    {edit ?
                        <Block row center flex={false} >
                            <Image style={styles.avatar} source={require('../../assets/images/ala.jpeg')} />
                            <Block flex={false}></Block>
                            <Block flex={false} >
                                <TextInput
                                    style={styles.input2}
                                    multiline={true}
                                    value={commentBody}
                                    onChangeText={(value) => setCommentBody(value)}
                                    placeholder="Enter Your Comment"
                                    numberOfLines={2} />
                            </Block>
                        </Block>
                        :
                        <Block row center flex={false} >
                            <Image style={styles.avatar} source={require('../../assets/images/ala.jpeg')} />
                            <Block flex={false} style={styles.dot}></Block>
                            <Block flex={false} style={styles.com}>
                                <Text textColor>{post?.cmntBody}</Text>
                            </Block>
                        </Block>
                    }

                    <Block row center flex={false}>
                        <TouchableOpacity onPress={() => setEdit(!edit)}>
                            <AntDesign size={18} style={{ marginRight: 5 }} name="edit" />
                        </TouchableOpacity>
                        <AntDesign size={18} color="red" name="delete" />
                    </Block>
                </Block>

                {edit &&
                    <TouchableOpacity onPress={onSubmitComment} style={styles.btn}>
                        <Text white>Submit</Text>
                    </TouchableOpacity>
                }

            </Block>
        </Block>
    );
}