import React, { useState } from "react"
import { TextInput, TouchableOpacity } from "react-native"
import Toast from 'react-native-simple-toast'
import Block from '../../components/Block'
import Text from '../../components/Text'
import styles from './styles'
import { SecondaryButton } from '../../components/Button'
import { addFileService } from "../../services/file"
import { useDispatch } from "react-redux"


export default AddDocument = ({ navigation }) => {
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const addFile = () => {
        setLoading(true)
        const formData = {
            title,
            description,
        }

        dispatch(addFileService(formData, (res, err) => {
            setLoading(false)
        }))
    }


    return (

        <Block flex={false}>
            <Block flex={false} padding={[20, 0, 0]}>
                <TextInput
                    style={styles.titleBlock}
                    placeholder="Enter title"
                    value={title}
                    onChangeText={value => setTitle(value)}
                />
            </Block>
            <Block flex={false} padding={[10, 0]}>
                <TextInput
                    style={styles.titleBlock}
                    placeholder="Enter Description"
                    value={description}
                    onChangeText={value => setDescription(value)}
                />
            </Block>
            <TouchableOpacity style={styles.upload}>
                <Text textColor> Click here to select pdf file</Text>
            </TouchableOpacity>
            <SecondaryButton
                btnText="Submit"
                btnStyle={{ width: '40%', marginBottom: 20 }}
                onPress={addFile} />
        </Block>

    );
}